import mongoose from "mongoose";

const ExerciseUsersSchema = new mongoose.Schema(
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

export default mongoose.models["exercise_users"] ||
  mongoose.model("exercise_users", ExerciseUsersSchema);
