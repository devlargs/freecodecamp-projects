import styled from "styled-components";
import meta from "constants/meta";
import SEO from "components/SEO";
import { motion } from "framer-motion";
import { tap } from "constants/animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faPlay,
  faPause,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import CenteredContent from "components/CenteredContent";

export default () => {
  return (
    <>
      <SEO
        title="Pomodoro Clock"
        withFCCScript
        description={meta.description("Pomodoro Clock")}
        imageUrl={`/assets/images/projects/pomodoro-clock.png`}
      />
      <audio id="beep" src={`/assets/sounds/Rooster.mp3`}></audio>
      <CenteredContent bgColor="#28587b">
        <div>
          <TimerLabel id="timer-label">Pomodoro Clock</TimerLabel>
          <Clock>
            <div className="content">
              <Timer id="time-left">25:00</Timer>
            </div>
          </Clock>

          <Options>
            <div className="options-container">
              <OptionsText id="break-label">Break Length</OptionsText>
              <Grid>
                <Operand {...tap} onClick={() => {}} id="break-decrement">
                  <FontAwesomeIcon icon={faArrowDown} />
                </Operand>
                <Time>
                  <h1>
                    <span id="break-length">5</span> min
                  </h1>
                </Time>
                <Operand {...tap} onClick={() => {}} id="break-increment">
                  <FontAwesomeIcon icon={faArrowUp} />
                </Operand>
              </Grid>
            </div>
            <div className="options-container">
              <OptionsText id="session-label">Session Length</OptionsText>
              <Grid>
                <Operand {...tap} onClick={() => {}} id="session-decrement">
                  <FontAwesomeIcon icon={faArrowDown} />
                </Operand>
                <Time>
                  <h1>
                    <span id="session-length">5</span> min
                  </h1>
                </Time>
                <Operand {...tap} onClick={() => {}} id="session-increment">
                  <FontAwesomeIcon icon={faArrowUp} />
                </Operand>
              </Grid>
            </div>
          </Options>

          <ActionButtons>
            <motion.div
              {...tap}
              id="start_stop"
              onClick={() => {}}
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faPlay} />
            </motion.div>
            <motion.div {...tap} id="reset" onClick={() => {}}>
              <FontAwesomeIcon icon={faRedo} />
            </motion.div>
          </ActionButtons>
        </div>
      </CenteredContent>
    </>
  );
};

const TimerLabel = styled.div`
  padding: 1em;
  text-align: center;
  font-size: 24px;
  color: white;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  gap: 10px;
  color: white;
  text-align: center;
  #start_stop,
  #reset {
    width: 70px;
    padding: 1em;
    background-color: #7f7caf;
    border-radius: 1em;
  }
`;

const Clock = styled.div`
  display: flex;
  text-align: center;
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-color: #7f7caf;
    padding: 1em;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 5px solid #9fb798;
  }
`;

const Timer = styled.h1`
  font-size: 4em;
  color: #eeeeff;
  margin-bottom: 0;
`;

const Options = styled.div`
  margin-top: 2em;
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  color: white;
  .options-container {
    border-radius: 2em;
    padding: 1em;
    grid-gap: 1em;
    background-color: #9eb3c7;
    width: 300px;
    display: grid;
    place-items: center;
  }
`;

const OptionsText = styled.div`
  font-size: 24px;
  color: black;
`;

const Grid = styled.div`
  display: grid;
  width: 90%;
  grid-template-columns: 1fr 2fr 1fr;
`;

const Operand = styled(motion.div)`
  background-color: #7f7caf;
  padding: 1em;
  border-radius: 15px;
  font-weight: bold;
  border: 2px solid #9eb3c7;
  cursor: pointer;
`;

const Time = styled.div`
  align-self: center;
  h1 {
    color: black;
    margin-bottom: 0;
  }
  h1::selection {
    color: black;
    background: none;
  }
  h1::-moz-selection {
    color: black;
    background: none;
  }
`;
