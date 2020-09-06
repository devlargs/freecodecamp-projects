import { NextApiRequest, NextApiResponse } from "next";
import CORS from "cors";
import initMiddleware from "server/helpers/initMiddleware";
import ip from "request-ip";

const cors = initMiddleware(
  CORS({
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE", "PATCH"],
  })
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);
  res.status(200).json({
    ipaddress: ip.getClientIp(req),
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
  });
};
