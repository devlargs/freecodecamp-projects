import { Card } from "antd";
import styled from "styled-components";
import { motion } from "framer-motion";
import projects from "constants/projects";
import convertString from "utils/convertString";
import Link from "next/link";
import SEO from "components/SEO";
import { useState, useEffect } from "react";

const { Meta } = Card;

export default () => {
  const [transition, setTransition] = useState(1.2);

  useEffect(() => {
    setTimeout(() => setTransition(0.5));
  }, []);

  return (
    <>
      <SEO
        title="Free Code Camp Projects"
        description="List of some of the freecodecamp.org projects created by Ralph Largo"
        imageLink={`https://www.freecodecamp.org/news/content/images/2019/11/fcc_ghost_publication_cover.png`}
      />
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
                    <Link
                      key={`${key}-${i}`}
                      href={`/projects/${key}/${title}`}
                    >
                      <motion.div
                        variants={{
                          fadeOut: { opacity: 0, x: -50 },
                          fadeIn: { opacity: 1, x: 0 },
                        }}
                        initial="fadeOut"
                        animate="fadeIn"
                        transition={{ ease: "easeInOut", duration: transition }}
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: transition },
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
                              alt={`${title}-image`}
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
    </>
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
