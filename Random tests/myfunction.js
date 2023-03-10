 // sets a new date then changes the element pdate to the current date.
const date = new Date().toDateString(); // converts the date variable to a data string date.
document.getElementById("pdate").innerHTML = date;

 //changes the display from flex to none and vice versa.
var flicker = document.getElementById("flicker");
function hide() {
	if (flicker.style.display === "none") {
	flicker.style.display = "flex";
	} else {
	flicker.style.display = "none";
	}
}


// makes 3 variables r g b and sets them to a random number between 0 and 255 then sets the flicker background color to said variables.
function Color(){
	var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    flicker.style.backgroundColor = `rgb(${r},${g},${b})`;
}

// a timer function which does 10 cycles every 1s
function randomColor(){
	var i = 0;
	var timer = 1000;
	while(i < 10){
		setTimeout(Color,timer);
		i++;
		timer += 1000;
	}
}

var ballspeed = 1;
var startAnimation = false;
var circleId; // Making sure all animations use same circleId and pos
var pos = 0;
var reverse = true;
var posNum = 150;
// function which starts an animation on the circles

function changeSpeed(){
	ballspeed = Math.abs(parseInt(document.getElementById('ballspeed').value));
}

function moveMe(){
	
	const circle = document.getElementById("flcircle");
	const circle1 = document.getElementById("flcircle2");
	const circle2 = document.getElementById("flcircle3");
	const circle3 = document.getElementById("flcircle4");
	
	//Check if animation started or not
	if (!startAnimation){ // if it hasn't started (startAnimation is false)
		circleId = setInterval(frame, 1); // Start animation
		startAnimation = true; 
	}else{ // if it started (startAnimation is true)
		clearInterval(circleId); // Stop animaation
		startAnimation = false;
	}
	

	function frame(){
		if (pos === posNum || pos === 0 || pos + ballspeed > posNum || pos - ballspeed < 0)
			reverse = !reverse;

		if(!reverse ){ // checks if reverse is false and then adds ballspeed to position every frame
			if (pos + ballspeed <= posNum)
				pos += ballspeed;
			else
				pos = 0
		}else{
			if (reverse && pos - ballspeed >= 0)
				pos -= ballspeed;
			else
				pos = 0 // opposite of above ^
		}
		//changes the style of circles by adding position number to their coordinate
		//either top left bottom or right depending on circle
		//adding two directions makes the circle go diagnal.
		circle.style.top = pos + "px";
		circle.style.left = pos + "px";
		circle1.style.top = pos + "px";
		circle1.style.right = pos + "px";
		circle2.style.bottom = pos + "px";
		circle2.style.left = pos + "px";
		circle3.style.bottom = pos + "px";
		circle3.style.right = pos + "px";
		
	}
	
}

// adds a click event listener to the flicker element that adds/deletes a class of said element.
// it also changes the max position the animated circles can move to.
flicker.addEventListener('click', () => {
	if (flicker.classList[0] == 'smallbox')
		flicker.classList.replace('smallbox', 'bigbox');
	else
		flicker.classList.replace('bigbox', 'smallbox');
	

	if(posNum === 150)
		posNum = 350;
	else
		posNum = 150;
		
	if (pos >= 149)
		pos = 149;
		
})


let hamButton = document.getElementById("hamburger-button");
let hamIcon = document.getElementById("hamburger-icon");
let hamMenu = document.getElementById("hamburger-menu")

function changeIcon(){
	if (hamIcon.src.includes("assets/Hamburger_icon_closed.png")){
		hamIcon.src = "assets/Hamburger_icon_open.png";
	}else{
		hamIcon.src = "assets/Hamburger_icon_closed.png";
	}
}

function toggleHamburger(){
	hamMenu.classList.toggle("none")
}

