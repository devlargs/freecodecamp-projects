import Particles from "react-particles-js";
import styled from "styled-components";

export default () => (
  <Root>
    <Particles
      params={{
        particles: {
          number: {
            value: 460,
            density: {
              enable: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 1,
              size_min: 0.3,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 1,
            direction: "bottom",
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "bubble",
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0,
            },
            repulse: {
              distance: 50,
              duration: 2,
            },
          },
        },
      }}
    />
  </Root>
);

const Root = styled.div`
  #tsparticles {
    position: absolute;
    z-index: 1;
    height: calc(100vh - 49px);
    width: 100%;
  }
`;
