import { Alert } from "antd";

export default () => (
  <Alert
    message=""
    description={
      <>
        User Stories are from{" "}
        <a href="https://freecodecamp.org" target="_blank">
          freeCodeCamp.org
        </a>
      </>
    }
    type="info"
    showIcon
  />
);
