import { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import axios from "axios";
import config from "constants/config";
import getFontColor from "utils/getFontColor";
import getRandomColor from "utils/getRandomColor";
import { TwitterOutlined } from "@ant-design/icons";

const Root = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  background-color: ${(props) => props.bg};

  #quote-box {
    background-color: ${(props) => getFontColor(props.bg)};
    width: 60vh;
    padding: 50px;
    border-radius: 15px;
    box-shadow: 5px 6px lightgray;
    #text {
      h1,
      h2 {
        color: ${(props) => props.bg};
        text-align: center;
      }
      h1 {
        font-size: 25px;
      }
    }
    .random-button {
      border-radius: 5px;
      padding: 10px;
      background-color: ${(props) => props.bg};
      color: ${(props) => getFontColor(props.bg)};
      height: 40px;
      margin-right: 5px;
    }
  }
`;

export default ({ data }) => {
  const [
    random = {
      quote: "The way to get started is to quit talking and begin doing",
      author: "Walt Disney",
    },
    setRandom,
  ] = useState(data);
  const [loading, setLoading] = useState(false);
  const [randomColor, setRandomColor] = useState(getRandomColor());

  const generateNewQuote = async () => {
    setLoading(true);
    try {
      const { data } = (await axios.get(
        `${config.API_URL}/quotes/random`
      )) as any;
      setRandom(data.data);
      setLoading(false);
    } catch (ex) {
      setLoading(false);
    }
    setRandomColor(getRandomColor());
  };

  return (
    <Root bg={randomColor}>
      <Head>
        <title>Random Quote Machine</title>
        <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
      </Head>
      <div id="quote-box">
        <div id="text">
          <h1>{random.quote}</h1>
          <h2 id="author">- {random.author} -</h2>
          <br />
          <a
            style={{ float: "left" }}
            className="random-button"
            href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(
              `"${random.quote}" \n ~ ${random.author}`
            )}`}
            target="_blank"
          >
            <TwitterOutlined />
          </a>
          <a style={{ float: "left" }} className="random-button">
            t
          </a>
          <a
            onClick={generateNewQuote}
            className="random-button"
            id="new-quote"
            style={{ float: "right" }}
          >
            <span style={{ opacity: loading ? 0.3 : 1 }}>
              {loading ? "loading..." : "Get New Quote"}
            </span>
          </a>
        </div>
      </div>
    </Root>
  );
};

export async function getStaticProps(context) {
  try {
    const res = (await axios.get(`${config.API_URL}/quotes/random`)) as any;

    return {
      props: {
        data: res?.data?.data || {},
      },
    };
  } catch (ex) {
    return {
      props: {
        data: {},
      },
    };
  }
}
