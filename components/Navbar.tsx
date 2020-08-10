import { ReactElement } from "react";
import { Layout, Menu } from "antd";
import styled from "styled-components";

const { Header } = Layout;

export default (): ReactElement => {
  return (
    <Root>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
    </Root>
  );
};

const Root = styled.div`
  height: 60px;
  .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 0;
    float: left;
  }
`;
