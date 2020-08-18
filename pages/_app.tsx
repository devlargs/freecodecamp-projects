import { useRouter } from "next/router";
import { Layout, Menu } from "antd";
import Link from "next/link";
import styled from "styled-components";
import "styles/global.css";
import NProgress from "nprogress";
import { useEffect } from "react";
import { motion } from "framer-motion";
import sizes from "constants/sizes";

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
      <StyledContent>
        <Component {...pageProps} />
      </StyledContent>
    </Layout>
  );
};

const StyledContent = styled(Content)`
  height: calc(100vh - ${sizes.header}px);
  margin-top: ${sizes.header}px;
  // position: relative;
`;

const HeaderContent = styled.div`
  .header {
    overflow: hidden;
    background-color: #041529;
    padding: 0 50px 0px 50px;
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    z-index: 99;
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
