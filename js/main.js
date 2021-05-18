const blue_sky = {
    r: 93, 
    g: 229, 
    b: 250
};
let xs = [];
let ys = [];
let snows = 40;
let d = 10;
let cat1;

function get_random(min, max) {
	return Math.random() * (max - min) + min;
}

// function preload() {
// 	cat1 = loadImage('../images/cat1.png');
// }
  
function setup() {
	createCanvas(innerWidth, innerHeight);
	background(blue_sky.r, blue_sky.g, blue_sky.b);
	cat1 = loadImage('../images/cat1.png');

	
	
	for (i = 0; i < snows; i += 1) {
		xs[i] = get_random(0, width);
		ys[i] = get_random(0, height);
	}

	

}

function draw() {

	/* snow*/
	background(blue_sky.r, blue_sky.g, blue_sky.b);
	for (i = 0; i < snows; i += 1) {
		if (ys[i] > height) {
			ys[i] = 0;
		} else {
			ys[i] += 3;
		}
		strokeWeight(0);
		ellipse(xs[i],ys[i],d);

	}
	fill(255,255,255);

	image(cat1, 0, 0);
}

