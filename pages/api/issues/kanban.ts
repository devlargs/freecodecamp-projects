import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";
import connect from "server/helpers/connect";
import useBodyParser from "server/helpers/useBodyParser";
import KanbanIssuesSchema from "server/models/KanbanIssues";
import errorHandler from "server/helpers/errorHandler";
import RS from "server/helpers/requiredStatus";
import { model, models, Schema } from "mongoose";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  useBodyParser();
  await cors(req, res);
  await connect();

  if (req.method === "GET") {
    console.log(models);
    KanbanIssuesSchema.find()
      .populate("assigned_to")
      .exec((err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      });
    // console.log(issues);
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
      res.status(200).send({ data: newIssue, status: true });
    } catch (ex) {
      res.status(400).send({ status: false, error: errorHandler(`${ex}`) });
    }
  }
};
