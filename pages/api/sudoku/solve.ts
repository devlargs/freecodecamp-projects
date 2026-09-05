import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";
import solve, { validatePuzzle } from "utils/sudoku";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);

  if (req.method === "POST") {
    const { puzzle } = req.body || {};

    if (!puzzle) {
      return res.send({ error: "Required field missing" });
    }

    const error = validatePuzzle(puzzle);
    if (error) {
      return res.send({ error });
    }

    const solution = solve(puzzle);
    if (!solution) {
      return res.send({ error: "Puzzle cannot be solved" });
    }

    return res.send({ solution });
  }

  res.status(405).send({ error: "Method not allowed" });
};
