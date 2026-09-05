import { model, models, Schema } from "mongoose";

const name = "issues";

const IssuesSchema = new Schema(
  {
    project: {
      type: String,
      required: [true, "Project is required!"],
      index: true,
    },
    issue_title: {
      type: String,
      required: [true, "Issue Title is required!"],
    },
    issue_text: {
      type: String,
      required: [true, "Issue Text is required!"],
    },
    created_by: {
      type: String,
      required: [true, "Created By is required!"],
    },
    assigned_to: { type: String, default: "" },
    status_text: { type: String, default: "" },
    open: { type: Boolean, default: true },
    created_on: { type: Date, default: Date.now },
    updated_on: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  }
);

export default models[name] || model(name, IssuesSchema);
