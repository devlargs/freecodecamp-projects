import { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import axios from "axios";
import config from "constants/config";
import getFontColor from "utils/getFontColor";
import getRandomColor from "utils/getRandomColor";

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
    #text {
      h1,
      h2 {
        color: ${(props) => props.bg};
        text-align: center;
      }
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

  return (
    <Root bg={getRandomColor()}>
      <Head>
        <title>Random Quote Machine</title>
        <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
      </Head>
      <div id="quote-box">
        <div id="text">
          <h1>{random.quote}</h1>
          <h2 id="author">{random.author}</h2>
          <br />
          <a
            href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(
              `"${random.quote}" \n ~ ${random.author}`
            )}`}
            target="_blank"
          >
            twitter
          </a>
          <a>New Quote</a>
          <button id="new-quote" style={{ float: "right" }}>
            New Quote
          </button>
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
