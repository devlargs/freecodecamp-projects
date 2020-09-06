import mongoose from "mongoose";

const ExerciseSchema = new mongoose.Schema(
  {
    userId: {
        type: String,
        required: [true, "User ID is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    duration: {
        type: Number,
        required: [true, "Duration is required"]
    },
    date: Date
  },
  {
    versionKey: false,
  }
);

export default mongoose.models["exercises"] ||
  mongoose.model("exercises", ExerciseSchema);
