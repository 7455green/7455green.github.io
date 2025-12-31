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
	const c = document.getElementById("myCanvas");
	c.style.width = window.innerWidth+"px";
	c.style.height = window.innerWidth/10+"px";
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

function resize_menu() {
	const c = document.getElementById("myCanvas");
	c.style.width = window.innerWidth+"px";
	c.style.height = window.innerWidth/10+"px";
}
