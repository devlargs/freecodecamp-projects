import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import styled from "styled-components";
import { Card } from "antd";
import Head from "next/head";
import markdownExample from "constants/markdown";

export default () => {
  const [source, setSource] = useState(markdownExample);

  return (
    <Root>
      <Head>
        <title>Markdown Previewer</title>
        <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
      </Head>
      <StyledHeading>Markdown Previewer</StyledHeading>
      <Content>
        <div id="editor-div">
          <div id="textarea">
            <StyledCard title="Editor" bordered={false}>
              <textarea
                id="editor"
                value={source}
                onChange={(e) => {
                  setSource(e.target.value);
                }}
              />
            </StyledCard>
          </div>
        </div>
        <div id="preview-div">
          <StyledCard title="Markdown Preview" bordered={false}>
            <div id="preview">
              <Markdown source={source} escapeHtml={false} />
            </div>
          </StyledCard>
        </div>
      </Content>
    </Root>
  );
};

const StyledCard = styled(Card)`
  .ant-card-head {
    background-color: #041429;
    color: white;
  }
`;

const StyledHeading = styled.div`
  text-align: center;
  // border: 1px solid black;
  font-size: 2rem;
  color: white;
  padding-top: 1rem;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  #editor-div,
  #preview-div {
    flex: 1;
    padding: 20px;
  }
  .ant-card-body {
    min-height: 455px;
    max-height: 600px;
    overflow-y: auto;
  }
  textarea {
    width: 100%;
    height: 40vh;
    border: 1px solid lightgray;
    padding: 20px;
  }
  #preview {
    pre {
      background-color: #282828;
      padding: 10px;
      code {
        color: white;
      }
    }
    table {
      padding: 5px;
      thead,
      tbody {
        border: 1px solid black;
      }
    }
  }
`;

const Root = styled.div`
  background-color: #2993a5;
  height: 100%;
`;
