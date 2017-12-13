var data = [4, 7, 12, 23, 42];
var gdp = [];
d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json",(data)=>{
  gdp = data.data;
  console.log(gdp);
})

d3.select(".chart")
.selectAll("div")
  .data(data)
.enter().append("div")
  // .style("width", function(d) { return 10 + "px"; })
  .attr('height', function(i){return i*10 + "px";})
  .text(function(d) { return d; });

