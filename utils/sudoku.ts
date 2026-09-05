export const EMPTY = ".";
export const LENGTH = 81;
export const ROWS = "ABCDEFGHI";

const indexOf = (row: number, column: number) => row * 9 + column;

const hasRowConflict = (cells: string[], row: number, column: number, value: string) => {
  for (let i = 0; i < 9; i++) {
    if (i !== column && cells[indexOf(row, i)] === value) {
      return true;
    }
  }
  return false;
};

const hasColumnConflict = (cells: string[], row: number, column: number, value: string) => {
  for (let i = 0; i < 9; i++) {
    if (i !== row && cells[indexOf(i, column)] === value) {
      return true;
    }
  }
  return false;
};

const hasRegionConflict = (cells: string[], row: number, column: number, value: string) => {
  const startRow = row - (row % 3);
  const startColumn = column - (column % 3);

  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startColumn; j < startColumn + 3; j++) {
      if ((i !== row || j !== column) && cells[indexOf(i, j)] === value) {
        return true;
      }
    }
  }
  return false;
};

export const normalize = (puzzle: string) => {
  const cells = `${puzzle || ""}`.slice(0, LENGTH).split("");
  while (cells.length < LENGTH) {
    cells.push(EMPTY);
  }
  return cells;
};

export const validatePuzzle = (puzzle: string) => {
  if (typeof puzzle !== "string") {
    return "Expected puzzle to be 81 characters long";
  }
  if (/[^1-9.]/.test(puzzle)) {
    return "Invalid characters in puzzle";
  }
  if (puzzle.length !== LENGTH) {
    return "Expected puzzle to be 81 characters long";
  }
  return "";
};

export const parseCoordinate = (coordinate: string) => {
  if (typeof coordinate !== "string" || !/^[A-I][1-9]$/i.test(coordinate)) {
    return null;
  }
  return {
    row: ROWS.indexOf(coordinate[0].toUpperCase()),
    column: +coordinate[1] - 1,
  };
};

const hasConflict = (cells: string[], row: number, column: number, value: string) =>
  hasRowConflict(cells, row, column, value) ||
  hasColumnConflict(cells, row, column, value) ||
  hasRegionConflict(cells, row, column, value);

export const getConflicts = (
  puzzle: string,
  row: number,
  column: number,
  value: string
) => {
  const cells = puzzle.split("");
  const conflicts = [];

  if (hasRowConflict(cells, row, column, value)) {
    conflicts.push("row");
  }
  if (hasColumnConflict(cells, row, column, value)) {
    conflicts.push("column");
  }
  if (hasRegionConflict(cells, row, column, value)) {
    conflicts.push("region");
  }

  return conflicts;
};

export const isConsistent = (puzzle: string) => {
  const cells = puzzle.split("");

  for (let i = 0; i < LENGTH; i++) {
    if (cells[i] === EMPTY) {
      continue;
    }
    if (hasConflict(cells, Math.floor(i / 9), i % 9, cells[i])) {
      return false;
    }
  }

  return true;
};

export default (puzzle: string) => {
  if (validatePuzzle(puzzle) || !isConsistent(puzzle)) {
    return "";
  }

  const cells = puzzle.split("");

  const fill = () => {
    const index = cells.indexOf(EMPTY);
    if (index === -1) {
      return true;
    }

    const row = Math.floor(index / 9);
    const column = index % 9;

    for (let value = 1; value <= 9; value++) {
      const candidate = `${value}`;
      if (!hasConflict(cells, row, column, candidate)) {
        cells[index] = candidate;
        if (fill()) {
          return true;
        }
        cells[index] = EMPTY;
      }
    }

    return false;
  };

  return fill() ? cells.join("") : "";
};
