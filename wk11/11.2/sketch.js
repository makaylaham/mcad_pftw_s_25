let rotateBy = 3;
let lineX1 = 0;
let lineX2 = 0;
let lineY1 = 0;
let lineY2 = 0;
ellipseSize = 0;
let r = 255;
let g = 255;
let b = 255;

function setup() {
  createCanvas(800, 800);
  background (0);
  angleMode (DEGREES);
}

function draw() {
  translate (600, 250);
  rotate(rotateBy);
  //redish lines
  stroke(255, 35, 71);
  line (80, 70, 135, lineY2 -=5);
  rotateBy += 3;
  //blue lines
  rotate(rotateBy + 3);
  stroke (4, 204, 226)
  line(lineX1 += 1, lineX2, lineY1, lineY2);
  //white circles
  rotate(rotateBy +9);
  stroke (r, g, b);
  noFill();
  ellipse (20, 20, ellipseSize += 1);
}

function mousePressed() {
  r = random(255);
  g = random(255);
  b = random(255);
}

function doubleClicked() {
  noLoop();
}