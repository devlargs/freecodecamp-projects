import { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";
import cors from "server/helpers/cors";

const upload = multer({ dest: "public/uploads" });

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);
  if (req.method === "POST") {
    upload.single("file")(req as any, {} as any, (err) => {
      const { file } = req as any;
      if (err) {
        res
          .status(400)
          .json({ status: false, message: "Something went wrong" });
      } else {
        res.status(200).json({
          name: file?.originalname,
          type: file?.mimetype,
          size: file?.size,
        });
      }
    });
  }
};
