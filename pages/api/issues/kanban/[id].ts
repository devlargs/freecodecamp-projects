import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";
import connect from "server/helpers/connect";
import useBodyParser from "server/helpers/useBodyParser";
import KanbanIssuesSchema from "server/models/KanbanIssues";
import KanbanStatusSchema from "server/models/KanbanStatus";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const { id } = req.query;
  useBodyParser();
  await cors(req, res);
  await connect();

  if (method === "GET") {
    if (req.query.id === "status") {
      try {
        const data = await KanbanStatusSchema.find();
        res.status(200).json({ data });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
    }
  }

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
    try {
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
    } catch (error) {
      res.send({
        error,
        message: "Something went wrong. [DELETE] /api/issues/kanban/:id",
      });
    }
  }
};
