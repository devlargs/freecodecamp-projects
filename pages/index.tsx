import Particles from "components/Particles";
import styled from "styled-components";
import CenteredContent from "components/CenteredContent";
import links from "constants/links";
import SD from "constants/styleDefaults";
import SEO from "components/SEO";

export default function App() {
  return (
    <Homepage>
      <SEO
        title="Free Code Camp Projects"
        description="A collection of freeCodeCamp.org projects created by Ralph A. Largo (@devlargs)"
        imageUrl="/assets/images/home.png"
      />
      <Particles />
      <CenteredContent>
        <Root>
          <div id="container">
            <img src="/assets/images/freecodecamp.png" />
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
  position: relative;
  background-color: ${SD.colors.main};
`;

const Root = styled.div`
  text-align: center;
  line-height: 5rem;
  #container {
    img {
      width: 200px;
      height: 200px;
      margin-bottom: 20px;
    }
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

  @media screen and (max-width: 400px) {
    line-height: 3rem;
    #container {
      img {
        width: 130px;
        height: 130px;
        margin-bottom: 10px;
      }
      h1 {
        font-size: 2rem;
        span {
          font-size: 1.5rem;
        }
      }
    }
  }

  @media screen and (min-width: 401px) and (max-width: 768px) {
    line-height: 4rem;
    #container {
      img {
        width: 150px;
        height: 150px;
        margin-bottom: 10px;
      }
      h1 {
        font-size: 2.5rem;
        span {
          font-size: 1.5rem;
        }
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1400px) {
    line-height: 4.5rem;
    #container {
      img {
        width: 180px;
        height: 180px;
        margin-bottom: 15px;
      }
      h1 {
        font-size: 3.5rem;
        span {
          font-size: 1.5rem;
        }
      }
    }
  }
`;
