import { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     console.log(file);
//     cb(null, "gago");
//   },
//   filename: function (req, file, cb) {
//     cb(null, "video.mp4");
//   },
// });

// var upload = multer({ storage: storage });

export default (req: NextApiRequest, res: NextApiResponse) => {
  //   console.log(req.body, "REQ");
  //   res.status(200).json({ text: "Sample Api" });

  if (req.method === "POST") {
    multer().single("file");
    // upload.single("video")(req, {}, (err) => {
    //   const { file } = req as any;
    //   //   res.send(file.path);
    //   //   res.end();
    //   console.log(file); // do something with the file
    // });

    // console.log(req.body);
    // res
    //   .status(200)
    //   .json({ name: "joker heath.jpg", type: "image/jpeg", size: 127918 });
  }
};
