import { Schema, models, model } from "mongoose";
import timestamps from "constants/timestamps";
import BooksComments from "./BooksComments";

const name = "books";
const BooksSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: BooksComments,
      },
    ],
  },
  {
    timestamps,
    versionKey: false,
  }
);

export default models[name] || model(name, BooksSchema);
