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
import meta from "constants/meta";

export default () => {
  const url = projectUrls.REQUEST_HEADER_PARSER.examples[0].url;
  const { data, error } = useSWR(url, fetcher);

  return (
    <Root>
      <Child>
        <SEO
          title="Request Header Parser"
          description={meta.description("Request Header Parser")}
          imageUrl={`/assets/images/projects/request-header-parser.png`}
        />
        <ProjectHeader title="API Project: Request Header Parser" />
        <Row gutter={[10, 10]}>
          <Col {...SD.sizes.column}>
            <StyledCard>
              <UserStoryList data={projectUrls.REQUEST_HEADER_PARSER.stories} />
            </StyledCard>
          </Col>
          <Col {...SD.sizes.column}>
            <StyledCard>
              <h2>Example Usage</h2>
              <LinkResult {...{ url, data, error }} />
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
  background-color: ${SD.colors.requestHeaderParser};
`;
