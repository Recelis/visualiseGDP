
function getGDP(raw) {
  var gdpForGraph = raw[1]/40;
  return gdpForGraph;
}

function getDates(raw) {
  return raw[0];
}

function createChart(error, data) {
  if (error) throw error;
  var gdp = data.data.map(getGDP);
  console.log(gdp.map((d)=>d*40));
  var dates = data.data.map(getDates);
  var chart = d3.select("#graph")
    .append('svg')
    .attr('height', 500)
    .attr('width', 50000)
  var bars = chart.selectAll('rect')
    .data(gdp)
    .enter().append('rect')
    .attr('class', "chart")
    .attr('width', 3)
    .attr('height', (gdp) => {
      return gdp;
    })
    .attr('x', (d, i) => {
      return 3 * i;
    })
    .attr('fill', 'grey')
    .attr('y', (d, i) => {
      return 500 - d
    })
    .on('mouseover', (d,i)=>{
      tooltip.style("visibility", "visible");
      // console.log(d*100);
      tooltip.text("$" + parseFloat(Math.round(d*40*100)/100).toFixed(1) + "B USD " + dates[i]); // may be rounded incorrectly
      // console.log(i);
    })
    .on('mouseout', ()=>tooltip.style("visibility", "hidden"));
}

var tooltip = d3.select("#graph")
  .append("div")
  .style("position", "absolute")
  .style("z-index", "10")
  .style("visibility","hidden")
  .style("background-color", "red")
  .style('padding-right', 100);



d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json", createChart);

// need to set horizontal and vertical axis

