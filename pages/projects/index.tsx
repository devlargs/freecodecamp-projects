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
              {project.list.map((q) => {
                console.log(q);
                const title = convertString(q, "sentence", "kebab");
                console.log(title);
                return (
                  <Link href={`/projects/${key}/${title}`}>
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.5 },
                      }}
                      className="container"
                    >
                      <Card
                        style={{ width: 300, cursor: "pointer" }}
                        cover={
                          <img
                            alt="example"
                            src="/assets/images/projects/random-quote-machine.png"
                            // src={`/assets/images/projects/${title}.png`} // TODO - this is the real one
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

const Container = styled.div`
  margin-bottom: 40px;
`;
