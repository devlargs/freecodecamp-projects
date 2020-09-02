import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { value } = req.query as any;

    const date = new Date(value.includes("-") ? value : +value) as any;

    if (`${date}` === "Invalid Date") {
      const newDate = new Date();
      res.json({ unix: +newDate, utc: newDate.toUTCString() });
    } else {
      res.status(200).json({ unix: +date, utc: date.toUTCString() });
    }
  }
};
