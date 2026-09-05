import styled from "styled-components";
import SEO from "components/SEO";
import meta from "constants/meta";
import { useState } from "react";
import CenteredContent from "components/CenteredContent";

const operations = ["+", "-", "X", "/"];
const operandRegex = /[-+/*X]/gi;
const numbers = "1234567890";

export default () => {
  const [value, setValue] = useState("0");

  const numpads = {
    clear: "CLEAR",
    divide: "/",
    multiply: "X",
    seven: "7",
    eight: "8",
    nine: "9",
    subtract: "-",
    four: "4",
    five: "5",
    six: "6",
    add: "+",
    one: "1",
    two: "2",
    three: "3",
    equals: "=",
    zero: "0",
    decimal: ".",
  };

  const click = (key) => {
    if (key === ".") {
      const operands = value.split(operandRegex);
      const lastValue = operands[operands.length - 1] || "";
      if (!lastValue.includes(".")) {
        setValue((value) => `${value}.`);
      }
      return;
    }

    if (key === "CLEAR") {
      setValue("0");
      return;
    }

    if (key === "=") {
      let newVal = value.split("X").join("*");
      if (operations.includes(value[value.length - 1])) {
        newVal = newVal.slice(0, -1);
      }
      try {
        if (!/^[\d+\-*/.]+$/.test(newVal)) {
          throw new Error("Unexpected characters in expression");
        }
        setValue(`${eval(newVal)}`);
      } catch (Ex) {
        setValue(`Syntax Error`);
        setTimeout(() => setValue("0"), 500);
      }
      return;
    }

    if (numbers.split("").includes(key)) {
      setValue((value) => (value === "0" ? key : `${value}${key}`));
      return;
    }

    if (operations.includes(key)) {
      const last = value[value.length - 1];

      if (last === key) {
        return;
      }

      if (!operations.includes(last)) {
        setValue(`${value}${key}`);
        return;
      }

      if (key === "-" && !operations.includes(value[value.length - 2])) {
        setValue(`${value}${key}`);
        return;
      }

      let base = value;
      while (operations.includes(base[base.length - 1])) {
        base = base.slice(0, -1);
      }
      setValue(`${base}${key}`);
    }
  };

  return (
    <CenteredContent bgColor="#7268a6">
      <SEO title="Javascript Calculator" withFCCScript />
      <Container>
        <div>
          <InputContainer>
            <input type="text" id="display" value={value} readOnly />
          </InputContainer>
          <Grid>
            {Object.keys(numpads).map((q, i) => (
              <div
                key={i}
                className={q}
                id={q}
                onClick={() => click(numpads[q])}
              >
                {numpads[q]}
              </div>
            ))}
          </Grid>
        </div>
      </Container>
    </CenteredContent>
  );
};

const Container = styled.div`
  display: grid;
  background-color: #ddd;
  padding: 1em;
  grid-row-gap: 10px;
  border-radius: 6%;
`;

const InputContainer = styled.div`
  padding: 10px 0 10px 0;
  input {
    width: 100%;
    height: 40px;
    border: none;
    font-family: Orbitron;
    font-size: 22px;
    text-align: right;
    padding-right: 10px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  grid-gap: 5px;
  div {
    padding: 10px 30px 10px 30px;
    font-size: 20px;
    background-color: #a66b72;
    color: white;
    cursor: pointer;
  }
  div:hover {
    border: 2px solid white;
    padding: 8px 28px 8px 28px;
  }
  .clear {
    grid-column: 1/3;
  }
  .zero {
    grid-column: 1/3;
  }
  .equals {
    grid-row: 4/6;
    grid-column: 4;
    display: flex;
    align-items: center;
  }
`;
