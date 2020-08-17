import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import getRandomColor from "utils/getRandomColor";
import { TwitterOutlined, LoadingOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTumblr } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import staticQuote from "constants/quotes";
import meta from "constants/meta";
import SEO from "components/SEO";

const Root = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  background-color: ${(props) => props.bg};

  #quote-box {
    background-color: white;
    width: 60vh;
    padding: 50px;
    border-radius: 15px;
    box-shadow: 5px 6px lightgray;
    #text {
      h1,
      h2 {
        color: ${(props) => props.bg};
        font-size: 2em;
        text-align: center;
      }
      h1 {
        font-family: "Roboto Mono";
      }
      h2 {
        font-family: "Dancing Script";
      }
    }
    .random-button {
      border-radius: 5px;
      padding: 10px;
      background-color: ${(props) => props.bg};
      color: white;
      height: 40px;
      margin-right: 5px;
      mid-width: 40px;
    }
    .social {
      width: 40px;
      text-align: center;
    }
  }
`;

export default ({ data }) => {
  const [random, setRandom] = useState(data?.author ? data : staticQuote());
  const [loading, setLoading] = useState(false);
  const [randomColor, setRandomColor] = useState(getRandomColor());
  const [rotation, setRotation] = useState(360);

  const generateNewQuote = async () => {
    setLoading(true);
    try {
      const { data } = (await axios.get(`/api/quotes/random`)) as any;
      setRandom(Math.random() > 0.1 ? data.edges : staticQuote());
      setLoading(false);
    } catch (ex) {
      setLoading(false);
    }
    setRandomColor(getRandomColor());
    setRotation((val) => val + 360);
  };

  return (
    <Root bg={randomColor}>
      <SEO
        title="Random Quote Machine"
        withFCCScript
        description={meta.description("Random Quote Machine")}
        imageUrl={`/assets/images/projects/random-quote-machine.png`}
      />
      <motion.div id="quote-box">
        <div id="text">
          <motion.h1
            animate={{ rotate: rotation }}
            transition={{ ease: "easeOut", duration: 0.8 }}
          >
            {loading ? (
              <LoadingOutlined />
            ) : (
              <>
                <FontAwesomeIcon icon={faQuoteLeft} />
                &nbsp;
                {random.quote}
              </>
            )}
          </motion.h1>
          <h2 id="author">{loading ? <></> : `- ${random.author} -`}</h2>
          <br />
          <motion.a
            whileHover={{ scale: 1.1 }}
            style={{ float: "left" }}
            className="random-button social"
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(
              `"${random.quote}" \n ~ ${random.author}`
            )}`}
            target="_blank"
          >
            <TwitterOutlined />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            style={{ float: "left" }}
            className="random-button social"
            target="_blank"
            href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp,devlargs&caption=${random.author}&content=${random.quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
          >
            <FontAwesomeIcon icon={faTumblr} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            onClick={generateNewQuote}
            className="random-button"
            id="new-quote"
            style={{ float: "right" }}
          >
            <span>{loading ? <LoadingOutlined /> : "Get New Quote"}</span>
          </motion.a>
        </div>
      </motion.div>
    </Root>
  );
};
