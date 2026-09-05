import { useState } from "react";
import { Alert, Button, Input, Select } from "antd";
import axios from "axios";
import styled from "styled-components";
import SEO from "components/SEO";
import SD from "constants/styleDefaults";
import puzzles from "constants/sudokuPuzzles";
import { EMPTY, LENGTH, normalize, ROWS } from "utils/sudoku";
import Board from "./components/Board";

const { Option } = Select;
const { TextArea } = Input;

const BLANK = new Array(LENGTH).fill(EMPTY).join("");

export default () => {
  const [puzzle, setPuzzle] = useState(puzzles[0].puzzle);
  const [solved, setSolved] = useState([]);
  const [invalid, setInvalid] = useState([]);
  const [coordinate, setCoordinate] = useState("A1");
  const [value, setValue] = useState("1");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const reset = (next: string) => {
    setPuzzle(next);
    setSolved([]);
    setInvalid([]);
    setResult(null);
  };

  const onCellChange = (index: number, char: string) => {
    if (char && !/^[1-9]$/.test(char)) {
      return;
    }
    const cells = normalize(puzzle);
    cells[index] = char || EMPTY;
    reset(cells.join(""));
  };

  const solve = async () => {
    setLoading(true);
    const { data } = await axios.post("/api/sudoku/solve", { puzzle });
    setLoading(false);

    if (data.error) {
      setResult({ type: "error", message: data.error });
      return;
    }

    const filled = [];
    normalize(puzzle).forEach((cell, i) => {
      if (cell === EMPTY) {
        filled.push(i);
      }
    });

    setPuzzle(data.solution);
    setSolved(filled);
    setInvalid([]);
    setResult({ type: "success", message: "Puzzle solved" });
  };

  const check = async () => {
    setLoading(true);
    const { data } = await axios.post("/api/sudoku/check", {
      puzzle,
      coordinate,
      value,
    });
    setLoading(false);

    if (data.error) {
      setInvalid([]);
      setResult({ type: "error", message: data.error });
      return;
    }

    const index = ROWS.indexOf(coordinate[0].toUpperCase()) * 9 + +coordinate[1] - 1;

    if (data.valid) {
      setInvalid([]);
      setResult({
        type: "success",
        message: `${value} can be placed on ${coordinate.toUpperCase()}`,
      });
      return;
    }

    setInvalid([index]);
    setResult({
      type: "error",
      message: `${value} cannot be placed on ${coordinate.toUpperCase()}, it conflicts with the ${data.conflict.join(
        ", "
      )}`,
    });
  };

  return (
    <Root>
      <SEO title="Soduku Solver" />
      <h1 style={{ textAlign: "center", margin: 0, paddingTop: 10 }}>
        Soduku Solver
      </h1>
      <Content>
        <BoardStyle>
          <Board
            puzzle={puzzle}
            solved={solved}
            invalid={invalid}
            onChange={onCellChange}
          />
        </BoardStyle>
        <ControlStyle>
          <h3>Puzzle</h3>
          <Select
            placeholder="Load a sample puzzle"
            style={{ width: "100%", marginBottom: 10 }}
            onChange={(e: string) => reset(e)}
          >
            {puzzles.map((q) => (
              <Option key={q.name} value={q.puzzle}>
                {q.name}
              </Option>
            ))}
          </Select>
          <TextArea
            rows={3}
            value={puzzle}
            placeholder="Paste an 81 character puzzle string"
            onChange={(e) => reset(e.target.value)}
          />
          <Buttons>
            <Button type="primary" loading={loading} onClick={solve}>
              Solve
            </Button>
            <Button onClick={() => reset(BLANK)}>Clear</Button>
          </Buttons>

          <h3>Check Placement</h3>
          <Fields>
            <Input
              placeholder="A1"
              maxLength={2}
              value={coordinate}
              onChange={(e) => setCoordinate(e.target.value)}
            />
            <Input
              placeholder="1"
              maxLength={1}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button loading={loading} onClick={check}>
              Check
            </Button>
          </Fields>

          {result && (
            <Alert
              message={result.message}
              type={result.type}
              showIcon
              style={{ marginTop: 10 }}
            />
          )}
        </ControlStyle>
      </Content>
    </Root>
  );
};

const Root = styled.div`
  background-color: ${SD.colors.personalLibrary};
  height: calc(100vh - ${SD.sizes.header}px);
  overflow-y: auto;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const BoardStyle = styled.div`
  flex: 1;
  min-width: 380px;
  padding: 1em;
  margin: 10px;
  background-color: white;
`;

const ControlStyle = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 1em;
  margin: 10px;
  background-color: ${SD.colors.personalLibraryGrids};

  h3 {
    color: black;
    font-weight: 400;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Fields = styled.div`
  display: flex;
  gap: 10px;

  input {
    width: 80px;
  }
`;
