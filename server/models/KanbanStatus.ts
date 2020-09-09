import { model, models, Schema } from "mongoose";
import timestamps from "constants/timestamps";

const name = "kanban_statuses";
const KanbanStatusSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required!"],
      unique: [true, "Status already exists!"],
    },
  },
  {
    timestamps,
  }
);

export default models[name] || model(name, KanbanStatusSchema);
