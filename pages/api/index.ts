import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: "Sample Api" });
};
