import React, { useEffect, useState, useRef } from "react";
import * as d3 from "d3";

function LineChart(props) {
  useEffect(() => {
    drawChart();
  }, []);

  function drawChart() {
    const svg = d3.select(`#${props.id}`).append("svg");
    const myLine = d3
      .line()
      .x((value, index) => index * 50)
      .y((value) => 150 - value)
      .curve(d3.curveCardinal);

    svg
      .selectAll("path")
      .data([props.data])
      .join("path")
      .attr("d", (value) => myLine(value))
      .attr("fill", "none")
      .attr("stroke", "royalblue");
  }

  return <div id={props.id}></div>;
}

export default LineChart;
