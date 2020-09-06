import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";
import ExerciseUsers from "server/models/ExerciseUsers";
import connect from "server/helpers/connect";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);
  await connect();

  if (req.method === "GET") {
    try {
      const users = await ExerciseUsers.find();
      res.status(200).json(users);
    } catch (ex) {
      res.status(400).json({ success: false, error: ex });
    }
  }
};
