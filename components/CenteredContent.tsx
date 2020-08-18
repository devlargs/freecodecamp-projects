import styled from "styled-components";

export default (props) => {
  return <Root>{props.children}</Root>;
};

const Root = styled.div`
  display: grid;
  place-items: center;
  height: calc(100vh - 49px);
`;
