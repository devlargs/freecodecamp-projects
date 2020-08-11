import Head from "next/head";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

export default (props) => {
  return (
    <>
      <Head>
        <title>Random Quote Machine</title>
      </Head>
      <div id="quote-box">
        <div id="text">
          <h1>Random Quote Machine</h1>
          <h2 id="author">Ralph Largo</h2>
        </div>
      </div>
    </>
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
