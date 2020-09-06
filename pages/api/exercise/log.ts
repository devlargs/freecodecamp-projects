import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";
import Exercises from "server/models/Exercises";
import ExerciseUsers from "server/models/ExerciseUsers";
import connect from "server/helpers/connect";
import dayjs from 'dayjs';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);
  await connect();

    // !BUG Fix formatting

  if (req.method === "GET") {
    
    if (req.query.userId) {
        const { userId, from, to, limit } = req.query;
        // TODO fix props of obj
        const obj: any = {
            userId
        }


        if (from && to) {
            obj.date = {
                "$gte": dayjs(from as any).startOf('day').format(),
                "$lt": dayjs(to as any).endOf('day').format()
            }
        }

        const tempUser = await ExerciseUsers.find({ _id:  userId });
        const {username } = tempUser[0];
        const count = await Exercises.find({ userId }).countDocuments();

        const responseObj = {
            _id: userId,
        username,
        count
        }

        try {
            if (limit) {
                const log = await Exercises.find(obj).limit(+limit as any);
                res.status(200).json({
                    log,
                    ...responseObj
                });
            } else {
                const log = await Exercises.find(obj);
                res.status(200).json({
                    log,
                    ...responseObj
                });
            }
        } catch (ex) {
            res.status(400).json({ success: false, error: ex });
        }
    } 
  }
};
