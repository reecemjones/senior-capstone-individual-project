import React, { useEffect, useState, useRef } from "react";
import * as d3 from "d3";

function LineChart(props) {
  useEffect(() => {
    drawChart();
  }, []);

  function drawChart() {
    const data = props.data;

    // create initial svg element
    const svg = d3.select(`#${props.id}`).append("svg");

    // create xScale & yScale range
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1]) // data
      .range([0, 300]); // length in pixels
    const yScale = d3
      .scaleLinear()
      .domain([0, Math.max(...data)]) // data
      .range([150, 0]); // height in pixels

    // append x & y axis labels
    svg
      .append("g")
      .style("transform", "translateY(150px)")
      .call(
        d3
          .axisBottom(xScale)
          .ticks(data.length)
          .tickFormat((index) => index + 1)
      );
    svg
      .append("g")
      .style("transform", "translateX(300px)")
      .call(d3.axisRight(yScale));

    // create line points
    const myLine = d3
      .line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(d3.curveCardinal);

    // append line points to svg as a stroke path
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("class", "line")
      .attr("d", myLine)
      .attr("fill", "none")
      .attr("stroke", "royalblue");
  }

  return <div id={props.id}></div>;
}

export default LineChart;
