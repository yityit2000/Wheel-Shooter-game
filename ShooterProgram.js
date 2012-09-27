var x = 200;
var y = 320;
var dx = 2;
var dy = 3;
var time = 10;
var xpos;
var ypos;
var radius;
var color;
var timerId = 0;
var i
var j
var 
balls = new Array()


//Choice determines which color ball will be fired, and from where on the canvas.
choice = "blue"

// Calls on the canvas 'game' as referenced in WheelShooter.html document, and calls it canvas.
canvas = document.getElementById('game')
ctx = canvas.getContext('2d');

// When the user hits a button on the keyboard, the variable "choice" is switched
// between red and blue (for now)
document.onkeypress = function(change){
	if (choice == "blue"){
	  choice = "red";
	
	}
	else if (choice == "red"){
	  choice = "blue"
	}
	draw();
	}

// When the use clicks the mouse on the canvas, a ball will come from the bottom of
// the canvas to the top, based on the mouse's coordinates during the click. "dy"
// stays constant, and dx is calculated using the slope from mouseX and mouseY. Color
// and starting position of ball is determined by "choice".
canvas.onclick = function(event) {
	
	
	// Starts from blue hemisphere
    if (choice == "blue") {
        x = 300
        y = 640 - 100 + 20
    }
    // Starts from red hemisphere
    if (choice == "red") {
        x = 100
        y = 640 - 100 + 20
    }
    
    // Grabs click's coordinates on canvas
    var mouseX = event.x;
	var mouseY = event.y;
	
	var slope = (mouseY - y) / (mouseX - x);
			
	dx = dy / slope;
	
	// Animates the shooting ball. Cleared when ball exits the canvas.
    timerId = setInterval(shoot, time)
}

function ball(xpos, ypos, radius) {
	// Duh.
    if (choice == "blue") {
        color = "blue";
    }
    if (choice == "red") {
        color = "red";
    }
    ctx.beginPath();
    // Consider doing away with "color" and just make ctx.fillStyle = choice
    ctx.fillStyle = color;
    ctx.arc(xpos, ypos, radius, 0, Math.PI * 2, true);
    ctx.fill();
}

// While ball is still in the canvas, ball will be drawn and its coordinates will
// be changed by dx and dy for every "time" interval. When it leaves, the interval
// is cleared.
function shoot() {
    if (x < 420) {
        ctx.clearRect(0, 0, 400, 640);
        draw()
        ball(x, y, 20);
		
        x = x - dx;
        y = y - dy;

    }

    if (x >= 420 || y >= 660 || x <= -25 || y <= -25) {
        clearInterval(timerId)
    }

}


function draw() {
	// Base of the game. Two hemispheres of different colors on the bottom of the
	// canvas, and a box dictating which color is selected ("choice")
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(100, 640, 100, 0, Math.PI, true);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(300, 640, 100, 0, Math.PI, true);
    ctx.fill();
    
    if (choice == "blue") {
    ctx.strokeRect(290,620,20,20)
    }
	if (choice == "red") {
    ctx.strokeRect(90,620,20,20)
    }
    
    }
