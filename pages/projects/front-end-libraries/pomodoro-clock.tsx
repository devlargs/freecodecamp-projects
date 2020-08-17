import styled from "styled-components";

export default () => {
  return (
    <Root>
      <div>
        <Clock>
          <div className="content">
            <Timer>25:00</Timer>
          </div>
        </Clock>

        <Options>
          <div className="options-container">
            <OptionsText>Break Time</OptionsText>
            <Grid>
              <Operand>-</Operand>
              <Time>
                <h1>5 min</h1>
              </Time>
              <Operand>+</Operand>
            </Grid>
          </div>
          <div className="options-container">
            <OptionsText>Break Time</OptionsText>
            <Grid>
              <Operand>-</Operand>
              <Time>
                <h1>5 min</h1>
              </Time>
              <Operand>+</Operand>
            </Grid>
          </div>
        </Options>
      </div>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  height: calc(100vh - 49px - 70px);
  background-color: #28587b;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #eeeeff;
`;

const Clock = styled.div`
  display: flex;
  text-align: center;
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-color: #7f7caf;
    padding: 1em;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 5px solid #9fb798;
  }
`;

const Timer = styled.h1`
  font-size: 4em;
  color: #eeeeff;
  margin-bottom: 0;
`;

const Options = styled.div`
  margin-top: 2em;
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  .options-container {
    border-radius: 2em;
    padding: 1em;
    grid-gap: 1em;
    background-color: #9eb3c7;
    width: 300px;
    display: grid;
    place-items: center;
  }
`;

const OptionsText = styled.div`
  font-size: 24px;
  color: black;
`;

const Grid = styled.div`
  display: grid;
  width: 90%;
  grid-template-columns: 1fr 2fr 1fr;
  div {
    font-size: 18px;
  }
`;

const Operand = styled.div`
  background-color: #7f7caf;
  padding: 1em;
  border-radius: 15px;
  font-weight: bold;
  border: 2px solid #9eb3c7;
`;

const Time = styled.div`
  align-self: center;
  h1 {
    color: black;
    margin-bottom: 0;
  }
`;
