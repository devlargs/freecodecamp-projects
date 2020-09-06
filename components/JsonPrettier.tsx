import JSONPretty from "react-json-pretty";
import MonokaiTheme from "react-json-pretty/dist/monikai";
import styled from "styled-components";

const JsonPrettier = ({ data }) => {
  return <StyledJson data={data} theme={MonokaiTheme} id="prettier" />;
};

const StyledJson = styled(JSONPretty)`
  pre {
    padding: 1em;
  }
`;

export default JsonPrettier;
