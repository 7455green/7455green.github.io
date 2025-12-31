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

var image2 = document.createElement("img");

image2.onload = function () {
    ctx.drawImage(image2,myCanvas.width/3.5,0,myCanvas.width/2.5,myCanvas.width/10);
}
image2.src = '/web_logo_text.png';

c.style.width = window.innerWidth+"px";
c.style.height = window.innerWidth/10+"px";