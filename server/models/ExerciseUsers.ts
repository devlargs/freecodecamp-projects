import mongoose from "mongoose";

const ExerciseUsersSchema = new mongoose.Schema({
  users: String,
});

export default mongoose.models.ExerciseUsersSchema ||
  mongoose.model("ExerciseUsersSchema", ExerciseUsersSchema);
