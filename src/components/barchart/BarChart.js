import React, { useEffect } from "react";
import * as d3 from "d3";
import "./BarChart.css";

function BarChart(props) {
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

    // create xScale & yScale range & colorScale
    const xScale = d3
      .scaleBand() // splits xrange into equally wide bands (bars)
      .domain(data.map((value, index) => index)) // xrange data
      .range([0, width]) // width in pixels
      .padding(0.15); // adds padding between each band (bars)
    const yScale = d3
      .scaleLinear()
      .domain([0, Math.max(...data) * 1.2]) // yrange data
      .range([height, 0]); // height in pixels
    const colorScale = d3
      .scaleLinear()
      .domain([Math.min(...data), Math.max(...data), Math.max(...data)])
      .range(["royalblue", "#55CBBC", "white"])
      .clamp(true);

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

    // append bars
    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .attr("fill", colorScale)
      .style("transform", "scale(1, -1")
      .attr("x", (value, index) => xScale(index))
      .attr("y", height * -1)
      .attr("width", xScale.bandwidth()) // equal to the width of 1 band
      .transition()
      .duration(2000)
      .attr("height", (value) => height - yScale(value));
  }

  return <div id={props.id} style={{ marginTop: 40 }}></div>;
}

export default BarChart;
