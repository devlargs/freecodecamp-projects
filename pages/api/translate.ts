import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";
import translate from "utils/translator";
import LOCALES from "constants/translatorLocales";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);

  if (req.method === "POST") {
    const { text, locale } = req.body || {};

    if (text === undefined || locale === undefined) {
      return res.json({ error: "Required field(s) missing" });
    }

    if (!text) {
      return res.json({ error: "No text to translate" });
    }

    if (!LOCALES.includes(locale)) {
      return res.json({ error: "Invalid value for locale field" });
    }

    return res.json({ text, translation: translate(text, locale) });
  }

  res.status(405).json({ error: "Method not allowed" });
};
