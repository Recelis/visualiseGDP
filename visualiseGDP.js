var data = [4, 7, 12, 23, 42];

d3.select(".chart")
.selectAll("div")
  .data(data)
.enter().append("div")
  .style("width", function(d) { return d * 10 + "px"; })
  .text(function(d) { return d; });

