import { model, models, Schema } from "mongoose";
import timestamps from "constants/timestamps";

const { ObjectId } = Schema.Types;

const name = "kanban_issues";
const KanbanIssuesSchema = new Schema(
  {
    issue_title: {
      type: String,
      required: [true, "Issue Title is required!"],
    },
    issue_text: {
      type: String,
      required: [true, "Issue Text is required!"],
    },
    assigned_to: {
      type: ObjectId,
      ref: "kanban_users",
    },
    status_text: { type: ObjectId, ref: "kanban_statuses" },
    open: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps,
  }
);

export default models[name] || model(name, KanbanIssuesSchema);
