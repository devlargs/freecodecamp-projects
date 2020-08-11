import { Layout, Menu, Dropdown } from "antd";
import Link from "next/link";
import styled from "styled-components";
import "styles/global.css";

const { SubMenu } = Menu;
const { Header, Footer, Content } = Layout;
const App = ({ Component, pageProps }) => {
  const menu = (
    <Menu style={{ marginTop: 10 }}>
      <SubMenu title="Front End Libraries">
        <Menu.Item>
          <Link href="/projects/front-end-libraries/random-quote-machine">
            <a>Random Quote Machine</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/projects/front-end-libraries/markdown-previewer">
            <a>Markdown Previewer</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/projects/front-end-libraries/drum-machine">
            <a>Drum Machine</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/projects/front-end-libraries/javascript-calculator">
            <a>Javascript Calculator</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/projects/front-end-libraries/pomodoro-clock">
            <a>Pomodoro Clock</a>
          </Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );

  return (
    <Layout className="layout">
      <StyledHeader>
        <HeaderBox />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item>
            <Dropdown
              overlay={menu}
              getPopupContainer={() => document.getElementById("projects")}
            >
              <a
                id="projects"
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                Projects
              </a>
            </Dropdown>
          </Menu.Item>
        </Menu>
      </StyledHeader>
      <Content style={{ height: "calc(100vh - 64px - 70px)" }}>
        <Component {...pageProps} />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Free Code Camp Projects © 2020 Created by{" "}
        <a href="http://github.com/devlargs" target="_blank">
          Ralph Largo
        </a>
      </Footer>
    </Layout>
  );
};

const HeaderBox = styled.div`
  width: 120px;
  height: 31px;
  color: white;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
`;

const StyledHeader = styled(Header)``;

export default App;
