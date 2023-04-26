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
      {x: "Evelyn", value: 12, name: "EVELYN", desc: "She is a hard-working matriarch who<br>struggles to stay on top of all aspects of her life:<br>family, business, and personal dreams. She is so<br>determined to make everything “perfect” or<br>appease others that she forgets to focus on what<br>truly matters. She is capable of changing for the<br>good of her and her family’s happiness.", img: "https://media.giphy.com/media/WiCO2uZK05Klc1d28q/giphy.gif",
       normal:   {fill: "#d900ac 0.8", stroke: "4 grey"},
       hovered:  {fill: "#d900ac 0.5", stroke: "4 white"},
       selected: {fill: "#d900ac 0.5", stroke: "4 white"}
      },
      {x: "Joy", value: 6, name: "JOY", desc: "She feels like the black sheep of the family.<br>Her identities and her life choices go against her<br>family's wishes: dating women, having tattoos,<br>dropping out of college. She gets easily stressed<br>and defensive with her family. She hardly calls or<br>visits because of the wall she's built up to protect<br>her emotions from her family's criticisms.", img: "https://media.giphy.com/media/Z9QebBL1jjkGToMLyk/giphy.gif",
       normal:   {fill: "#86c6fd 0.8", stroke: "4 grey"},
       hovered:  {fill: "#86c6fd 0.5", stroke: "4 white"},
       selected: {fill: "#86c6fd 0.5", stroke: "4 white"}
      },
      {x: "Waymond", value: 6, name: "WAYMOND", desc: "He's the only optimistic person in the<br>family and easily finds the positive side of things.<br>His silliness comes off as being so naive and weak<br>that even his own family underestimates him. He<br>knows his goofiness is actually his strength that<br>has held the family together through the chaos.", img: "https://media.giphy.com/media/YQPsWNwHjxFG8EAGsr/giphy.gif",
       normal:   {fill: "#009c98 0.8", stroke: "4 grey"},
       hovered:  {fill: "#009c98 0.5", stroke: "4 white"},
       selected: {fill: "#009c98 0.5", stroke: "4 white"}
      },
      {x: "Gong Gong", value: 6, name: "GONG GONG", desc: "He sees the world strictly as black<br>-and-white or right-and-wrong. It's hard for him<br>to accept those who fall in the grey area. He<br>doesn't shy away from extreme situations<br>whether it's abandoning his daughter or saving <br>is family from being sucked into the bagel.", img: "https://m.media-amazon.com/images/M/MV5BYWVkNGFkYzQtZTJiZi00Y2Q0LTg5YmYtY2IzYjQ4OTJlY2NiXkEyXkFqcGdeQXVyMTIwODk1NTQ@._V1_.jpg",
       normal:	 {fill: "#7452aa 0.8", stroke: "4 grey"},
       hovered:  {fill: "#7452aa 0.5", stroke: "4 white"},
       selected: {fill: "#7452aa 0.5", stroke: "4 white"}
      },
      {x: ["Evelyn", "Joy"], value: 3, name: "EVELYN & JOY", desc: "They are both daughters that want to be fully accepted by their parents. They feel so hurt by what their parents have said or done over time that it has negatively affected how they view themselves and their lives.", img: "https://media.giphy.com/media/dIf76fQGLFrtqMxYDC/giphy.gif",
       normal:   {stroke: "4 grey"},
       hovered:  {stroke: "4 white"},
       selected: {stroke: "4 white"}
      },
      {x: ["Evelyn", "Waymond"], value: 3, name: "EVELYN & WAYMOND", desc: "They are both<br>misunderstood and underestimated by most<br>people including their own family. When their<br>family is in grave danger, they are committed to<br>saving them and prove everyone wrong with their<br>own style of fighting and bravery.", img: "https://media.giphy.com/media/F1OVAmKz9hatMaMWUZ/giphy.gif",
       normal:   {stroke: "4 grey"},
       hovered:  {stroke: "4 white"},
       selected: {stroke: "4 white"}
      },
      {x: ["Evelyn", "Gong Gong"], value: 3, name: "EVELYN & GONG GONG", desc: "They have high<br>expectations of their family, which has caused<br>strained relationships with their daughters. They<br>have a difficult time verbalizing their emotions<br>and processing their traumas.", img: "https://y.yarn.co/cd9336f1-1f2f-459f-8aff-9c2cafc978e6_thumb.jpg",
       normal:   {stroke: "4 grey"},
       hovered:  {stroke: "4 white"},
       selected: {stroke: "4 white"}
      },
      {x: ["Evelyn", "Gong Gong", "Joy"], value: 2, name: "EVELYN & GONG GONG & JOY", desc: "All three feel<br>disappointed with how life with their family has<br>turned out. They carry a lot of pain. When<br>provoked, their first reaction is to be defensive.", img: "https://64.media.tumblr.com/26898dce6b50f42b71f5eb812711ac4b/0be52a7ec02dbcc3-e7/s640x960/9fba0cab704c6029974cc0eb13d15bbd632b40fd.gif",
       normal:   {stroke: "4 grey"},
       hovered:  {stroke: "4 white"},
       selected: {stroke: "4 white"}
      }
    ];

    // Create a chart and set the data
    chart = anychart.venn(data);
	
 	// Set labels settings
    chart
      .labels()
      .fontColor('#fff')
	  .fontSize('20px')
	  .fontFamily('Roboto Mono')
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
      .fontFamily('Roboto Mono')
      .useHtml(true)
      .titleFormat("<img height=150 img width=300 src={%Img}>")
      .format("{%Name}: {%Desc}");  

    // Disable the legend
    chart.legend(false);

    // Set the chart title
    chart
      .title()
      .enabled(true)
      .fontColor('#232122')
      .fontSize('20px')
      .fontFamily('Roboto Flex')
      .fontWeight('800')
      .text("Venn Diagram of the Wang Family Characters");
    
    // Set the container id
    chart.container('container');

    // initiate drawing the chart
    chart.draw();