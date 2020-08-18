import { useRouter } from "next/router";
import { Layout, Menu } from "antd";
import Link from "next/link";
import styled from "styled-components";
import "styles/global.css";
import NProgress from "nprogress";
import { useEffect } from "react";
import { motion } from "framer-motion";
import links from "constants/links";

const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const item = {
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    rotate: 360,
    transition: {
      delay: i * 0.3,
    },
  }),
  hidden: { opacity: 0, x: 1000 },
};

const { SubMenu } = Menu;
const { Footer, Content } = Layout;
const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const nprogressStart = () => NProgress.start();
    const nprogressDone = () => {
      NProgress.done();
    };
    router.events.on("routeChangeStart", nprogressStart);
    router.events.on("routeChangeComplete", nprogressDone);
    router.events.on("routeChangeError", nprogressDone);

    return () => {
      router.events.off("routeChangeStart", nprogressStart);
      router.events.off("routeChangeComplete", nprogressDone);
      router.events.off("routeChangeError", nprogressDone);
    };
  }, []);

  return (
    <Layout className="layout" style={{ background: "#20A76E" }}>
      <HeaderContent>
        <div className="header">
          <Link href="/">
            <a className="logo">FCC</a>
          </Link>
          <motion.div
            className="header-right"
            initial="hidden"
            animate="visible"
            variants={list}
          >
            <Link href="/">
              <motion.a variants={item} custom={1}>
                /home
              </motion.a>
            </Link>
            <Link href="/projects">
              <motion.a variants={item} custom={2}>
                /projects
              </motion.a>
            </Link>
            <Link href="/certificates">
              <motion.a variants={item} custom={3}>
                /certificates
              </motion.a>
            </Link>
          </motion.div>
        </div>
      </HeaderContent>
      <Content
        style={{
          height: `calc(100vh - ${pageProps?.path === "/" ? "49" : "70"}px)`,
        }}
      >
        <Component {...pageProps} />
      </Content>
      {/* 
      {pageProps?.path === "/" ? (
        <></>
      ) : (
        <StyledFooter>
          Free Code Camp Projects © 2020 Created by{" "}
          <a href={links.GITHUB_PROFILE} target="_blank">
            Ralph Largo
          </a>
        </StyledFooter>
      )} */}
    </Layout>
  );
};

const StyledFooter = styled(Footer)`
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none;
`;

const HeaderContent = styled.div`
  .header {
    overflow: hidden;
    background-color: #041529;
    padding: 0 50px 0px 50px;
  }

  .header a {
    float: left;
    color: white;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;
  }

  .header a.logo {
    color: white;
    font-size: 25px;
    font-weight: bold;
  }

  .header a:hover {
    color: white;
  }

  .header a.active {
    background-color: #20a76e;
    color: white;
  }

  .header-right {
    float: right;
  }

  @media screen and (max-width: 500px) {
    .header a {
      float: none;
      display: block;
      text-align: left;
    }

    .header-right {
      float: none;
    }
  }
`;

export default App;
