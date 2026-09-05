import { useState } from "react";
import styled from "styled-components";
import Img from "react-cool-img";

type Props = {
  src: string;
  alt: string;
  ratio?: number;
};

export default ({ src, alt, ratio = 72.5 }: Props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Frame ratio={ratio} className={loaded ? "is-loaded" : ""}>
      <span className="shimmer" />
      <Img src={src} alt={alt} onLoad={() => setLoaded(true)} />
    </Frame>
  );
};

const Frame = styled.div`
  position: relative;
  width: 100%;
  padding-top: ${(props: { ratio: number }) => props.ratio}%;
  overflow: hidden;
  background-color: #eef2f7;

  .shimmer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
      90deg,
      #e6ecf4 0%,
      #f7fafd 50%,
      #e6ecf4 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1.4s ease-in-out infinite;
    transition: opacity 0.4s ease;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &.is-loaded {
    .shimmer {
      opacity: 0;
      animation: none;
    }
    img {
      opacity: 1;
    }
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;
