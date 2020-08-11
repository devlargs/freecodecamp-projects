import { useState } from "react";
import Markdown from "react-markdown";
import styled from "styled-components";
import { Card } from "antd";

export default () => {
  const [source, setSource] = useState(`# Input anything on the text area`);
  return (
    <>
      <h1>Markdown previewer</h1>
      <Root>
        <div id="editor" className="h-calculated">
          <div id="textarea">
            <Card title="Editor" bordered={false}>
              <textarea
                value={source}
                onChange={(e) => {
                  setSource(e.target.value);
                }}
              />
            </Card>
            {/* <h1>Editor</h1>
             */}
          </div>
        </div>
        <div id="previewer" className="h-calculated">
          <Card title="Markdown previewer" bordered={false}>
            <Markdown source={source} escapeHtml={false} />
          </Card>
        </div>
      </Root>
    </>
  );
};

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  #editor,
  #previewer {
    flex: 1;
    padding: 20px;
  }
  textarea {
    width: 100%;
    height: 40vh;
    border: 1px solid lightgray;
    padding: 20px;
    border-radius: 20px;
  }
`;
