
var width = 850;
var height = 500;

function getGDP(raw) {
  var gdpForGraph = raw[1]/40;
  return gdpForGraph;
}

function getDates(raw) {
  return raw[0];
}

var y = d3.scaleLinear().range([height,0]);
var x = d3.scaleLinear().range([0,width]);

function createChart(error, data) {
  if (error) throw error;
  var gdp = data.data.map(getGDP);
  console.log(gdp.length);
  var dates = data.data.map(getDates);
  y.domain([0, d3.max(data, (d)=>{return d.value;})]);  
  console.log(y);

  // var yAxis = d3.svg.axis()
  // .scale(y)
  // .orient("left")

  var chart = d3.select("#graph")
    .append('svg')
    .attr('height', height)
    .attr('width', width)
    .style("background-color","white")
    .style('padding', '100px');
  chart.append("g")
    .attr("class", "y-axis")
    .call(d3.axisLeft(y));
  chart.append("g")
    .attr("class", "x-axis")
    .attr("transform", "translate(0,"+height+")")
    .style("z-index", 11)
    .call(d3.axisBottom(x));
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
    .attr('fill', 'rgb(98, 173, 77)')
    .attr('y', (d, i) => {
      return 500 - d
    })
    .on('mouseover', (d,i)=>{
      tooltip.style("visibility", "visible");
      tooltip.text("$" + parseFloat(Math.round(d*40*100)/100).toFixed(1) + "B USD " + dates[i]); // may be rounded incorrectly
      tooltip.style('left', d3.event.pageX+"px");
      tooltip.style('top',d3.event.pageY -100+ "px");
    })
    .on('mouseout', ()=>{
      tooltip.style("visibility", "hidden")
    });
}



var tooltip = d3.select("#graph")
  .append("div")
  .attr("class", "tooltip")
  .style("visibility","hidden");
  



d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json", createChart);

// need to set horizontal and vertical axis

// headings and labels

