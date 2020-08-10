import { Layout, Menu, Dropdown } from "antd";
import Link from "next/link";
import "../styles/global.css";

const { SubMenu } = Menu;
const { Header, Footer, Content } = Layout;
const App = ({ Component, pageProps }) => {
  const menu = (
    <Menu style={{ marginTop: 10 }}>
      <SubMenu title="Front End Libraries">
        <Menu.Item>
          <Link href="/projects/front-end-libraries/random-quote-machine">
            Random Quote Machine
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/projects/front-end-libraries/markdown-previewer">
            Markdown Previewer
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/projects/front-end-libraries/drum-machine">
            Drum Machine
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/projects/front-end-libraries/javascript-calculator">
            Javascript Calculator
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/projects/front-end-libraries/pomodoro-clock">
            Pomodoro Clock
          </Link>
        </Menu.Item>
      </SubMenu>

      <SubMenu title="Data Visualization">
        <Menu.Item>
          <Link href="/projects/front-end-libraries/random-quote-machine">
            Random Quote Machine
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/projects/front-end-libraries/markdown-previewer">
            Markdown Previewer
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/projects/front-end-libraries/drum-machine">
            Drum Machine
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/projects/front-end-libraries/javascript-calculator">
            Javascript Calculator
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/projects/front-end-libraries/pomodoro-clock">
            Pomodoro Clock
          </Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );

  return (
    <Layout className="layout">
      <Header>
        <div
          className="logo"
          style={{
            width: 120,
            height: 31,
            color: "white",
            background: "rgba(255, 255, 255, 0.2)",
            margin: "16px 24px 16px 0",
            float: "left",
          }}
        />
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
      </Header>
      <Content style={{ height: "calc(100vh - 64px - 70px)" }}>
        <Component {...pageProps} />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        freeCodeCampProjects © 2020 Created by @devlargs
      </Footer>
    </Layout>
  );
};

export default App;
