import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);

  if (req.method === "GET") {
    res.json({ unix: +new Date(), utc: new Date().toUTCString() });
  }
};
