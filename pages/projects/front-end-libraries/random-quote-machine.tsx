import Head from "next/head";
import styled from "styled-components";
import axios from "axios";

const Root = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  background-color: red;
  color: white;
  #quote-box {
    width: 50vh;
    #text {
      h1,
      h2 {
        text-align: center;
      }
    }
  }
`;

export default ({ data }) => {
  return (
    <Root>
      <Head>
        <title>Random Quote Machine</title>
      </Head>
      <div id="quote-box">
        <div id="text">
          <h1>{data[0].quote}</h1>
          <h2 id="author">{data[0].author}</h2>
        </div>
      </div>
    </Root>
  );
};

export async function getStaticProps(context) {
  const res = (await axios.get("http://api.ralphlargo.com/quotes")) as any;

  return {
    props: {
      data: res?.data?.data || [],
    },
  };
}
