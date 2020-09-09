import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";
import connect from "server/helpers/connect";
import useBodyParser from "server/helpers/useBodyParser";
import KanbanIssuesSchema from "server/models/KanbanIssues";
import errorHandler from "server/helpers/errorHandler";
// import RS from "server/helpers/requiredStatus";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  useBodyParser();
  await cors(req, res);
  await connect();

  if (req.method === "DELETE") {
    const response = await new Promise((resolve) => {
      KanbanIssuesSchema.findOne({ _id: req.query.id }).then((q) => {
        if (!q) {
          return resolve({ error: "No issue found" });
        } else {
          KanbanIssuesSchema.deleteOne({ _id: req.query.id }, (error) => {
            if (error) {
              return resolve({ error });
            } else {
              return resolve({ data: `Deleted ${req.query.id}` });
            }
          });
        }
      });
    });
    res.send(response);
  }
};
