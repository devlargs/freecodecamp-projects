import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
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
