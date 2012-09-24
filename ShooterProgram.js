var x = 200;
var y = 320;
var dx = 2;
var dy = 3;
var time = 10;
var canvas;
var ctx;
var xpos;
var ypos;
var radius;
var color;
var choice = "blue";
var timerId = 0;

canvas = document.getElementById('game')

canvas.onclick = function(event) {

    canvas = document.getElementById('game');
    if (choice = "blue") {
        x = 300
        y = 640 - 100 + 20
    }
    else if (choice = "red") {
        x = 100
        y = 640 - 100 + 20
    }
    var mouseX = event.x;
	var mouseY = event.y;
	
	var slope = (mouseY - y) / (mouseX - x);
		
	dx = dy / slope;
	
    timerId = setInterval(shoot, time)
}

function ball(xpos, ypos, radius) {
    if (choice = "blue") {
        color = "blue";
    }
    if (choice = "blue") {
        color = "blue";
    }
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(xpos, ypos, radius, 0, Math.PI * 2, true);
    ctx.fill();
}


function shoot() {
    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
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

    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(100, 640, 100, 0, Math.PI, true);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(300, 640, 100, 0, Math.PI, true);
    ctx.fill();
    
    }
