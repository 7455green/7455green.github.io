let appHeader = `
    <nav>
        <div class="header">
		  <img src="/web_logo_text.png" alt="logo" />
		</div>        
		<div class="header_buttons">
		  <button class = "main_button" onclick="location.href='/index.html';" >Simulations</button>
		  <button class = "main_button" onclick="location.href='/index_edexcel.html';" >Simulations (Edexcel sorted)</button>
		  <button class = "main_button" onclick="location.href='/about.html'>About</button>
		</div>
    </nav>
`;
document.getElementById("app-header").innerHTML = appHeader;