import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";
import BooksSchema from "server/models/Books";
import CommentsSchema from "server/models/BooksComments";
import connect from "server/helpers/connect";
import useBodyParser from "server/helpers/useBodyParser";
import RS from "server/helpers/requiredStatus";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const { method } = req;
  useBodyParser();
  await cors(req, res);
  await connect();

  if (method === "GET") {
    try {
      const data = await new Promise((resolve) => {
        BooksSchema.find({ _id: id })
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
        path: "Something went wrong. [GET] /api/books/:id",
      });
    }
  }

  if (method === "POST") {
    const { text } = req.body;

    if (!text) {
      return res.status(400).send(RS("`text`"));
    }

    const comment = new CommentsSchema({
      text,
      book_id: id,
    });
    try {
      const newComment = await comment.save();
      await BooksSchema.findOneAndUpdate(
        { _id: id },
        {
          $push: { comments: newComment._id } as any,
        }
      );
      return res.status(200).send({ data: newComment });
    } catch (error) {
      return res
        .status(400)
        .send({ error, message: "Something went wrong [POST] /api/books/:id" });
    }
  }

  if (method === "DELETE") {
    try {
      const response = await new Promise((resolve) => {
        BooksSchema.findOne({ _id: id }).then((q) => {
          if (!q) {
            return resolve({ error: "No book found" });
          } else {
            BooksSchema.deleteOne({ _id: id }, (error) => {
              if (error) {
                return resolve({ error });
              } else {
                CommentsSchema.deleteMany(
                  {
                    book_id: id,
                  },
                  (err) => {
                    if (err) {
                      return resolve({ error: err });
                    } else {
                      return resolve({ data: `Deleted ${id}` });
                    }
                  }
                );
              }
            });
          }
        });
      });
      res.send(response);
    } catch (error) {
      res.send({
        error,
        message: "Something went wrong. [DELETE] /api/issues/kanban/:id",
      });
    }
  }
};
