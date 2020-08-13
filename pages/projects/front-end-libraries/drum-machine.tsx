import styled from "styled-components";
import { motion } from "framer-motion";

export default () => {
  return (
    <Root className="h-calculated">
      <div className="d-grid">
        <div className="d-grid-container">
          <h1>Drum Machine</h1>

          <div className="grid-content">
            {"QWEASDZXC".split("").map((q: string) => (
              <motion.div
                whileTap={{
                  rotate: Math.floor(Math.random() * 90),
                  scale: 1.1,
                }}
              >
                {q}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Root>
  );
};

const Root = styled.div`
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;

  /*
     Introduced in IE 10.
     See http://ie.microsoft.com/testdrive/HTML5/msUserSelect/
   */
  -ms-user-select: none;
  user-select: none;
  background-color: #ececec;
  .d-grid {
    display: grid;
    height: 100%;
    place-items: center;
    h1 {
      text-align: center;
    }
    .d-grid-container {
      background-color: #e17b20;
      border: 10px solid white;

      h1 {
        color: white;
        font-weight: bold;
        padding: 10px;
      }
      padding: 20px;
      .grid-content {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(3, 1fr);
        place-items: center;
        div {
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
  }
`;
