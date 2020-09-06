import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);

  if (req.method === "GET") {
    const { value } = req.query as any;

    if (value) {
      const date = new Date(value.includes("-") ? value : +value) as any;

      if (`${date}` === "Invalid Date") {
        res.json({ error: "Invalid Date" });
      } else {
        res.status(200).json({ unix: +date, utc: date.toUTCString() });
      }
    } else {
      res.json({ unix: +new Date(), utc: new Date().toUTCString() });
    }
  }
};
