import CenteredContent from "components/CenteredContent";
import * as d3 from "d3";
import { useEffect, useState } from "react";
import links from "constants/links";
import styled from "styled-components";
import SEO from "components/SEO";

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    d3.json(links.DATA_VISUALIZATION.BAR_CHART).then((q) => {
      console.log(q);

      const dataset = q.data.map((r) => [r[0].split("-")[0], r[1]]);
      const w = 700;
      const h = 500;

      const padding = 60;
      const xScale = d3
        .scaleLinear()
        .domain([d3.min(dataset, (d) => d[0]), d3.max(dataset, (d) => d[0])])
        .range([padding, w - padding]);
      const yScale = d3
        .scaleLinear()
        .domain([d3.min(dataset, (d) => d[1]), d3.max(dataset, (d) => d[1])])
        .range([h - padding, padding]);

      const svg = d3
        .select("#graph")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

      svg
        .selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", (d, i) => {
          console.log(d[0], "X");
          return i;
        })
        .attr("y", (d) => {
          console.log(h - parseInt(d[1]), "Y");
          return parseInt(d[1]);
        })
        .attr("width", 25)
        .attr("height", (D) => D[0]);

      const xAxis = d3.axisBottom(xScale);
      console.log(xAxis);

      const yAxis = d3.axisLeft(yScale);

      svg
        .append("g")
        .attr("transform", "translate(0," + (h - padding) + ")")
        .call(xAxis);
      svg
        .append("g")
        .attr("transform", "translate(" + padding + ",0)")
        .call(yAxis);
    });
    return () => {};
  }, []);

  return (
    <CenteredContent bgColor="ghostwhite">
      <SEO title="Bar Chart Visualization" withFCCScript />
      <Root>
        <div style={{ backgroundColor: "" }}>
          <h1 id="title">Gross Domestic Product</h1>
          <div id="graph" style={{ backgroundColor: "white", width: "50vw" }} />
        </div>
      </Root>
    </CenteredContent>
  );
};

const Root = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  #nice {
    margin: auto;
  }
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
`;
