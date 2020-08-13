import { Card } from "antd";
import styled from "styled-components";
import { motion } from "framer-motion";
import projects from "constants/projects";
import convertString from "utils/convertString";
import Link from "next/link";

const { Meta } = Card;

export default () => {
  return (
    <Root>
      {projects.map((project) => {
        const key = convertString(project.name, "sentence", "kebab");
        return (
          <Container key={key}>
            <h1 style={{ color: "#041429" }}>{project.name} Projects</h1>
            <Flexbox>
              {project.list.map((q, i) => {
                const title = convertString(q, "sentence", "kebab");
                return (
                  <Link key={`${key}-${i}`} href={`/projects/${key}/${title}`}>
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.5 },
                      }}
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: { opacity: 1 },
                        hidden: { opacity: 0 },
                      }}
                      className="container"
                    >
                      <Card
                        style={{
                          width: 300,
                          cursor: "pointer",
                        }}
                        cover={
                          <img
                            height="200"
                            alt="example"
                            src={`/assets/images/projects/${title}.png`}
                          />
                        }
                      >
                        <Meta title={q} />
                      </Card>
                    </motion.div>
                  </Link>
                );
              })}
            </Flexbox>
          </Container>
        );
      })}
    </Root>
  );
};

const Root = styled.div`
  background-color: #20a76e;
  padding: 40px;
  h1 {
    font-size: 2rem;
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
    width: 300px;
  }
`;

const Container = styled.div`
  margin-bottom: 40px;
`;
