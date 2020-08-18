import Head from "next/head";
import Particles from "react-particles-js";
import styled from "styled-components";
import CenteredContent from "components/CenteredContent";
import links from "constants/links";

export default function App() {
  return (
    <Homepage style={{ position: "relative" }}>
      <Head>
        <title>Free Code Camp Projects</title>
      </Head>
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
      <CenteredContent>
        <Root>
          <div id="container">
            <img
              style={{ marginBottom: 20 }}
              src="/assets/images/freecodecamp.png"
              width={200}
              height={200}
            />
            <h1>
              Free Code Camp Projects
              <br />
              <span>
                Created by{" "}
                <a href={links.GITHUB_PROFILE} target="_blank">
                  Ralph Largo
                </a>
              </span>
            </h1>
          </div>
        </Root>
      </CenteredContent>
    </Homepage>
  );
}

const Homepage = styled.div`
  overflow: hidden;
  #tsparticles {
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
  }
`;

const Root = styled.div`
  text-align: center;
  line-height: 5rem;
  #container {
    h1 {
      color: white;
      font-size: 5rem;
      font-weight: bold;
      margin-top: -30px;
      span {
        font-size: 2rem;
        a {
          color: black;
          z-index: 999;
        }
      }
    }
  }
`;
