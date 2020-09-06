import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";
import Exercises from "server/models/Exercises";
import connect from "server/helpers/connect";
import useBodyParser from "server/helpers/useBodyParser";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    useBodyParser();
    await cors(req, res);
    await connect();

  if (req.method === "POST") {
    // TODO add validation
    const { userId, description, duration, date } = req.body;
    const exercise = new Exercises({ 
       userId, description, duration, date: date || new Date()
     });
    const newExercise = await exercise.save();
    res.send(newExercise);
  }
};
