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
import getTimeRemaining from "utils/getTimeRemaining";
import isEmpty from "utils/isEmpty";
import formatTime from "utils/formatTime";

let intervals = {
  break: undefined,
  session: undefined,
};

const counter = 1000;

const defaults = {
  timer: {
    break: {
      min: 5,
      seconds: 0,
    },
    session: {
      min: 25,
      seconds: 0,
    },
  },
  pause: false,
  clock: "session",
  timeLeft: null,
  readableTimeLeft: {},
  deadline: undefined,
};

export default () => {
  const [timer, setTimer] = useState(defaults.timer);
  const [pause, setPause] = useState(defaults.pause);
  const [clock, setClock] = useState(defaults.clock);
  const [timeLeft, setTimeLeft] = useState(defaults.timeLeft);
  const [deadline, setDeadline] = useState(defaults.deadline);
  const [readableTimeLeft, setReadableTimeLeft] = useState(
    defaults.readableTimeLeft
  ) as any;

  const clearIntervals = () => {
    ["break", "session"].map((q) => {
      clearInterval(intervals[q]);
      intervals[q] = null;
      delete intervals[q];
    });
  };

  const reset = (all = true) => {
    if (all) {
      setTimer(defaults.timer);
      setClock(defaults.clock);
      const audio = document.getElementById("beep") as HTMLAudioElement;
      audio.currentTime = 0;
      audio?.pause();
    } else {
      setClock(clock === "session" ? "break" : "session");
    }
    setPause(defaults.pause);
    setTimeLeft(defaults.timeLeft);
    setReadableTimeLeft(defaults.readableTimeLeft);
    setDeadline(defaults.deadline);
    clearIntervals();
  };

  const operator = (key: string, add: boolean) => {
    setTimer((time) => {
      if (add ? time[key].min < 60 : time[key].min > 1) {
        return {
          ...time,
          [key]: {
            ...time[key],
            min: add ? time[key].min + 1 : time[key].min - 1,
          },
        };
      }
      return time;
    });
  };

  const getControl = (text: string) => {
    const key = text.toLowerCase();
    return (
      <div className="options-container">
        <OptionsText id={`${key}-label`}>{text} Length</OptionsText>
        <Grid>
          <Operand
            {...tap}
            onClick={() => operator(key, false)}
            id={`${key}-decrement`}
          >
            <FontAwesomeIcon icon={faArrowDown} />
          </Operand>
          <Time>
            <h1>
              <span id={`${key}-length`}>{timer[key].min}</span> min
            </h1>
          </Time>
          <Operand
            {...tap}
            onClick={() => operator(key, true)}
            id={`${key}-increment`}
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </Operand>
        </Grid>
      </div>
    );
  };

  const startCountdown = (e) => {
    const updateClock = () => {
      const t = getTimeRemaining(e);
      if (t.total < 0) {
        const audio = document.getElementById("beep") as HTMLAudioElement;
        audio?.play();
        reset(false);
        setPause(true);
      } else {
        setReadableTimeLeft(t);
      }
    };
    updateClock();
    intervals[clock] = setInterval(updateClock, counter);
  };

  useEffect(() => {
    if (pause) {
      if (!timeLeft && !deadline) {
        const initial = new Date(
          Date.parse(new Date() as any) + timer[clock].min * 60 * counter
        );
        setDeadline(initial);
        startCountdown(initial);
      } else {
        startCountdown(new Date(Date.parse(new Date() as any) + timeLeft));
      }
    } else {
      if (intervals[clock]) {
        clearIntervals();
        const t = getTimeRemaining(deadline);
        setTimeLeft(t.total);
      }
    }

    return () => clearIntervals();
  }, [pause]);

  const getLabel = () => {
    if (clock === "break") {
      return "Break time";
    }

    if (clock === "session" && !isEmpty(readableTimeLeft)) {
      return "Session time";
    }

    return "Pomodoro Clock";
  };

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
          <TimerLabel id="timer-label">{getLabel()}</TimerLabel>
          <Clock>
            <div className="content">
              <Timer id="time-left">
                {!isEmpty(readableTimeLeft)
                  ? `${formatTime(readableTimeLeft?.minutes)}:${formatTime(
                      readableTimeLeft?.seconds
                    )}`
                  : `${formatTime(timer.session.min)}:00`}
              </Timer>
            </div>
          </Clock>

          <Options>
            {getControl("Break")}
            {getControl("Session")}
          </Options>

          <ActionButtons>
            <motion.div
              {...tap}
              id="start_stop"
              onClick={() => setPause((e) => !e)}
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={pause ? faPause : faPlay} />
            </motion.div>
            <motion.div {...tap} id="reset" onClick={() => reset(true)}>
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
