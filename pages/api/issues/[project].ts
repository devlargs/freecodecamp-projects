import { NextApiRequest, NextApiResponse } from "next";
import { Types } from "mongoose";
import cors from "server/helpers/cors";
import connect from "server/helpers/connect";
import Issues from "server/models/Issues";

const FIELDS = [
  "issue_title",
  "issue_text",
  "created_by",
  "assigned_to",
  "status_text",
  "open",
];

const HIDDEN = { project: 0 };

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);
  await connect();

  const { project, ...query } = req.query as any;

  if (req.method === "GET") {
    const filter: any = { project };

    FIELDS.concat("_id").forEach((field) => {
      if (query[field] !== undefined) {
        filter[field] =
          field === "open" ? query[field] === "true" : query[field];
      }
    });

    try {
      const issues = await Issues.find(filter, HIDDEN).sort({ created_on: 1 });
      return res.json(issues);
    } catch (ex) {
      return res.json([]);
    }
  }

  if (req.method === "POST") {
    const {
      issue_title,
      issue_text,
      created_by,
      assigned_to,
      status_text,
    } = req.body || {};

    if (!issue_title || !issue_text || !created_by) {
      return res.json({ error: "required field(s) missing" });
    }

    const now = new Date();

    try {
      const issue = await Issues.create({
        project,
        issue_title,
        issue_text,
        created_by,
        assigned_to: assigned_to || "",
        status_text: status_text || "",
        open: true,
        created_on: now,
        updated_on: now,
      });

      const { project: hidden, ...rest } = issue.toObject();
      return res.json(rest);
    } catch (ex) {
      return res.json({ error: "required field(s) missing" });
    }
  }

  if (req.method === "PUT") {
    const { _id, ...body } = req.body || {};

    if (!_id) {
      return res.json({ error: "missing _id" });
    }

    const update: any = {};
    FIELDS.forEach((field) => {
      if (body[field] !== undefined && body[field] !== "") {
        update[field] = body[field];
      }
    });

    if (!Object.keys(update).length) {
      return res.json({ error: "no update field(s) sent", _id });
    }

    update.updated_on = new Date();

    try {
      if (!Types.ObjectId.isValid(_id)) {
        throw new Error("invalid _id");
      }

      const updated = await Issues.findOneAndUpdate({ _id, project }, update);
      if (!updated) {
        throw new Error("not found");
      }

      return res.json({ result: "successfully updated", _id });
    } catch (ex) {
      return res.json({ error: "could not update", _id });
    }
  }

  if (req.method === "DELETE") {
    const { _id } = req.body || {};

    if (!_id) {
      return res.json({ error: "missing _id" });
    }

    try {
      if (!Types.ObjectId.isValid(_id)) {
        throw new Error("invalid _id");
      }

      const deleted = await Issues.findOneAndDelete({ _id, project });
      if (!deleted) {
        throw new Error("not found");
      }

      return res.json({ result: "successfully deleted", _id });
    } catch (ex) {
      return res.json({ error: "could not delete", _id });
    }
  }

  res.status(405).json({ error: "Method not allowed" });
};
