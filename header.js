let headercontent = `
    <nav>
		<canvas id="myCanvas" width="3000px" height="300px"></canvas>
		
		
		<div class="header_buttons">
		  <button class = "main_button" onclick="location.href='/index.html';" >Simulations</button>
		  <button class = "main_button" onclick="location.href='/index_edexcel.html';" >Simulations (Edexcel sorted)</button>
		  <button class = "main_button" onclick="location.href='/about.html';">About</button>
		</div>
    </nav>
`;
document.querySelector('#myHeader').insertAdjacentHTML('beforeend', headercontent);

const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");
ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--header_color1');
ctx.fillRect(0, 0, myCanvas.width, myCanvas.height/5); 
ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--header_color2');
ctx.fillRect(0, myCanvas.height/5, myCanvas.width, myCanvas.height*4/5); 
ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--header_color3');
ctx.fillRect(0, myCanvas.height*4/5, myCanvas.width, myCanvas.height);
ctx.font = "expanded bold 120px Arial Rounded MT";
ctx.lineWidth = 8;
ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--header_color_title_ol');
ctx.strokeText("View-Physics",1300,170);
ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--header_color_title');
ctx.fillText("View-Physics",1300,170);
ctx.font = "40px Arial Rounded MT";
ctx.lineWidth = 8;
ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--header_color_title_ol');
ctx.strokeText("Physics interactives for teaching",1340,225);
ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--header_color_title');
ctx.fillText("Physics interactives for teaching",1340,225);

var image2 = document.createElement("img");

image2.onload = function () {
    ctx.drawImage(image2,myCanvas.width/3,0,myCanvas.width/10,myCanvas.width/10);
	c.style.width = document.body.clientWidth+"px";
	c.style.height = document.body.clientWidth/10+"px";
}
image2.src = '/web_logo.png';

window.onload = function () {
  c.style.width = document.body.clientWidth+"px";
  c.style.height = document.body.clientWidth/10+"px";
}

