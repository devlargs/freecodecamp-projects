import { Row, Col } from "antd";
import styled from "styled-components";
import StyledCard from "styles/StyledCard";
import UserStoryList from "components/UserStoryList";
import SD from "constants/styleDefaults";
import projectUrls from "constants/projectUrls";
import UserStoryExample from "components/UserStoryExample";
import ProjectHeader from "components/ProjectHeader";

export default () => {
  const style = { background: "white", padding: "8px 10px" };

  return (
    <Child>
      <ProjectHeader title="API Project: Request Header Parser" dark />
      <Row gutter={[10, 10]}>
        <Col {...SD.sizes.column}>
          <StyledCard>
            <UserStoryList data={projectUrls.REQUEST_HEADER_PARSER.stories} />
          </StyledCard>
          <br />
          <StyledCard>
            <UserStoryExample
              data={projectUrls.REQUEST_HEADER_PARSER.examples}
            />
          </StyledCard>
        </Col>
        <Col {...SD.sizes.column}>
          <div style={style}>ADD FORM HERE</div>
        </Col>
      </Row>
    </Child>
  );
};

const Child = styled.div`
  width: 80vw;
  margin: auto;
`;
