import { Card } from "antd";
import styled from "styled-components";
import { motion } from "framer-motion";
import projects from "constants/projects";
import { sequence } from "constants/animations";
import links from "constants/links";
import convertString from "utils/convertString";
import Link from "next/link";
import SEO from "components/SEO";
import { useState, useEffect } from "react";

const { Meta } = Card;
const { list, item } = sequence;

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
        imageLink={links.FCC_COVER}
      />
      <Root>
        {projects.map((project) => {
          const key = convertString(project.name, "sentence", "kebab");
          return (
            <Container
              key={key}
              initial="hidden"
              animate="visible"
              variants={list}
            >
              <motion.h1
                style={{ color: "#041429" }}
                custom={1}
                variants={item}
              >
                {project.name} Projects
              </motion.h1>
              <Flexbox>
                {project.list.map((q, i) => {
                  const title = convertString(q, "sentence", "kebab");
                  return (
                    <Link
                      key={`${key}-${i}`}
                      href={`/projects/${key}/${title}`}
                    >
                      <motion.div
                        variants={item}
                        custom={i + 1}
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: transition },
                        }}
                        className="container"
                      >
                        <StyledCard
                          cover={
                            <img
                              height="200"
                              alt={`${title}-image`}
                              src={`/assets/images/projects/${title}.png`}
                            />
                          }
                        >
                          <Meta title={q} />
                        </StyledCard>
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

const StyledCard = styled(Card)`
  border: 1px dashed #041529;
  width: 300;
  cursor: pointer;
  .ant-card-cover {
    margin-right: 0px;
    margin-left: 0px;
  }
`;

const Root = styled.div`
  background-color: #ffffff;
  padding: 40px;
  h1 {
    font-size: 2rem;
    text-align: center;
  }
`;

const Flexbox = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px 20px;

  .container {
    text-align: center;
    width: 300px;
  }
`;

const Container = styled(motion.div)`
  margin-bottom: 40px;
`;
