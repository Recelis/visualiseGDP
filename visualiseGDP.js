
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
  var chart = d3.select("body")
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
}


d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json", createChart);

// need to get max height and/or set a max height

// need to be able to read json data in and make it not look bad

// need to set horizontal and vertical axis

