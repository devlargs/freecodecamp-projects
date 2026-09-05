import { NextApiRequest, NextApiResponse } from "next";
import cors from "server/helpers/cors";
import {
  getConflicts,
  parseCoordinate,
  validatePuzzle,
} from "utils/sudoku";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);

  if (req.method === "POST") {
    const { puzzle, coordinate, value } = req.body || {};

    if (!puzzle || !coordinate || !value) {
      return res.send({ error: "Required field(s) missing" });
    }

    const error = validatePuzzle(puzzle);
    if (error) {
      return res.send({ error });
    }

    const parsed = parseCoordinate(coordinate);
    if (!parsed) {
      return res.send({ error: "Invalid coordinate" });
    }

    if (!/^[1-9]$/.test(`${value}`)) {
      return res.send({ error: "Invalid value" });
    }

    const { row, column } = parsed;
    if (puzzle[row * 9 + column] === `${value}`) {
      return res.send({ valid: true });
    }

    const conflict = getConflicts(puzzle, row, column, `${value}`);

    return res.send(
      conflict.length ? { valid: false, conflict } : { valid: true }
    );
  }

  res.status(405).send({ error: "Method not allowed" });
};
