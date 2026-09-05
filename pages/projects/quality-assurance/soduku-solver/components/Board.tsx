import styled from "styled-components";
import { EMPTY, normalize } from "utils/sudoku";

type Props = {
  puzzle?: string;
  solved?: number[];
  invalid?: number[];
  onChange?: (index: number, value: string) => void;
};

export default ({
  puzzle = "",
  solved = [],
  invalid = [],
  onChange = () => {},
}: Props) => (
  <Grid>
    {normalize(puzzle).map((cell, i) => {
      const row = Math.floor(i / 9);
      const column = i % 9;
      const className = [
        solved.includes(i) ? "solved" : "",
        invalid.includes(i) ? "invalid" : "",
        row % 3 === 0 && row !== 0 ? "block-top" : "",
        column % 3 === 0 && column !== 0 ? "block-left" : "",
      ]
        .filter(Boolean)
        .join(" ");

      return (
        <input
          key={i}
          className={className}
          type="text"
          maxLength={1}
          value={cell === EMPTY ? "" : cell}
          onChange={(e) => onChange(i, e.target.value)}
        />
      );
    })}
  </Grid>
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 40px);
  grid-template-rows: repeat(9, 40px);
  width: max-content;
  margin: auto;
  border: 2px solid #041529;

  input {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 1.2em;
    border: 1px solid #d9d9d9;
    color: #041529;
    outline: none;
  }

  input:focus {
    background-color: #e6f7ff;
  }

  input.solved {
    color: #6495ed;
  }

  input.invalid {
    color: #cf1322;
    background-color: #fff1f0;
  }

  input.block-top {
    border-top: 2px solid #041529;
  }

  input.block-left {
    border-left: 2px solid #041529;
  }

  @media screen and (max-width: 520px) {
    grid-template-columns: repeat(9, 32px);
    grid-template-rows: repeat(9, 32px);

    input {
      font-size: 1em;
    }
  }
`;
