import styled from "styled-components";

export default () => {
  return (
    <Root>
      <Content>
        <h1>Pomodoro Clock</h1>
        <div>25:00</div>
      </Content>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  height: calc(100vh - 49px - 70px);
  background-color: #1e555d;
  text-align: center;
`;

const Content = styled.div`
  margin: auto;
  h1 {
    font-size: 2em;
  }
`;
