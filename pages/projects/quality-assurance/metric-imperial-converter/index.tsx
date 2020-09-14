import { Alert, Tabs } from "antd";
import SEO from "components/SEO";
import styled from "styled-components";
import Length from "./Length";
import {
  faBalanceScale,
  faCircle,
  faFlask,
  faRuler,
  faThermometerHalf,
} from "@fortawesome/free-solid-svg-icons";
import TabHeader from "components/TabHeader";

const { TabPane } = Tabs;

export default () => {
  return (
    <>
      <SEO title="Metric Imperial Converter" />
      <h2 style={{ textAlign: "center", paddingTop: 10 }}>
        Metric Imperial Converter
      </h2>
      <Root>
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <TabHeader title="Length" icon={faRuler} />
              </span>
            }
            key="1"
          >
            <Length />
          </TabPane>
          <TabPane
            tab={
              <span>
                <TabHeader title="Area" icon={faCircle} />
              </span>
            }
            key="2"
          >
            <Alert
              message="Info"
              description="Work in progress"
              type="info"
              showIcon
            />
          </TabPane>
          <TabPane
            tab={
              <span>
                <TabHeader title="Volume" icon={faFlask} />
              </span>
            }
            key="3"
          >
            <Alert
              message="Info"
              description="Work in progress"
              type="info"
              showIcon
            />
          </TabPane>

          <TabPane
            tab={
              <span>
                <TabHeader title="Mass" icon={faBalanceScale} />
              </span>
            }
            key="4"
          >
            <Alert
              message="Info"
              description="Work in progress"
              type="info"
              showIcon
            />
          </TabPane>

          <TabPane
            tab={
              <span>
                <TabHeader title="Temperature" icon={faThermometerHalf} />
              </span>
            }
            key="5"
          >
            <Alert
              message="Info"
              description="Work in progress"
              type="info"
              showIcon
            />
          </TabPane>
        </Tabs>
      </Root>
    </>
  );
};

const Root = styled.div`
  background-color: white;
  margin: 20px;
  padding: 10px;
  width: 70vw;
  margin: auto;
`;
