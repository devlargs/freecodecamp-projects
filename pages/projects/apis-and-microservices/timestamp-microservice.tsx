import { Row, Col } from "antd";
import styled from "styled-components";
import StyledCard from "styles/StyledCard";
import UserStoryList from "components/UserStoryList";
import projectUrls from "constants/projectUrls";
import UserStoryExample from "components/UserStoryExample";
import SD from "constants/styleDefaults";
import ProjectHeader from "components/ProjectHeader";
import useSwr from "swr";
import fetcher from "utils/fetcher";
import JsonPrettier from "components/JsonPrettier";
import LinkResult from "components/LinkResult";

export default () => {
  const { examples: ex } = projectUrls.TIMESTAMP_MICROSERVICE;
  const first = ex[0].url;
  const second = ex[1].url;
  const third = ex[2].url;

  const { data: firstData, error: firstError } = useSwr(first, fetcher);
  const { data: secondData, error: secondError } = useSwr(second, fetcher);
  const { data: thirdData, error: thirdError } = useSwr(third, fetcher);

  return (
    <Root>
      <Child>
        <ProjectHeader title="API Project: Timestamp Microservice" />
        <Row gutter={[10, 10]}>
          <Col {...SD.sizes.column}>
            <StyledCard>
              <UserStoryList
                data={projectUrls.TIMESTAMP_MICROSERVICE.stories}
              />
            </StyledCard>
          </Col>
          <Col {...SD.sizes.column}>
            <StyledCard>
              <h2>Example Usages</h2>
              <LinkResult url={first} data={firstData} error={firstError} />
              <LinkResult url={second} data={secondData} error={secondError} />
              <LinkResult url={third} data={thirdData} error={thirdError} />
            </StyledCard>
          </Col>
        </Row>
      </Child>
    </Root>
  );
};

const Root = styled.div`
  background-color: ${SD.colors.timeStampMicroservice};
  height: calc(100vh - ${SD.sizes.header}px);
  overflow-y: auto;
`;

const Child = styled.div`
  width: 80vw;
  margin: auto;
`;
