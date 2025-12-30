let headercontent = `
    <nav>
		<canvas id="myCanvas" width="1000px" height="100px"></canvas>
		
		
		<div class="header_buttons">
		  <button class = "main_button" onclick="location.href='/index.html';" >Simulations</button>
		  <button class = "main_button" onclick="location.href='/index_edexcel.html';" >Simulations (Edexcel sorted)</button>
		  <button class = "main_button" onclick="location.href='/about.html';">About</button>
		</div>
    </nav>
`;
document.querySelector('#myHeader').insertAdjacentHTML('beforeend', headercontent);


myCanvas.width = window.innerWidth;
myCanvas.height = window.innerWidth/1000*100;
const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");
ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--header_color1');
ctx.fillRect(0, 0, myCanvas.width, myCanvas.height/3); 
ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--header_color2');
ctx.fillRect(0, myCanvas.height/3, myCanvas.width, myCanvas.height*2/3); 
ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--header_color3');
ctx.fillRect(0, myCanvas.height*2/3, myCanvas.width, myCanvas.height); 

var image2 = document.createElement("img");

image2.onload = function () {
    ctx.drawImage(image2,myCanvas.width/3.5,0,myCanvas.width/2.5,myCanvas.width/10);
}
image2.src = '/web_logo_text.png';