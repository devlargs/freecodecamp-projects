// import requestIp =
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    ipaddress: "35.191.3.155",
    language: "en-US,en;q=0.9,fil;q=0.8,la;q=0.7",
    software:
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
  });
};
