import styled from "styled-components";

export default () => {
  return (
    <Root className="h-calculated">
      <h1>Ralphlargo</h1>

      <div className="d-grid">
        <div className="grid">
          <div>Q</div>
          <div>W</div>
          <div>E</div>
          <div>A</div>
          <div>S</div>
          <div>D</div>
          <div>Z</div>
          <div>X</div>
          <div>C</div>
        </div>
      </div>
    </Root>
  );
};

const Root = styled.div`
  background-color: red;
  .d-grid {
    display: grid;
    height: 100%;
    place-items: center;
    h1 {
      text-align: center;
    }
    .grid {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: repeat(3, 1fr);
      place-items: center;
    }

    div {
      display: grid;
      place-items: center;
    }

    div > div {
      width: 100px;
      height: 100px;
      border: 5px solid black;
      padding: 10px;
      background-color: white;
      font-weight: bold;
      border-radius: 10px;
      font-size: 1.5rem;
    }
  }
`;
