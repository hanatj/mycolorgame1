var squares = document.querySelectorAll(".square");
var colors = generateColors(6);
var target = Math.floor(Math.random()*6);
var message = document.querySelector("#message");
var resetBtn = document.querySelector("#reset");
var h2 = document.querySelector("h2");
var ezBtn = document.querySelector("#ezBtn");
var hardBtn = document.querySelector("#hardBtn");
var header = document.querySelector("header");

h2.textContent = colors[target];
changeColors();

ezBtn.addEventListener('click', function () {
	this.classList.add("selected");
	hardBtn.classList.remove("selected");
	for (var i = 3; i < squares.length; i++) {
		squares[i].style.display = "none";
	}
	colors = generateColors(3);
	target = Math.floor(Math.random()*3);
	reset();
});

hardBtn.addEventListener('click', function () {
	this.classList.add("selected");
	ezBtn.classList.remove("selected");	
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.display = "block";
	}
	colors = generateColors(6);
	target = Math.floor(Math.random()*6);
	reset();

});

for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener('click', function (e) {
		if (this == squares[target]) {
			message.textContent = "Correct";
			for (var j = 0; j < squares.length; j++) {
				squares[j].style.backgroundColor = colors[target];
				document.querySelector("header").style.backgroundColor = colors[target];
				resetBtn.textContent = "Play Again?";
			}					
		}else{	
			message.textContent = "Try Again"
			this.style.backgroundColor = "#232323";
		}
	});
}

resetBtn.addEventListener('click', function (e) {
	reset();
});

function reset(){
	colors = generateColors(colors.length);
	target = Math.floor(Math.random()*colors.length);
	changeColors();
	h2.textContent = colors[target];
	header.style.backgroundColor = "steelblue";
	message.textContent= "";
	resetBtn.textContent= "New Color";
}
function changeColors(){
	for (var i = 0; i < colors.length; i++) {
	squares[i].style.backgroundColor = colors[i];	
}}

function generateColors(n){
	var res = [];
	for (var i = 0; i < n; i++) {
		res.push("rgb("+ Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256)+")");
	}
	return res;
}