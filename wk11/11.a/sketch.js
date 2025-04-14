let x=random(20)
let y=random(20)
let d=random(20)

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  translate(175, 200)
  for (let x = 0; x < 200; x ++);
  for (let y = 0; y < 200; y ++);
  for (let d = 0; d < 200; d ++);
  noStroke();
  fill(random(100, 255, 100), random(100, 255, 100), random(100, 255, 100));
  circle (random(90), random(10), random(40));
}

function mousePressed() {
  noLoop();
}