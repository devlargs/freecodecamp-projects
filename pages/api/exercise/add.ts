import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";
import Exercises from "server/models/Exercises";
import ExerciseUsers from "server/models/ExerciseUsers";
import connect from "server/helpers/connect";
import useBodyParser from "server/helpers/useBodyParser";
import dayjs from "dayjs";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  useBodyParser();
  await cors(req, res);
  await connect();

  if (req.method === "POST") {
    // TODO add validation
    const { userId, description, duration, date } = req.body;
    const exercise = new Exercises({
      userId,
      description,
      duration,
      date: date ? Date.parse(date) : new Date(),
    });
    const user = await ExerciseUsers.find({ _id: userId });
    const newExercise = await exercise.save();
    const temp = newExercise.toObject();
    delete temp.userId;
    console.log(temp);
    temp.date = temp.date.toDateString();

    res.send({
      ...temp,
      username: user[0].username,
      _id: userId,
    });
  }
};
