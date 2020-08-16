import styled from "styled-components";

export default () => {
  return (
    <Root>
      <Container>
        <div>
          <InputContainer>
            <input type="text" />
          </InputContainer>
          <Grid>
            <div className="clear">CLEAR</div>
            <div>/</div>
            <div>X</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>-</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>+</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div className="equal">=</div>
            <div className="zero">0</div>
            <div>.</div>
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
  }
  div:hover {
    border: 1px solid white;
    padding: 9px 29px 9px 29px;
  }
  .clear {
    grid-column: 1/3;
  }
  .zero {
    grid-column: 1/3;
  }
  .equal {
    grid-row: 4/6;
    grid-column: 4;
    display: flex;
    align-items: center;
  }
`;

const Flex = styled.div``;
