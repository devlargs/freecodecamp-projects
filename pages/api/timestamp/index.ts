import { NextApiRequest, NextApiResponse } from "next";
import CORS from "cors";
import initMiddleware from "server/helpers/initMiddleware";

const cors = initMiddleware(
  CORS({
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE", "PATCH"],
  })
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);

  if (req.method === "GET") {
    res.json({ unix: +new Date(), utc: new Date().toUTCString() });
  }
};
