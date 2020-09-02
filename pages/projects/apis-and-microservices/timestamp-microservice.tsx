import { List } from "antd";
import styled from "styled-components";

export default () => {
  const data = [
    "The API endpoint is GET [project_url]/api/timestamp/:date_string?",
    `A date string is valid if can be successfully parsed by new Date(date_string).
    Note that the unix timestamp needs to be an integer (not a string) specifying milliseconds.
    In our test we will use date strings compliant with ISO-8601 (e.g. "2016-11-20") because this will ensure an UTC timestamp.`,
    "If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.",
    `If the date string is valid the api returns a JSON having the structure
    {"unix": <date.getTime()>, "utc" : <date.toUTCString()> }
    e.g. {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}`,
    `If the date string is invalid the api returns a JSON having the structure
    {"error" : "Invalid Date" }.`,
  ];
  return (
    <Root>
      <h1>API Project: Timestamp Microservice</h1>
      <ListContainer>
        <h2>User Stories:</h2>
        <List
          bordered
          dataSource={data}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </ListContainer>
      <br />
      <ListContainer>
        <h2>Example Usage</h2>
        <Anchor>
          <a href="/api/timestamp/2020-10-28">/api/timestamp/2020-10-28</a>
        </Anchor>
        <Anchor>
          <a href="/api/timestamp/1603843200000">
            /api/timestamp/1603843200000
          </a>
        </Anchor>
      </ListContainer>
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
  background-color: #ecebf3;
`;

const ListContainer = styled.div`
  background-color: white;
  padding: 20px;
  margin: auto;
  width: 60vw;
  h2 {
    text-align: center;
  }
`;

const Anchor = styled.div`
  text-align: center;
`;
