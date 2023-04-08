document.addEventListener('keydown', function (event) {
    if (event.code === 'ArrowLeft') {
        window.location.href = 'intro.html';
    }
});

document.addEventListener('keydown', function (event) {
    if (event.code === 'ArrowRight') {
        window.location.href = 'themes.html';
    }
});

// Create data
    var data = [
      {x: "Evelyn", value: 11, name: "EVELYN", desc: "Hard-working", img: "https://media.giphy.com/media/WiCO2uZK05Klc1d28q/giphy.gif",
       normal:   {fill: "#d900ac 0.8", stroke: "4 grey"},
       hovered:  {fill: "#d900ac 0.5", stroke: "4 white"},
       selected: {fill: "#d900ac 0.5", stroke: "4 white"}
      },
      {x: "Joy", value: 7, name: "JOY", desc: "Granddaughter, Queer", img: "https://media.giphy.com/media/Z9QebBL1jjkGToMLyk/giphy.gif",
       normal:   {fill: "#86c6fd 0.8", stroke: "4 grey"},
       hovered:  {fill: "#86c6fd 0.5", stroke: "4 white"},
       selected: {fill: "#86c6fd 0.5", stroke: "4 white"}
      },
      {x: "Waymond", value: 9, name: "WAYMOND", desc: "Playful, Obliging, People underestimate him", img: "https://media.giphy.com/media/YQPsWNwHjxFG8EAGsr/giphy.gif",
       normal:   {fill: "#009c98 0.8", stroke: "4 grey"},
       hovered:  {fill: "#009c98 0.5", stroke: "4 white"},
       selected: {fill: "#009c98 0.5", stroke: "4 white"}
      },
      {x: "Gong Gong", value: 6, name: "GONG GONG", desc: "Grandfather", img: "https://cdn.vox-cdn.com/thumbor/v7IOC6j6IixEJN5O4N1PIR0Gx8A=/366x0:3235x1502/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23374358/https___cdn.sanity.io_images_xq1bjtf4_production_53776b97257942dba7132712bcba442fca800c1c_3600x1502.jpg",
       normal:	 {fill: "#7452aa 0.8", stroke: "4 grey"},
       hovered:  {fill: "#7452aa 0.5", stroke: "4 white"},
       selected: {fill: "#7452aa 0.5", stroke: "4 white"}
      },
      {x: ["Evelyn", "Joy"], value: 3, name: "EVELYN & JOY", desc: "Daughters, Unhappy with life, Yearns to be accepted", img: "https://media.giphy.com/media/dIf76fQGLFrtqMxYDC/giphy.gif",
       normal:   {stroke: "4 grey"},
       hovered:  {stroke: "4 white"},
       selected: {stroke: "4 white"}
      },
      {x: ["Evelyn", "Waymond"], value: 3, name: "EVELYN & WAYMOND", desc: "Parents, Spouses, Immigrants, Eager to please, Speaks Mandarin", img: "https://media.giphy.com/media/F1OVAmKz9hatMaMWUZ/giphy.gif",
       normal:   {stroke: "4 grey"},
       hovered:  {stroke: "4 white"},
       selected: {stroke: "4 white"}
      },
      {x: ["Evelyn", "Gong Gong"], value: 4, name: "EVELYN & GONG GONG", desc: "Parents, High expectations, Speaks Cantonese", img: "https://y.yarn.co/cd9336f1-1f2f-459f-8aff-9c2cafc978e6_thumb.jpg",
       normal:   {stroke: "4 grey"},
       hovered:  {stroke: "4 white"},
       selected: {stroke: "4 white"}
      },
      {x: ["Evelyn", "Gong Gong", "Joy"], value: 1, name: "EVELYN & GONG GONG & JOY", desc: "Disappointed with life", img: "https://64.media.tumblr.com/26898dce6b50f42b71f5eb812711ac4b/0be52a7ec02dbcc3-e7/s640x960/9fba0cab704c6029974cc0eb13d15bbd632b40fd.gif",
       normal:   {stroke: "4 grey"},
       hovered:  {stroke: "4 white"},
       selected: {stroke: "4 white"}
      },
      {x: ["Evelyn", "Waymond", "Joy"], value: 1, name: "EVELYN & WAYMOND & JOY", desc: "Speaks English", img: "https://64.media.tumblr.com/e42b6076e1a528f01d033b06de67f463/aa6b20f040aed5c9-a8/s540x810/c44671edfa02f5c548e644de6847bd5cdc686666.gif",
       normal:   {stroke: "4 grey"},
       hovered:  {stroke: "4 white"},
       selected: {stroke: "4 white"}
      },
    ];

    // Create a chart and set the data
    chart = anychart.venn(data);
	
 	// Set labels settings
    chart
      .labels()
      .fontColor('#fff')
	  .fontSize('20px')
	  .fontFamily('Roboto Flex')
      .format('{%Name}');
  
  	// Set intersections labels settings
    chart
      .intersections()
      .labels(false)
      
    // Set background color
	chart
      .background()
      .fill("#F3EFE9");

  	// Format tooltip
	chart
      .tooltip()
      .useHtml(true)
      .titleFormat("<img height=200 img width=400 src={%Img}>")
      .format("{%Name}: {%Desc}");  

    // Disable the legend
    chart.legend(false);

    // Set the container id
    chart.container('container');

    // initiate drawing the chart
    chart.draw();