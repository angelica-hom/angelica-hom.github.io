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
      {x: "Evelyn", value: 12, name: "EVELYN", desc: "Hard-working", img: "https://media.giphy.com/media/WiCO2uZK05Klc1d28q/giphy.gif",
       normal:   {fill: "#d900ac 0.8", stroke: "4 grey"},
       hovered:  {fill: "#d900ac 0.5", stroke: "4 white"},
       selected: {fill: "#d900ac 0.5", stroke: "4 white"}
      },
      {x: "Joy", value: 6, name: "JOY", desc: "She feels like the black sheep of the family. Her<br>identities and her life choices go against her family's wishes:<br>dating women, having tattoos, dropping out of college. She gets<br>easily stressed and defensive with her family. She hardly calls or<br>visits because of the wall she's built up to protect<br>her emotions from her family's criticisms.", img: "https://media.giphy.com/media/Z9QebBL1jjkGToMLyk/giphy.gif",
       normal:   {fill: "#86c6fd 0.8", stroke: "4 grey"},
       hovered:  {fill: "#86c6fd 0.5", stroke: "4 white"},
       selected: {fill: "#86c6fd 0.5", stroke: "4 white"}
      },
      {x: "Waymond", value: 6, name: "WAYMOND", desc: "He's the only optimistic person in the family and<br>easily finds the positive side of things. His silliness comes off so<br>naive and weak that even his own family underestimates him. He<br>knows his goofiness is actually his strength that has held the<br>family together so far.", img: "https://media.giphy.com/media/YQPsWNwHjxFG8EAGsr/giphy.gif",
       normal:   {fill: "#009c98 0.8", stroke: "4 grey"},
       hovered:  {fill: "#009c98 0.5", stroke: "4 white"},
       selected: {fill: "#009c98 0.5", stroke: "4 white"}
      },
      {x: "Gong Gong", value: 6, name: "GONG GONG", desc: "He sees the world strictly as black-and-white<br> or right-and-wrong. It's hard for him to accept those who fall in <br>the grey area. He doesn't shy away from extreme situations<br>whether it's abandoning his daughter or saving his family from<br>being sucked into the bagel.", img: "https://m.media-amazon.com/images/M/MV5BYWVkNGFkYzQtZTJiZi00Y2Q0LTg5YmYtY2IzYjQ4OTJlY2NiXkEyXkFqcGdeQXVyMTIwODk1NTQ@._V1_.jpg",
       normal:	 {fill: "#7452aa 0.8", stroke: "4 grey"},
       hovered:  {fill: "#7452aa 0.5", stroke: "4 white"},
       selected: {fill: "#7452aa 0.5", stroke: "4 white"}
      },
      {x: ["Evelyn", "Joy"], value: 3, name: "EVELYN & JOY", desc: "They are both daughters that want to be fully<br>accepted by their parents. They feel so hurt by what their<br>parents have said or done over time that it has negatively affected<br>how they view themselves and their lives.", img: "https://media.giphy.com/media/dIf76fQGLFrtqMxYDC/giphy.gif",
       normal:   {stroke: "4 grey"},
       hovered:  {stroke: "4 white"},
       selected: {stroke: "4 white"}
      },
      {x: ["Evelyn", "Waymond"], value: 3, name: "EVELYN & WAYMOND", desc: "Parents, Spouses, Immigrants, Eager to please, Speaks Mandarin", img: "https://media.giphy.com/media/F1OVAmKz9hatMaMWUZ/giphy.gif",
       normal:   {stroke: "4 grey"},
       hovered:  {stroke: "4 white"},
       selected: {stroke: "4 white"}
      },
      {x: ["Evelyn", "Gong Gong"], value: 3, name: "EVELYN & GONG GONG", desc: "They have high expectations of their<br>family, which has caused strained relationships with their<br>daughters. They have a difficult time verbalizing their emotions<br>and processing their traumas. They both speak Cantonese.", img: "https://y.yarn.co/cd9336f1-1f2f-459f-8aff-9c2cafc978e6_thumb.jpg",
       normal:   {stroke: "4 grey"},
       hovered:  {stroke: "4 white"},
       selected: {stroke: "4 white"}
      },
      {x: ["Evelyn", "Gong Gong", "Joy"], value: 2, name: "EVELYN & GONG GONG & JOY", desc: "All three feel disappointed with<br>how life with their family has turned out. They carry a lot of pain.<br>When provoked, their first reaction is to be defensive.", img: "https://64.media.tumblr.com/26898dce6b50f42b71f5eb812711ac4b/0be52a7ec02dbcc3-e7/s640x960/9fba0cab704c6029974cc0eb13d15bbd632b40fd.gif",
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
      .titleFormat("<img height=200 img width=400 src={%Img}>")
      .format("{%Name}: {%Desc}");  

    // Disable the legend
    chart.legend(false);

    // Set the container id
    chart.container('container');

    // initiate drawing the chart
    chart.draw();