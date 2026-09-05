import { useState } from "react";
import { Alert, Button, Input, Select } from "antd";
import axios from "axios";
import styled from "styled-components";
import SEO from "components/SEO";
import SD from "constants/styleDefaults";
import {
  AMERICAN_TO_BRITISH,
  BRITISH_TO_AMERICAN,
} from "constants/translatorLocales";

const { Option } = Select;
const { TextArea } = Input;

const OPEN = `<span class="highlight">`;
const CLOSE = `</span>`;

const toSafeHtml = (value: string) =>
  value
    .split("&")
    .join("&amp;")
    .split("<")
    .join("&lt;")
    .split(">")
    .join("&gt;")
    .split(`&lt;span class="highlight"&gt;`)
    .join(OPEN)
    .split("&lt;/span&gt;")
    .join(CLOSE);

export default () => {
  const [text, setText] = useState("Mangoes are my favorite fruit.");
  const [locale, setLocale] = useState(AMERICAN_TO_BRITISH);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const translate = async () => {
    setLoading(true);
    const { data } = await axios.post("/api/translate", { text, locale });
    setResult(data);
    setLoading(false);
  };

  return (
    <Root>
      <SEO title="American British Translator" />
      <h1 style={{ textAlign: "center", margin: 0, paddingTop: 10 }}>
        American British Translator
      </h1>
      <Content>
        <InputStyle>
          <h3>Text to translate</h3>
          <TextArea
            rows={6}
            value={text}
            placeholder="Enter text to translate"
            onChange={(e) => {
              setText(e.target.value);
              setResult(null);
            }}
          />
          <Select
            value={locale}
            style={{ width: "100%", marginTop: 10 }}
            onChange={(e: string) => {
              setLocale(e);
              setResult(null);
            }}
          >
            <Option value={AMERICAN_TO_BRITISH}>American to British</Option>
            <Option value={BRITISH_TO_AMERICAN}>British to American</Option>
          </Select>
          <Buttons>
            <Button type="primary" loading={loading} onClick={translate}>
              Translate
            </Button>
            <Button
              onClick={() => {
                setText("");
                setResult(null);
              }}
            >
              Clear
            </Button>
          </Buttons>
        </InputStyle>
        <OutputStyle>
          <h3>Translated text</h3>
          {result?.error && (
            <Alert message={result.error} type="error" showIcon />
          )}
          {result?.translation && (
            <Translation
              dangerouslySetInnerHTML={{
                __html: toSafeHtml(result.translation),
              }}
            />
          )}
        </OutputStyle>
      </Content>
    </Root>
  );
};

const Root = styled.div`
  background-color: ${SD.colors.personalLibrary};
  height: calc(100vh - ${SD.sizes.header}px);
  overflow-y: auto;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const InputStyle = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 1em;
  margin: 10px;
  background-color: ${SD.colors.personalLibraryGrids};

  h3 {
    color: black;
    font-weight: 400;
  }
`;

const OutputStyle = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 1em;
  margin: 10px;
  background-color: white;

  h3 {
    color: black;
    font-weight: 400;
  }
`;

const Translation = styled.div`
  font-size: 1.1em;
  word-break: break-word;

  .highlight {
    background-color: #b7eb8f;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;
