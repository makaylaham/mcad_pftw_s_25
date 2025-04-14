let d=0;

function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
  fill(0,0,random(0,255), 50);
  circle(random(width), random(height), d)
  d += .25
}

function mousePressed() {
  noLoop();
}