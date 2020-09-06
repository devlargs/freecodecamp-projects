import { List, Row, Col, Button, Spin } from "antd";
import styled from "styled-components";
import UserStoriesContainer from "styles/UserStoriesContainer";
import SD from "constants/styleDefaults";
import { useState } from "react";
import axios from "axios";
import JSONPrettier from "components/JsonPrettier";

export default () => {
  const [result, setResult] = useState() as any;
  const [url, setUrl] = useState();
  const [loading, setLoading] = useState(false);
  const data = [
    `I can POST a URL to [project_url]/api/shorturl/new and I will receive a shortened URL in the JSON response.
    Example : {"original_url":"www.google.com","short_url":1}`,
    `If I pass an invalid URL that doesn't follow the http(s)://www.example.com(/more/routes) format, the JSON response will contain an error like {"error":"invalid URL"}. <br /> HINT: to be sure that the submitted url points to a valid site you can use the function dns.lookup(host, cb) from the dns core module.`,
    "When I visit the shortened URL, it will redirect me to my original link.",
  ];

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
      <Child>
        <h1 style={{ color: "whitesmoke" }}>API Project: URL Shortener</h1>
        <Row gutter={[10, 10]}>
          <Col className="gutter-row" {...SD.sizes.column}>
            <UserStoriesContainer>
              <h2>User Stories:</h2>
              <List
                bordered
                dataSource={data}
                renderItem={(item) => (
                  <List.Item>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item,
                      }}
                    />
                  </List.Item>
                )}
              />
            </UserStoriesContainer>
            <br />
            <ListContainer>
              <h2>Example Usage</h2>
              <Anchor>
                <a href="/api/shorturl/new" target="_blank">
                  POST [project_url]/api/shorturl/new
                </a>
              </Anchor>
            </ListContainer>
          </Col>
          <Col className="gutter-row" {...SD.sizes.column}>
            <UserStoriesContainer>
              <h2>URL to be shortened</h2>

              <form method="post" action="/api/shorturl/new">
                <StyledInput
                  placeholder="Enter Url Here"
                  value={url}
                  onChange={(e: any) => setUrl(e.target.value)}
                />
                <Button type="primary" block onClick={submit}>
                  Shorten
                </Button>
              </form>
            </UserStoriesContainer>
            <br />
            {result && (
              <UserStoriesContainer>
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
              </UserStoriesContainer>
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
  height: calc(100vh - 49px);
`;

const Child = styled.div`
  width: 80vw;
  margin: auto;
`;

const ListContainer = styled.div`
  background-color: white;
  padding: 20px;
  margin: auto;
  h2 {
    text-align: center;
  }
`;

const Anchor = styled.div`
  text-align: center;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 8pt;
  border: 1px solid lightgray;
`;
