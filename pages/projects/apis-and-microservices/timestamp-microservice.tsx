import { List, Row, Col } from "antd";
import styled from "styled-components";
import UserStoriesContainer from "styles/UserStoriesContainer";

export default () => {
  const data = [
    "The API endpoint is GET [project_url]/api/timestamp/:date_string?",
    `A date string is valid if can be successfully parsed by new Date(date_string).
    Note that the unix timestamp needs to be an integer (not a string) specifying milliseconds.
    In our test we will use date strings compliant with ISO-8601 (e.g. <b>2016-11-20</b>) because this will ensure an UTC timestamp.`,
    "If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.",
    `If the date string is valid the api returns a JSON having the structure
    {"unix": <b>date.getTime()</b>, "utc" : <b>date.toUTCString()</b> }<br />
    e.g.<br /> 
    <div class="code">
    <code>
    <pre>
    
{
  "unix": 1479663089000,
  "utc": "Sun, 20 Nov 2016 17:31:29 GMT"
}
    </pre>
    </code>
    </div>`,
    `If the date string is invalid the api returns a JSON having the structure
    {"error" : "Invalid Date" }.`,
  ];

  const style = { background: "#0092ff", padding: "8px 0" };
  const size = {
    xs: 24,
    sm: 24,
    lg: 12,
    xl: 12,
    xxl: 12,
  };
  return (
    <Root>
      <Child>
        <h1>API Project: Timestamp Microservice</h1>

        <Row gutter={[10, 10]}>
          <Col className="gutter-row" {...size}>
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
                <a href="/api/timestamp/2020-10-28" target="_blank">
                  /api/timestamp/2020-10-28
                </a>
              </Anchor>
              <Anchor>
                <a href="/api/timestamp/1603843200000" target="_blank">
                  /api/timestamp/1603843200000
                </a>
              </Anchor>
              <Anchor>
                <a href="/api/timestamp" target="_blank">
                  /api/timestamp
                </a>
              </Anchor>
            </ListContainer>
          </Col>
          <Col className="gutter-row" {...size}>
            <div style={style}>col-6</div>
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
