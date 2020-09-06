import { Row, Col } from "antd";
import styled from "styled-components";
import StyledCard from "styles/StyledCard";
import UserStoryList from "components/UserStoryList";
import projectUrls from "constants/projectUrls";
import UserStoryExample from "components/UserStoryExample";
import SD from "constants/styleDefaults";

export default () => {
  const style = { background: "white", padding: "8px 10px" };

  return (
    <Root>
      <Child>
        <h1 style={{ color: "white", fontSize: "2em" }}>
          API Project: Timestamp Microservice
        </h1>
        <Row gutter={[10, 10]}>
          <Col {...SD.sizes.column}>
            <StyledCard>
              <UserStoryList
                data={projectUrls.TIMESTAMP_MICROSERVICE.stories}
              />
            </StyledCard>
            <StyledCard>
              <UserStoryExample
                data={projectUrls.TIMESTAMP_MICROSERVICE.examples}
              />
            </StyledCard>
          </Col>
          <Col {...SD.sizes.column}>
            <div style={style}>ADD FORM HERE</div>
          </Col>
        </Row>
      </Child>
    </Root>
  );
};

const Root = styled.div`
  background-color: ${SD.colors.timeStampMicroservice};
  height: calc(100vh - ${SD.sizes.header}px);
  overflow-y: scroll;
`;

const Child = styled.div`
  width: 80vw;
  margin: auto;
`;
