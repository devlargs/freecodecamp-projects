import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import meta from "constants/meta";
import SEO from "components/SEO";
import CenteredContent from "components/CenteredContent";

export default () => {
  const [currentKey, setCurrentKey] = useState("Drum Machine");
  const file = {
    Q: "Heater-1",
    W: "Heater-2",
    E: "Heater-3",
    A: "Break-Snare",
    S: "Disc",
    D: "Dry",
    Z: "Kick",
    X: "Punchy-Kick",
    C: "Side-Stick",
  };

  const playKey = (e, keypress = true) => {
    const key = (keypress ? e.code : e).split("Key")[1];
    setCurrentKey(file[key]);
    var audio = document.getElementById(key) as HTMLAudioElement;
    audio?.play();
  };

  useEffect(() => {
    window.addEventListener("keydown", playKey);
    return () => {
      window.removeEventListener("keydown", playKey);
    };
  }, []);

  return (
    <CenteredContent bgColor="#ececec">
      <SEO title="Drum Machine" withFCCScript />
      <Root id="drum-machine">
        <div className="d-grid-container">
          <h1 id="display">{currentKey?.replace("-", " ")}</h1>
          <div className="grid-content">
            {"QWEASDZXC".split("").map((q: string) => (
              <motion.div
                className="drum-pad"
                key={q}
                id={`drum-pad-${q}`}
                onClick={() => playKey(`Key${q}`, false)}
                whileTap={{
                  rotate:
                    Math.floor(Math.random() * 20) *
                    (Math.random() > 0.5 ? -1 : 1),
                  scale: 1.1,
                }}
              >
                <span>{q}</span>
                <audio
                  className="clip"
                  src={`/assets/sounds/${file[q]}.mp3`}
                  id={q}
                ></audio>
              </motion.div>
            ))}
          </div>
        </div>
      </Root>
    </CenteredContent>
  );
};

const Root = styled.div`
  h1 {
    text-align: center;
    font-size: 2rem;
  }
  .d-grid-container {
    background-color: #e17b20;
    border: 10px solid white;
    h1 {
      color: white;
      font-weight: bold;
      padding: 10px;
    }
    padding: 15px;
    .grid-content {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: repeat(3, 1fr);
      place-items: center;
      div {
        text-align: center;
        width: 100px;
        height: 100px;
        border: 3px solid white;
        padding: 10px;
        background-color: #53616f;
        font-weight: bold;
        color: white;
        border-radius: 10px;
        font-size: 1.5rem;
      }
    }
    div {
      display: grid;
      place-items: center;
    }
  }
`;
