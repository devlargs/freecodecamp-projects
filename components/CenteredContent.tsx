import styled from "styled-components";
import { ReactNode } from "react";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
  bgColor?: string;
};

export default ({ children, bgColor }: Props) => {
  return (
    <>
      <Root bgColor={bgColor}>{children}</Root>
    </>
  );
};

const Root = styled.div`
  display: grid;
  height: calc(100vh - 49px);
  background-color: ${(props) => props?.bgColor};
  place-items: center;
`;
