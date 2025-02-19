let startingX = 50;
let startingY = 100;
const cardWidth = 75;
const cardHeight = 100;

let myCards = [];
let startingId = 0;


function setup() {
  createCanvas(1000, 500);
  // rect(startingX, startingY, cardWidth, cardHeight);
  // for (let i = 0; i < 4; i++){
  //   rect(startingX, startingY, cardWidth, cardHeight);
  //   myCard.push({ x: startingX, y: startingY});
  //   startingX += 150;
  // }
}

function draw() {
  background('Aquamarine');
  drawCard();
}

function drawCard() {
  fill('DarkCyan');
  // rect (startingX, startingY, cardWidth, cardHeight);
  for (let i = 0; i < 4; i++){
      rect(startingX, startingY, cardWidth, cardHeight);
      myCard.push({ x: startingX, y: startingY});
      startingX += 150;
    }
}

function mousePressed() {
  if ((mouseX >= startingX && mouseX <= startingX + cardWidth) && (mouseY >= startingY && mouseY <= startingY + cardHeight));
  // clickCount ++;
  // console.log ('Mouse Pressed', mouseX, mouseY, clickCount);
}