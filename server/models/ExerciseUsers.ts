import { Schema, model, models } from "mongoose";

const name = "exercise_users";

const ExerciseUsersSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
  },
  {
    versionKey: false,
  }
);

export default models[name] || model(name, ExerciseUsersSchema);
