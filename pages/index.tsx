import Head from "next/head";
import Particles from "react-particles-js";
import styled from "styled-components";

export default function App() {
  return (
    <>
      <Head>
        <title>Free Code Camp Projects</title>
      </Head>
      <Root className="h-calculated">
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
                value: 10,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
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
        <div id="container">
          <img
            src="https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_small.svg"
            width={100}
            height={100}
          />
          <h1>
            Free Code Camp Projects
            <br />
            <span>
              Created by{" "}
              <a href="https://github.com/devlargs" target="_blank">
                Ralph Largo
              </a>
            </span>
          </h1>
        </div>
      </Root>
    </>
  );
}

const Root = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background-color: #c3a9ff;
  text-align: center;
  line-height: 5rem;
  #container {
    h1 {
      color: #041529;
      font-size: 5rem;
      span {
        font-size: 2rem;
        a {
          color: #349dd0;
          z-index: 999;
        }
      }
    }
  }
  #tsparticles {
    height: calc(100vh - 64px - 70px);
    position: absolute;
    width: 100vw;
    z-index: 1;
  }
`;
