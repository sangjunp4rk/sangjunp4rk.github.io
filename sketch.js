function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

/**
Draw the clock as pies. Colors indicate if it is
AM or PM. AM has redish/yellowish color and PM has blueish color.
*/
function draw() {
	background(225);

	let start_angle = radians(-90);

	let is_am = true;
	let h_val = hour();
	if (h_val > 12) {
		is_am = false;
		h_val = h_val - 12;
	}

	if (is_am) {
		fill(247, 220, 111);
	} else {
		fill(36, 113, 163);
	}
	let h = radians(map(h_val, 0, 12, -90, 270));
	arc(400, 300, 400, 400, start_angle, h);

	if (is_am) {
		fill(243, 156, 18);
	} else {
		fill(93, 173, 226);
	}
	let m = radians(map(minute(), 0, 60, -90, 270));
	arc(400, 300, 300, 300, start_angle, m);

	if (is_am) {
		fill(231, 76, 60);
	} else {
		fill(174, 214, 241);
	}
	let s = radians(map(second(), 0, 60, -90, 270));
	arc(400, 300, 200, 200, start_angle, s);
}

