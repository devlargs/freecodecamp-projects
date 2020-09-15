import styled from "styled-components";
import { ReactNode } from "react";
import SD from "constants/styleDefaults";

type Props = {
  children: ReactNode;
  bgColor?: string;
  height?: string;
  svg?: boolean;
};

export default ({ children, bgColor, height, svg = false }: Props) => {
  return (
    <>
      <Root
        {...{
          bgColor,
          height,
          svg,
        }}
      >
        {children}
      </Root>
    </>
  );
};

const Root = styled.div`
  display: grid;
  height: ${(props: Props) => props?.height || "calc(100vh - 49px)"};
  background-color: ${(props: Props) => props?.bgColor};
  background-image: ${({ svg }: Props) => (svg ? SD.svg.bubbles : "")};
  place-items: center;
  overflow-y: auto;
`;
