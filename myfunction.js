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


var startAnimation = false;
var circleId; // Making sure all animations use same circleId and pos
var pos = 0;
var reverse = false;
var posNum = 350;
// function which starts an animation on the circles
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
		if(!reverse){ // checks if reverse is false which it is and then adds 1 to position every frame
			pos++;
		}else{
			pos--; // opposite of above ^
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
		
		if (pos === 350 || pos === 0){ //checks for position value then reverses the reverse function (from either true or false)
			reverse = !reverse;
		}
		
	}
	
}

// adds a click event listener to any element after the fact it add/deletes a class of said element.
flicker.addEventListener('click', () => {
	if (flicker.classList[0] == 'smallbox')
		flicker.classList.replace('smallbox', 'bigbox');
	else
		flicker.classList.replace('bigbox', 'smallbox');
	
})




// hello stinky


console.log(flicker.className);