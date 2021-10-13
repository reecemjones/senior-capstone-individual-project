import React, { useEffect, useState, useRef } from "react";
import * as d3 from "d3";
import "./PieChart.css";

/*  General guide that I followed https://www.youtube.com/watch?v=kMCnzUE07QA */

function PieChart(props) {
  useEffect(() => {
    drawChart();
  }, []);

  function drawChart() {
    const data = props.data;

    const width = props.width;
    const height = props.height;
    const r = 275;
    const color = d3.scaleOrdinal().range(["#48E2BC", "#FBD36F", "#A865E9"]);

    // create initial svg element
    const svg = d3
      .select(`#${props.id}`)
      .append("svg")
      .attr("height", height)
      .attr("width", width);

    const group = svg.append("g").attr("transform", "translate(400, 300)");
    const arc = d3.arc().innerRadius(150).outerRadius(r);
    const pie = d3.pie().value(function (d) {
      return d;
    });

    const arcs = group
      .selectAll(".arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    arcs
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => {
        return color(d.data);
      })
      .attr("stroke", "#02101a")
      .attr("stroke-width", "30px");

    arcs
      .append("text")
      .attr("transform", (d) => {
        return `translate(${arc.centroid(d)})`;
      })
      .attr("text-anchor", "middle")
      .attr("font-size", "1.2rem")
      .attr("font-weight", "bold")
      .text((d) => {
        return d.data;
      });
  }

  return <div id={props.id} style={{ marginTop: 40 }}></div>;
}

export default PieChart;
