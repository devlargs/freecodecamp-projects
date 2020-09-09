import { model, models, Schema } from "mongoose";
import timestamps from "constants/timestamps";
import KanbanUsersSchema from "./KanbanUsers";
import KanbanStatusSchema from "./KanbanStatus";

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
      ref: KanbanUsersSchema,
    },
    status_text: { type: ObjectId, ref: KanbanStatusSchema },
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
