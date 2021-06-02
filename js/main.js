/* by Ursula Guo*/


/*This program simulates free falling balls with initial horizontal
velocity, symbolizing many lives of highs and lows*/

/*For ideal visuals, please make more than 10 random clicks on the 
canvas*/


let t = 0;
let vx = 0.2, vy = 0;
let a = 0.012;
let balls_x;
let balls_y;
let start_x;
let start_y;
let balls_vx;
let balls_vy;
let time;
let points;
let turn = 0;
let r;
let b;



function setup() {
	createCanvas(innerWidth, innerHeight);
	background(0,0,0);

	points = [];

	pg = createGraphics(innerWidth, innerHeight);
  	textSize(20);
  	textAlign(CENTER, CENTER);

	balls_x = [];
	balls_y = [];
	start_x = [];
	start_y = [];
	balls_vx = [];
	balls_vy = [];
	time = [];
	
}

function draw() {
	background(0, 0, 0);
	stroke(0);
	strokeWeight(2);


	

	if (balls_x.length == 0) {
		fill(178,34,34);
		text("Click to start painting with bouncing balls!", width / 2 , height / 2 - 60);
		fill(178,34,34);
		text("Art Name:", width / 2, height / 2);
		

		fill(0,0,0);
		stroke(52,96,96);
		text("Bloody bouncing lives", width / 2 + 18, height / 2 + 48);
		fill(0,0,0);
		stroke(255,255,255);
		text("Bloody bouncing lives", width / 2 + 12, height / 2 + 42);
		fill(0,0,0);
		stroke(255,102,102);
		text("Bloody bouncing lives", width / 2 + 6, height / 2 + 36);
		fill(255,0,0);
		stroke(0);
		text("Bloody bouncing lives", width / 2, height / 2 + 30);
	}
	
	for (i = 0; i < balls_x.length; i++) {
		fill(255);
		ellipse(balls_x[i],balls_y[i],10, 10);
		balls_x[i] += balls_vx[i] * time[i]; //x
		balls_vy[i] += a * time[i];
		balls_y[i] += balls_vy[i] * time[i] + 1/2 * a * time[i] * time[i];

		if (balls_y[i] > innerHeight) {
			balls_vy[i] = - balls_vy[i];
		}

		time[i] += 0.01;

		r = map(start_x[i], 0, width, 30, 255);
		b = map(start_y[i], 0, height, 0, 155);

		pg.stroke(r, b, b);
		pg.strokeWeight(4);
  		pg.point(balls_x[i], balls_y[i]);
		image(pg,0,0);
	}
  	
}


function mousePressed() {
	balls_x.push(mouseX);
	balls_y.push(mouseY);
	start_x.push(mouseX);
	start_y.push(mouseY);
	if (turn % 2 != 0) {
		balls_vx.push(0.2);
	} else {
		balls_vx.push(- 0.2);
	}
	turn += 1;
	balls_vy.push(0);
	time.push(0);
}
