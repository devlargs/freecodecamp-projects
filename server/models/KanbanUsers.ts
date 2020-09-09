import { model, models, Schema } from "mongoose";
import timestamps from "constants/timestamps";

const name = "kanban_users";

const KanbanUsersSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required!"],
      unique: [true, "User already exists"],
    },
  },
  {
    timestamps,
  }
);

export default models[name] || model(name, KanbanUsersSchema);
