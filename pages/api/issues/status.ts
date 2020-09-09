import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";
import connect from "server/helpers/connect";
import useBodyParser from "server/helpers/useBodyParser";
import KanbanStatusSchema from "server/models/KanbanStatus";
import errorHandler from "server/helpers/errorHandler";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  useBodyParser();
  await cors(req, res);
  await connect();

  if (req.method === "POST") {
    if (req.body.title) {
      const status = new KanbanStatusSchema({ title: req.body.title });
      try {
        const newStatus = await status.save();
        res.status(200).send({ data: newStatus, status: true });
      } catch (ex) {
        res.status(400).send({ status: false, error: errorHandler(`${ex}`) });
      }
    } else {
      res.status(400).send({ status: false, error: "Title is required" });
    }
  }
};
