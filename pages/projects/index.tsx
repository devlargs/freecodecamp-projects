import { Card } from "antd";
import styled from "styled-components";
import { motion } from "framer-motion";
import projects from "constants/projects";
import { sequence } from "constants/animations";
import links from "constants/links";
import convertString from "utils/convertString";
import Link from "next/link";
import SEO from "components/SEO";
import SD from "constants/styleDefaults";
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
        description="List of some of the freecodecamp.org projects created by Ralph Largo (@devlargs)"
        imageLink={links.FCC_COVER}
      />
      <Root>
        {projects.map((project, p) => {
          const key = convertString(project.name, "sentence", "kebab");
          return (
            <Container
              key={key}
              initial="hidden"
              animate="visible"
              variants={list}
            >
              <motion.h1
                style={{ color: "white", fontWeight: "bold" }}
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
                        custom={i * p}
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
  width: 300px;
  cursor: pointer;
  .ant-card-cover {
    margin-right: 0px;
    margin-left: 0px;
  }
`;

const Root = styled.div`
  height: calc(100vh - ${SD.sizes.header}px);
  overflow-y: auto;
  background-color: ${SD.colors.main};
  background-color: #041429;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.59' fill-rule='evenodd'/%3E%3C/svg%3E");
  padding: 20px 40px 40px 40px;
  h1 {
    font-size: 2rem;
    text-align: center;
  }
  @media screen and (max-width: 520px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

const Flexbox = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px 20px;

  .container {
    background-color: white;
    padding: 10px;
    text-align: center;
    box-shadow: 0px -1px 2px rgba(58, 58, 58, 0.1),
      1px 1px 2px rgba(58, 58, 58, 0.1);
  }
`;

const Container = styled(motion.div)`
  margin-bottom: 40px;
`;
