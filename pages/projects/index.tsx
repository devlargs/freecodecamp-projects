import { Card, Avatar } from "antd";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

export default () => {
  return (
    <Root>
      <div>
        <h1 style={{ color: "#041429" }}>Front End Libraries Projects</h1>
      </div>
      <Flexbox>
        {Array.from({ length: 5 }).map((q) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 1 },
              }}
              className="container"
            >
              <Card
                style={{ width: 300, cursor: "pointer" }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            </motion.div>
          );
        })}
      </Flexbox>
    </Root>
  );
};

const Root = styled.div`
  background-color: #20a76e;
  padding: 40px;
  height: 100%;
  h1 {
    font-size: 3rem;
    text-align: center;
  }
`;

const Flexbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px 20px;

  .container {
    text-align: center;
    // border: 1px solid black;
    width: 300px;
  }
`;
