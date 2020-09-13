import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";
import connect from "server/helpers/connect";
import useBodyParser from "server/helpers/useBodyParser";
import KanbanIssuesSchema from "server/models/KanbanIssues";
import errorHandler from "server/helpers/errorHandler";
import RS from "server/helpers/requiredStatus";

type QueryProps = {
  open?: boolean;
  assigned_to?: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  useBodyParser();
  await cors(req, res);
  await connect();

  if (req.method === "GET") {
    const data = await new Promise((resolve) => {
      const { open, assigned_to } = req.query;
      let obj: QueryProps = {};

      if (assigned_to) {
        obj.assigned_to = `${assigned_to}`;
      }

      if (open && (open === "true" || open === "false")) {
        obj.open = JSON.parse(open);
      }

      if (typeof open === "boolean") {
        obj.open = open;
      }

      KanbanIssuesSchema.find(obj)
        .populate([
          {
            path: "assigned_to",
            select: ["username"],
          },
          {
            path: "status_text",
            select: { title: 1 },
          },
        ])
        .exec((error, data) => {
          if (error) {
            resolve({ error });
          } else {
            resolve({ data });
          }
        });
    });

    res.send(data);
  }

  if (req.method === "POST") {
    const { issue_title, issue_text } = req.body;

    if (!issue_title) {
      return res.status(400).send(RS("Issue Title"));
    }

    if (!issue_text) {
      return res.status(400).send(RS("Issue Text"));
    }

    const issues = new KanbanIssuesSchema(req.body);
    try {
      const newIssue = await issues.save();
      return res.status(200).send({ data: newIssue });
    } catch (ex) {
      return res.status(400).send({ error: errorHandler(`${ex}`) });
    }
  }
};
