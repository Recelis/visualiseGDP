var data = [4, 7, 12, 23, 42, 20, 150];
var gdp = [];


var chart = d3.select("body")
  .append('svg')
  .attr('height',200)
  .attr('width',200)
var bars = chart.selectAll('rect')  
  .data(data)
  .enter().append('rect')
  .attr('class', "chart")
  .attr('width', 2)
  .attr('height', (data)=>{
    return data;
  })
  .attr('x', (d, i) => {
    console.log(i);
    return 2 * i;
  })
  .attr('fill', 'grey')
  .attr('y', (d,i)=>{
    return 200-d
  })
  

  console.log(chart);
// var bars = chart.selectAll('div')  
// chart.attr('x', (d,i)=>{
//   return 30*i;
// })

d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json", (error, data) => {
  if (error) throw error;
  gdp = data.data;
  console.log(gdp); 
});


