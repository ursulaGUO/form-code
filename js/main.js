const blue_sky = {
    r: 93, 
    g: 229, 
    b: 250
};

let startx = 30, starty = 40;
let dx = 0, dy = 0;
let t = 0;
let vx = 0.2, vy = 0;
let a = 0.01;



function setup() {
	createCanvas(innerWidth, innerHeight);
	background(blue_sky.r, blue_sky.g, blue_sky.b);

	pg = createGraphics(innerWidth, innerHeight);
  	textSize(20);
  	textAlign(CENTER, CENTER);
	

}

function draw() {
	background(0, 0, 0);
	stroke(0);
	strokeWeight(2);


	fill(255);
	text("Click to start painting with bouncing ball!", width / 2, 30);

	fill(255);
	ellipse(startx,starty,10, 10);

	

	startx += vx * t;
	vy = vy + a * t;
	starty += vy * t + 1/2 * a * t * t;

	if (starty > innerHeight) {
		vy = - vy;
	} 

	t += 0.1;

	pg.translate(0,0);
  	pg.stroke(blue_sky.r, blue_sky.g, blue_sky.b);
	pg.strokeWeight(4);
	//pg.noFill();
  	pg.point(startx, starty);

	image(pg,0,0);
}
