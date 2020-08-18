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
import links from "constants/links";
import CenteredContent from "components/CenteredContent";

const Root = styled.div`
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
        font-family: "Roboto Mono", Arial;
      }
      h2 {
        font-family: "Dancing Script", Arial;
      }
      margin-bottom: 10px;
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
    <CenteredContent bgColor={randomColor}>
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
              href={links.SHARE_TWEET_URL(random)}
              target="_blank"
            >
              <TwitterOutlined />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              style={{ float: "left" }}
              className="random-button social"
              target="_blank"
              href={links.SHARE_TUBLER_URL(random)}
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
    </CenteredContent>
  );
};
