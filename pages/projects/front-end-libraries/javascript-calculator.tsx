import styled from "styled-components";
import SEO from "components/SEO";
import meta from "constants/meta";
import { useState } from "react";

export default () => {
  const [value, setValue] = useState(0);
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

  return (
    <Root>
      <SEO
        title="Javascript Calculator"
        withFCCScript
        description={meta.description("Javascript Calculator")}
        imageUrl={`/assets/images/projects/javascript-calculator.png`}
      />
      <Container>
        <div>
          <InputContainer>
            <input type="text" id="display" value={value} />
          </InputContainer>
          <Grid>
            {Object.keys(numpads).map((q, i) => {
              return (
                <div key={i} className={q} id={q}>
                  {numpads[q]}
                </div>
              );
            })}
          </Grid>
        </div>
      </Container>
    </Root>
  );
};

const Root = styled.div`
  display: grid;
  height: calc(100vh - 70px);
  background-color: #7268a6;
  place-items: center;
`;

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

const Flex = styled.div``;
