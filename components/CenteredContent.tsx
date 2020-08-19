import styled from "styled-components";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  bgColor?: string;
  height?: string;
};

export default ({ children, bgColor, height }: Props) => {
  return (
    <>
      <Root
        {...{
          bgColor,
          height,
        }}
      >
        {children}
      </Root>
    </>
  );
};

const Root = styled.div`
  display: grid;
  height: ${(props) => props?.height || "calc(100vh - 49px)"};
  background-color: ${(props) => props?.bgColor};
  place-items: center;
`;
