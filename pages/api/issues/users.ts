import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";
import connect from "server/helpers/connect";
import useBodyParser from "server/helpers/useBodyParser";
import KanbanUsersSchema from "server/models/KanbanUsers";
import errorHandler from "server/helpers/errorHandler";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  useBodyParser();
  await cors(req, res);
  await connect();

  if (req.method === "POST") {
    if (req.body.username) {
      const status = new KanbanUsersSchema({ username: req.body.username });
      try {
        const newUser = await status.save();
        res.status(200).send({ data: newUser, status: true });
      } catch (ex) {
        res.status(400).send({ status: false, error: errorHandler(`${ex}`) });
      }
    } else {
      res.status(400).send({ status: false, error: "Username is required" });
    }
  }
};
