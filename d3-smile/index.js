const svg = d3.select("svg");
const width = +svg.attr("width");
const height = +svg.attr("height");
const eyeSpacing = 100;
const eyeYOffset = 70;
const eyeRadius = 40;
const eyebrowWidth = 70;
const eyebrowHeight = 20;
const eyebrowYOffset = -70;
const duration = 1500;
const circle = svg
  .append("circle")
  .attr("r", height / 2)
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .attr("fill", "yellow")
  .attr("stroke", "black");

const leftEye = svg
  .append("circle")
  .attr("r", eyeRadius)
  .attr("cx", width / 2 - eyeSpacing)
  .attr("cy", height / 2 - eyeYOffset)
  .attr("fill", "black");

const rightEye = svg
  .append("circle")
  .attr("r", eyeRadius)
  .attr("cx", width / 2 + eyeSpacing)
  .attr("cy", height / 2 - eyeYOffset)
  .attr("fill", "black");
const g = svg
  .append("g")
  .attr("transform", `translate(${width / 2},${height / 2})`);
const mouth = g.append("path").attr(
  "d",
  d3.arc()({
    innerRadius: 150,
    outerRadius: 170,
    startAngle: Math.PI / 2,
    endAngle: (Math.PI * 3) / 2
  })
);

const leftEyebrow = g
  .append("rect")
  .attr("x", -eyeSpacing - eyebrowWidth / 2)
  .attr("y", -140)
  .attr("width", eyebrowWidth)
  .attr("height", eyebrowHeight)
  .transition()
  .duration(duration)
  .attr("y", eyebrowYOffset - 100)
  .transition()
  .duration(duration)
  .attr("y", eyebrowYOffset - 70);

const rightEyebrow = g
  .append("rect")
  .attr("x", eyeSpacing - eyebrowWidth / 2)
  .attr("y", -140)
  .attr("width", eyebrowWidth)
  .attr("height", eyebrowHeight)
  .transition()
  .duration(duration)
  .attr("y", eyebrowYOffset - 100)
  .transition()
  .duration(duration)
  .attr("y", eyebrowYOffset - 70);
