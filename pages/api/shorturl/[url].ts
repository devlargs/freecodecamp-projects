import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";
import isURLValid from "utils/isURLValid";
import shortUrl from "node-url-shortener";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);

  if (req.method === "POST") {
    const { url } = req.query as any;
    if (!isURLValid(url)) {
      res.json({
        error: "invalid URL",
      });
    } else {
      shortUrl.short(url, (err, shortened) => {
        if (err) {
          res.json({ error: "something went wrong" });
        } else {
          res.json({ original_url: url, short_url: shortened });
        }
      });
    }
  }
};
