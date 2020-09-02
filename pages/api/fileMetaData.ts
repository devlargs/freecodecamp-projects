import { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";

export const config = {
  api: {
    bodyParser: false,
  },
};

var upload = multer({ dest: "uploads" });

export default (req: NextApiRequest, res: NextApiResponse) => {
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
