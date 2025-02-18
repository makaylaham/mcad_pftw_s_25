let rectX = 0;
const rectHeight = 75;
let rectY;
const rectWidth = 75;

let clickCount = 0;

let speed;


function setup() {
  createCanvas(500, 500);
  rectY = random(height - rectHeight);
  speed = random(1, 3);
}

function draw() {
  background('rosybrown');
  drawShape();
  rectX += speed;
  fill('azure');
  textSize(20);
  if(rectX > width) {
    noLoop();
    text('You have successfully clicked ' + clickCount + ' times!', 75, 200);
  }
}



function mousePressed() {
  if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
    clickCount++;
    console.log ('hit', clickCount);
  }
}

function drawShape () {
  fill('lightskyblue');
  strokeWeight(0);
  rect(rectX, rectY, rectWidth, rectHeight);
}