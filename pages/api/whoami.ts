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
  res.status(200).json({
    ipaddress: "35.191.3.155",
    language: "en-US,en;q=0.9,fil;q=0.8,la;q=0.7",
    software:
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
  });
};
