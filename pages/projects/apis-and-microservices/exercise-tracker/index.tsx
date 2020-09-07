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
import { Tabs } from "antd";
import {
  faUsers,
  faUserPlus,
  faHeartbeat,
  faCalendarPlus,
} from "@fortawesome/free-solid-svg-icons";
import TabHeader from "components/TabHeader";

const { TabPane } = Tabs;

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
              <h2>Example Usage</h2>

              <Tabs defaultActiveKey="1">
                <TabPane
                  tab={<TabHeader title="Users" icon={faUsers} />}
                  key="1"
                >
                  Get Users
                </TabPane>
                <TabPane
                  tab={<TabHeader title="Add User" icon={faUserPlus} />}
                  key="2"
                >
                  Create User
                </TabPane>
                <TabPane
                  tab={<TabHeader title="Get Exercises" icon={faHeartbeat} />}
                  key="3"
                >
                  Get Exercises By User
                </TabPane>
                <TabPane
                  tab={<TabHeader title="Add Exercise" icon={faCalendarPlus} />}
                  key="4"
                >
                  Add Exercise
                </TabPane>
              </Tabs>
            </StyledCard>
          </Col>
        </Row>
      </Child>
    </Root>
  );
};

const Child = styled.div`
  width: 95vw;
  margin: auto;
`;

const Root = styled.div`
  height: calc(100vh - ${SD.sizes.header}px);
  overflow-y: auto;
  background-color: ${SD.colors.exerciseTracker};
`;
