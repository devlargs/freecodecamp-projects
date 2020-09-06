import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";
import ip from "request-ip";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);
  res.status(200).json({
    ipaddress: ip.getClientIp(req),
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
  });
};
