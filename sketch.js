let img; // Declare variable 'img'.

function setup() {
  let pollen_canvas = createCanvas(windowWidth, windowHeight);
  pollen_canvas.position(0,0);
  trianglepollen = loadImage('images/trianglepollen.png'); // Load the image
  yellowpollen = loadImage('images/yellowpollen.png'); // Load the image
  greenpollen = loadImage('images/greenpollen.png'); // Load the image
  spikepollen = loadImage('images/spikepollen.png'); //Load the image

}

function draw() {
  //Drawing the pollen pieces randomly across the screen
  let x = floor(random(windowWidth));
  let y = floor(random(windowHeight));

  let pollenpicker = int(random(0,4));

  let resize = random(2,7);
  if (pollenpicker === 1){
    rotate(random(0,6.25));
    image(trianglepollen, x, y, trianglepollen.width / resize, trianglepollen.height / resize);
  } else if (pollenpicker === 2) {
    rotate(random(0,6.25));
    image(yellowpollen, x, y, yellowpollen.width / (resize+1), yellowpollen.height / (resize+1));
  } else if (pollenpicker === 0) {
    rotate(random(0,6.25));
    image(greenpollen, x, y, greenpollen.width / resize, greenpollen.height / resize);
  } else {
    rotate(random(0,6.25));
    image(spikepollen, x, y, spikepollen.width / (resize+4), spikepollen.height / (resize+4));
  }

	//imageDrawing(mouseX, mouseY, pmouseX, pmouseY);
}

// The simple method variableEllipse() was created specifically
// for this program. It calculates the speed of the mouse
// and draws a small ellipse if the mouse is moving slowly
// and draws a large ellipse if the mouse is moving quickly

function variableEllipse(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  strokeWeight(10);
  stroke(255, 194, 14);
  fill(255, 194, 14);
  ellipse(x, y, speed, speed);
}

function imageDrawing(x, y, px, py) {
  image(img, x, y, img.width / 2, img.height / 2);
}