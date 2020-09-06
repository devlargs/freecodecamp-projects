import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";
import connect from "server/helpers/connect";
import useBodyParser from "server/helpers/useBodyParser";
import ExerciseUsers from "server/models/ExerciseUsers";
import errorHandler from "server/helpers/errorHandler";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  useBodyParser();
  await cors(req, res);
  await connect();

  if (req.method === "POST") {
    if (req.body.username) {
      const user = new ExerciseUsers({ username: req.body.username });
      try {
        const newUser = await user.save();
        res.send(newUser);
      } catch (ex) {
        res.send({ status: false, error: errorHandler(`${ex}`) });
      }
    } else {
      res.send({ status: false, error: "Username is required" });
    }
  }
};
