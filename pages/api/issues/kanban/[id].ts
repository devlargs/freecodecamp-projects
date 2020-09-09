import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";
import connect from "server/helpers/connect";
import useBodyParser from "server/helpers/useBodyParser";
import KanbanIssuesSchema from "server/models/KanbanIssues";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const { id } = req.query;
  useBodyParser();
  await cors(req, res);
  await connect();

  if (method === "PUT") {
    try {
      const data = await KanbanIssuesSchema.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true }
      ).populate([
        {
          path: "assigned_to",
          select: ["username"],
        },
        {
          path: "status_text",
          select: { title: 1 },
        },
      ]);
      res.send({ data });
    } catch (error) {
      res.send({ error });
    }
  }

  if (method === "DELETE") {
    const response = await new Promise((resolve) => {
      KanbanIssuesSchema.findOne({ _id: id }).then((q) => {
        if (!q) {
          return resolve({ error: "No issue found" });
        } else {
          KanbanIssuesSchema.deleteOne({ _id: id }, (error) => {
            if (error) {
              return resolve({ error });
            } else {
              return resolve({ data: `Deleted ${id}` });
            }
          });
        }
      });
    });
    res.send(response);
  }
};
