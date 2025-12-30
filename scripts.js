function resize_sim() {
	var w = window.innerWidth  
	var h = window.innerHeight
	const canvas3 = document.getElementById("canvas")
	
	if (w < h*1.7777777){
		if (w < 1281) {
		  canvas3.style.width = w*0.95+"px"
		  canvas3.style.height = "auto"
		} else {
		  canvas3.style.width = "1280px"
		  canvas3.style.height = "720px"
		}
	} else {
		if (h < 721) {
		  canvas3.style.width = h*1.77*0.95+"px"
		  canvas3.style.height = "auto"
		} else {
		  canvas3.style.width = "1280px"
		  canvas3.style.height = "720px"
		}
	}
	myCanvas.width = window.innerWidth;
	myCanvas.height = window.innerWidth/1000*100;	
	const c = document.getElementById("myCanvas");
	const ctx = c.getContext("2d");
	ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
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
		
}

function resize_sim_full() {
	var w = window.innerWidth  
	var h = window.innerHeight
	const canvas3 = document.getElementById("canvas")
	if (w < h*1.7777777){
		  canvas3.style.width = w*0.95+"px"
		  canvas3.style.height = "auto"
	} else {
		  canvas3.style.width = h*1.77*0.95+"px"
		  canvas3.style.height = "auto"
	}			
}
