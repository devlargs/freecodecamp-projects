import CenteredContent from "components/CenteredContent";
import * as d3 from "d3";
import { useEffect, useState } from "react";
import links from "constants/links";
import styled from "styled-components";

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    d3.json(links.DATA_VISUALIZATION.BAR_CHART).then((q) => {
      console.log(q);
      setData(q.data);
    });
    return () => {};
  }, []);

  return (
    <CenteredContent bgColor="ghostwhite">
      <Root>
        <h1 id="title">Gross Domestic Product</h1>
      </Root>
    </CenteredContent>
  );
};

const Root = styled.div``;
