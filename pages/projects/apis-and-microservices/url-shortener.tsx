import { Row, Col, Button, Spin } from "antd";
import styled from "styled-components";
import StyledCard from "styles/StyledCard";
import SD from "constants/styleDefaults";
import { useState } from "react";
import axios from "axios";
import JSONPrettier from "components/JsonPrettier";
import UserStoryList from "components/UserStoryList";
import UserStoryExample from "components/UserStoryExample";
import projectUrls from "constants/projectUrls";
import SEO from "components/SEO";
import meta from "constants/meta";

export default () => {
  const [result, setResult] = useState() as any;
  const [url, setUrl] = useState();
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    const { data } = await axios.post(
      `/api/shorturl/${encodeURIComponent(url)}`
    );
    setResult(data);
    setLoading(false);
  };

  return (
    <Root>
      <SEO
        title="URL Shortener"
        description={meta.description("URL Shortener")}
        imageUrl={`/assets/images/projects/url-shortener.png`}
      />
      <Child>
        <h1 style={{ color: "whitesmoke" }}>API Project: URL Shortener</h1>
        <Row gutter={[10, 10]}>
          <Col {...SD.sizes.column}>
            <StyledCard>
              <UserStoryList data={projectUrls.URL_SHORTENER.stories} />
            </StyledCard>
            <StyledCard>
              <UserStoryExample data={projectUrls.URL_SHORTENER.examples} />
            </StyledCard>
          </Col>
          <Col {...SD.sizes.column}>
            <StyledCard>
              <h2>URL to be shortened</h2>

              <StyledInput
                placeholder="Enter Url Here"
                value={url}
                onChange={(e: any) => setUrl(e.target.value)}
              />
              <Button type="primary" block onClick={submit}>
                Shorten
              </Button>
            </StyledCard>
            <br />
            {result && (
              <StyledCard>
                <h2>Result</h2>

                <Spin spinning={loading}>
                  <JSONPrettier data={result} />
                  {result?.short_url && (
                    <a href={result.short_url} target="_blank">
                      <Button type="primary" block>
                        Redirect to short url
                      </Button>
                    </a>
                  )}
                </Spin>
              </StyledCard>
            )}
          </Col>
        </Row>
      </Child>
    </Root>
  );
};

const Root = styled.div`
  h1 {
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  height: calc(100vh - ${SD.sizes.header}px);
  background-color: ${SD.colors.urlShortener};
`;

const Child = styled.div`
  width: 80vw;
  margin: auto;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 8pt;
  border: 1px solid lightgray;
`;
