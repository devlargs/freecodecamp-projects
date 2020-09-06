import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";
import Exercises from "server/models/Exercises";
import connect from "server/helpers/connect";
import dayjs from 'dayjs';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);
  await connect();

    // !BUG Fix formatting

  if (req.method === "GET") {
    
      console.log(req.query);
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

        try {
            if (limit) {
                const users = await Exercises.find(obj).limit(+limit as any);
                res.status(200).json(users);
            } else {
                const users = await Exercises.find(obj);
                res.status(200).json(users);
            }
        } catch (ex) {
            res.status(400).json({ success: false, error: ex });
        }
    } else {
        try {
            const users = await Exercises.find();
            res.status(200).json(users);
        } catch (ex) {
            res.status(400).json({ success: false, error: ex });
        }
    }
  }
};
