import { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";
import cors from "server/helpers/cors";
import initMiddleware from "server/helpers/initMiddleware";

export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = initMiddleware(
  multer({ storage: multer.memoryStorage() }).single("upfile")
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);

  if (req.method === "POST") {
    try {
      await upload(req, res);
    } catch (ex) {
      return res.status(400).json({ error: "Something went wrong" });
    }

    const { file } = req as any;

    if (!file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    return res.status(200).json({
      name: file.originalname,
      type: file.mimetype,
      size: file.size,
    });
  }

  res.status(405).json({ error: "Method not allowed" });
};
