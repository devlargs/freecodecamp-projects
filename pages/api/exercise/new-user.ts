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
        res.status(200).send(newUser);
      } catch (ex) {
        res.status(400).send({ error: errorHandler(`${ex}`) });
      }
    } else {
      res.status(400).send({ error: "Username is required" });
    }
  }
};
