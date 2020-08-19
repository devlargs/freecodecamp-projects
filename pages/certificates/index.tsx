import styled from "styled-components";

export default function () {
  return (
    <Root>
      <h1>Page is under construction!</h1>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  background-color: #ddd;
  font-size: 2em;
  height: calc(100vh - 49px);
  text-align: center;
  h1 {
    margin: auto;
  }
`;
