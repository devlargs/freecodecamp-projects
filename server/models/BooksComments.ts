import { Schema, models, model } from "mongoose";
import timestamps from "constants/timestamps";
import Books from "./Books";

const name = "books_comments";

export default models[name] ||
  model(
    name,
    new Schema(
      {
        text: {
          type: String,
          required: true,
        },
        book_id: Schema.Types.ObjectId,
      },
      {
        timestamps,
        versionKey: false,
      }
    )
  );
