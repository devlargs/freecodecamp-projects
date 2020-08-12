import mongoose from "mongoose";

const QuotesSchema = new mongoose.Schema({
  author: String,
  quote: String,
});

export default mongoose.models.Quotes || mongoose.model("Quotes", QuotesSchema);
