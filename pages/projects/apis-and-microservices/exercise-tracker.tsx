import { Row, Col } from "antd";
import styled from "styled-components";
import StyledCard from "styles/StyledCard";
import UserStoryList from "components/UserStoryList";
import SD from "constants/styleDefaults";
import projectUrls from "constants/projectUrls";
import LinkResult from "components/LinkResult";
import ProjectHeader from "components/ProjectHeader";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import SEO from "components/SEO";

export default () => {
  // const url = projectUrls.EXERCISE_TRACKER.examples[0].url;
  // const { data, error } = useSWR(url, fetcher);

  return (
    <Root>
      <Child>
        <SEO title="Exercise Tracker" />
        <ProjectHeader title="API Project: Exercise Tracker" />
        <Row gutter={[10, 10]}>
          <Col {...SD.sizes.column}>
            <StyledCard>
              <UserStoryList data={projectUrls.EXERCISE_TRACKER.stories} />
            </StyledCard>
          </Col>
          <Col {...SD.sizes.column}>
            <StyledCard>
              {/* <h2>Example Usage</h2>
              <LinkResult {...{ url, data, error }} /> */}
            </StyledCard>
          </Col>
        </Row>
      </Child>
    </Root>
  );
};

const Child = styled.div`
  width: 80vw;
  margin: auto;
`;

const Root = styled.div`
  height: calc(100vh - ${SD.sizes.header}px);
  overflow-y: auto;
  background-color: ${SD.colors.exerciseTracker};
`;
