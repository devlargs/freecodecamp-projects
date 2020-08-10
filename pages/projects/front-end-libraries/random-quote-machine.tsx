import Head from "next/head";
import styled from "styled-components";

export default () => {
  return (
    <>
      <Head>
        <title>Random Quote Machine</title>
        {/* <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script> */}
      </Head>
      <Root id="quote-box">
        <div id="text">
          <h1>Random Quote Machine</h1>
          <h2 id="author">Ralph Largo</h2>
        </div>
      </Root>
    </>
  );
};

const Root = styled.div`
  display: grid;
  background-color: 
  place-items: center;
  height: calc(100vh - 64px - 70px);
  h1,
  h2 {
    text-align: center;
  }
  #text {
    padding: 20px;
    border: 2px solid black;
    background-color: gray;
  }
`;
