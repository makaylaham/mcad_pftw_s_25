const myCard = [];
let startingX = 50;
let startingY = 200;
let width = 75;
let height = 100;
let gap = 25;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  noLoop();
  background('aquamarine');
  // j loop is for the rows vertically
  for (let j = 0; j < 2; j++) {
    // i loop is for the columns horizontically
    for (let i = 0; i < 7; i++) {
      rect(startingX, startingY, width, height);
      startingX = startingX + width + gap;
    }
    startingY = startingY + height + gap;
    startingX = 50;
  }
}

// function mousePressed () {
//   if (
//     mouseX > myCard.x
//     &&
//     mouseX < myCard.x + myCard.width
//     &&
//     mouseY > myCard.y
//     &&
//     mouseY < myCard.y + myCard.height
//   ) {
//     console.log ("clicked card")
//   } else {
//     console.log ("clicked outside of card")
//   }
// }