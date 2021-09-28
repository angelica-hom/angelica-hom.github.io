
let photographs;
let allTime =[];
d3.json('data/data-AH1.json').then(function(data){ 
  photographs = data;
  analyzeData();
  displayData();
});

function analyzeData(){
  let timeNow;

  // go through the list of photographs
  photographs.forEach(function(n) {
    timeNow = n.date;
    let match = false;

    // see if their date already exists the allTime array
    allTime.forEach(function(p){
      if(p.name==timeNow){
        p.count++;
        match=true;
      }
    });
    // if not create a new entry for that time name
      if(!match){
        allTime.push({
          name: timeNow,
          count:1
        });
      }
  });
  // sort by amount of items in the list
  //allTime.sort((a, b) => (a.count < b.count) ? 1 : -1)
  console.log(allTime)
  
  // sort alphabetically by decades in the list
  allTime.sort((a, b) => (b.name < a.name) ? 1 : -1)
}

function displayData(){
  
  // define dimensions and margins for the graphic
  const margin = ({top: 100, right: 50, bottom: 100, left: 80})
  const width = 1250;
  const height = 600;

  // let's define our scales. 
  // yScale corresponds with amount of photographs per decade
  const yScale = d3.scaleLinear()
                   .domain([0, d3.max(allTime, d => d.count)+1])
                   .range([height - margin.bottom, margin.top]); 

  // xScale corresponds with decade names
  const xScale = d3.scaleBand()
                 .domain(allTime.map(d => d.name))
                .range([margin.left, width - margin.right])


  const sequentialScale = d3.scaleSequential()
                            .domain([0, d3.max(allTime, d => d.count)])
                            .interpolator(d3.interpolateWarm);

  // create an svg container from scratch
  const svg = d3.select('body')
                .append('svg')
                .attr('width', width)
                .attr('height', height)

  // attach a graphic element, and append rectangles to it
  svg.append('g')
     .selectAll('rect')
     .data(allTime)
     .join('rect')
     .attr('x', function(d){return xScale(d.name) })
     .attr('y', function(d){return yScale(d.count) })
     .attr('height', function(d){return yScale(0)-yScale(d.count) })
     .attr('width', function(d){return xScale.bandwidth() - 2 })
     //.style('fill', function(d) {return sequentialScale(d.count);});
     .attr('fill', '#F7EFCD');
 

  // AXES
  
  // Y Axis
  const yAxis =  d3.axisLeft(yScale).ticks(5)

  svg.append('g')
  .attr('transform', `translate(${margin.left},0)`)
  .call(yAxis);

  // X Axis
  const xAxis =  d3.axisBottom(xScale).tickSize(0);

  svg.append('g')
  .attr('transform', `translate(0,${height - margin.bottom})`)
  .call(xAxis)
  .selectAll('text')	
  .style('text-anchor', 'middle')
  .attr('dx', '-.6em')
  .attr('dy', '1.2em')
  //.attr('transform', function(d) {return 'rotate(-65)' })
  .attr('fill', 'white')
  //.attr('font-weight', 'bold')
  .attr('font-family', 'Roboto');

      // Labelling the graph
    svg.append('text')
    .attr('font-family', 'sans-serif')
    .attr('font-weight', 'bold')
    .attr('font-size', 20)
    .attr('y', margin.top-20)
    .attr('x', margin.left)
    .attr('fill', 'white')
    .attr('text-anchor', 'start')
    .attr('dx', '12em')
    .attr('font-family', 'Roboto')
    .attr('font-weight', 'bold')
    .text('Reclamation of African American Power and Identity through Photography')
    
    
    
}