import React, { useEffect, useState, useRef } from "react";
import * as d3 from "d3";

/*  General guide that I followed https://www.youtube.com/watch?v=hR8xtl_IbCw */

function LineChart(props) {
  useEffect(() => {
    drawChart();
  }, []);

  function drawChart() {
    const data = props.data;

    const width = props.width;
    const height = props.height;

    // create initial svg element
    const svg = d3
      .select(`#${props.id}`)
      .append("svg")
      .attr("height", height)
      .attr("width", width);

    // create xScale & yScale range
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1]) // data
      .range([0, width]); // width in pixels
    const yScale = d3
      .scaleLinear()
      .domain([0, Math.max(...data)]) // data
      .range([height, 0]); // height in pixels

    // append x & y axis labels
    svg
      .append("g")
      .style("transform", `translateY(${height}px)`)
      .call(
        d3
          .axisBottom(xScale)
          .ticks(data.length)
          .tickFormat((index) => index + 1)
      )
      .attr("font-size", "16px");
    svg
      .append("g")
      .style("transform", `translateX(${width}px)`)
      .call(d3.axisRight(yScale))
      .attr("font-size", "16px");

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

    // add dots to lines
    svg
      .selectAll(".myDot")
      .data(data)
      .join("circle")
      .attr("class", "myDot")
      .attr("stroke", "#02101a")
      .attr("r", 5)
      .attr("fill", "aquamarine")
      .attr("cx", (value, index) => xScale(index))
      .attr("cy", yScale);
  }

  return <div id={props.id} style={{ marginTop: 40 }}></div>;
}

export default LineChart;
