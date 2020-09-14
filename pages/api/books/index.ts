import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";
import BooksSchema from "server/models/Books";
import BooksCommentsSchema from "server/models/BooksComments";
import connect from "server/helpers/connect";
import useBodyParser from "server/helpers/useBodyParser";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  useBodyParser();
  await cors(req, res);
  await connect();

  if (req.method === "GET") {
    try {
      const data = await new Promise((resolve) => {
        BooksSchema.find()
          .populate("comments")
          .exec((error, data) => {
            if (error) {
              resolve({ error });
            } else {
              resolve({
                data: data.map((q) => {
                  const temp = q.toObject();
                  return {
                    ...temp,
                    commentcount: temp.comments.length,
                  };
                }),
              });
            }
          });
      });
      res.send(data);
    } catch (ex) {
      res.send({
        error: ex,
        path: "Something went wrong. [GET] /api/books",
      });
    }
  }

  if (req.method === "POST") {
    const { title } = req.body;

    if (title) {
      const book = new BooksSchema({
        title,
      });

      try {
        const newBook = await book.save();
        res.send({
          ...newBook.toObject(),
        });
      } catch (error) {
        res.send({ error });
      }
    } else {
      res.send({ error: "Title is required" });
    }
  }

  if (req.method === "DELETE") {
    try {
      await BooksSchema.deleteMany({});
      await BooksCommentsSchema.deleteMany({});
      res.send({ message: "complete delete successful" });
    } catch (error) {
      res.send({ error });
    }
  }
};
