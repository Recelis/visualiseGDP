
function getGDP(raw) {
  var gdpForGraph = raw[1]/100;
  return gdpForGraph;
}

function getDates(raw) {
  return raw[0];
}

function createChart(error, data) {
  if (error) throw error;
  var gdp = data.data.map(getGDP);
  var dates = data.data.map(getDates);
  var chart = d3.select("#graph")
    .append('svg')
    .attr('height', 2000)
    .attr('width', 2000)
  var bars = chart.selectAll('rect')
    .data(gdp)
    .enter().append('rect')
    .attr('class', "chart")
    .attr('width', 1)
    .attr('height', (gdp) => {
      return gdp;
    })
    .attr('x', (d, i) => {
      return 1 * i;
    })
    .attr('fill', 'grey')
    .attr('y', (d, i) => {
      return 200 - d
    })
    .on('mouseover', (d,i)=>{
      tooltip.style("visibility", "visible");
      // console.log(d*100);
      tooltip.text(d*100);
      console.log(i);
      tooltip.style('padding-right', (d,i)=>i);
    })
    .on('mouseout', ()=>tooltip.style("visibility", "hidden"));
}

var tooltip = d3.select("#graph")
  .append("div")
  .style("position", "absolute")
  .style("z-index", "10")
  .style("visibility","hidden")



d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json", createChart);

// need to set horizontal and vertical axis

