import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";
import connect from "server/helpers/connect";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);
  await connect();

  if (req.method === "POST") {
  }
};
