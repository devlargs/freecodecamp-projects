import { Schema, models, model } from "mongoose";

const name = "exercises";
const ExerciseSchema = new Schema(
  {
    userId: {
      type: String,
      required: [true, "User ID is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    duration: {
      type: Number,
      required: [true, "Duration is required"],
    },
    date: Date,
  },
  {
    versionKey: false,
  }
);

export default models[name] || model(name, ExerciseSchema);
