import { NextApiRequest, NextApiResponse } from "next";
import connect from "server/helpers/connect";
import Quotes from "server/models/Quotes";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  await connect();

  switch (method) {
    case "GET":
      try {
        const quotes = await Quotes.find({});
        res.status(200).json({ success: true, data: quotes });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
