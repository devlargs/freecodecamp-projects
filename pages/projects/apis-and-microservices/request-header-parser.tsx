import { List, Row, Col } from "antd";
import styled from "styled-components";
import UserStoriesContainer from "styles/UserStoriesContainer";

export default () => {
  const data = [
    "Your IP address should be returned in the ipaddress key.",
    `Your preferred language should be returned in the language key.`,
    "Your software should be returned in the software key.",
  ];

  const style = { background: "white", padding: "8px 10px" };
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
                <a href="/api/whoami" target="_blank">
                  /api/whoami
                </a>
              </Anchor>
            </ListContainer>
          </Col>
          <Col className="gutter-row" {...size}>
            <div style={style}>ADD FORM HERE</div>
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
