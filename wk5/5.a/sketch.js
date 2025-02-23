// let myCard;
const DOWN = 'down';
const UP = 'up';
let startingX = 60;
let startingY = 250;
let cards = [];
const gameState = {
  totalPairs: 7,
  flippedCards: [],
  numMatched: 0, 
  attempts: 0,
  waiting: false
};
let cardfaceArray = [];
let cardback;


function preload() {
  cardback = loadImage('images/cardback.png');
  cardfaceArray = [
    loadImage('images/candy1.png'),
    loadImage('images/candy2.png'),
    loadImage('images/candy3.png'),
    loadImage('images/candy4.png'),
    loadImage('images/candy5.png'),
    loadImage('images/candy6.png'),
    loadImage('images/candy7.png')
  ]
}

function setup() {
  createCanvas(1500, 800);

  let selectedFaces = [];
  for (let z = 0; z < 7; z++) {
    const randomIdx = floor(random(cardfaceArray.length));
    const face = cardfaceArray[randomIdx];
    selectedFaces.push(face);
    selectedFaces.push(face);
    cardfaceArray.splice(randomIdx, 1);
  }
  selectedFaces = shuffleArray(selectedFaces);
  myCard = new Card();
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 7; i++) {
      const faceImage = selectedFaces.pop();
      cards.push(new Card(startingX, startingY, faceImage));
      startingX += 210;
      // console.log(startingX);
  }
  startingY += 200;
  startingX = 60;
  
  }
}

function draw () {
  background('CornFlowerBlue');
  if (gameState.numMatched === gameState.totalPairs) {
    fill('yellow');
    strokeWeight(0);
    textSize(46);
    text('Congrats! You have won the Sweet Treats Matching Game!', 60, 175);
    noLoop();
  }
  for (let k = 0; k < cards.length; k++) {
    if (!cards[k].isMatch) {
      cards[k].face = DOWN;
    }
    cards[k].show();
  }
  noLoop();
  gameState.flippedCards.length = 0;
  gameState.waiting = false;
  fill('white');
  strokeWeight(0);
  textSize(36);
  text('ATTEMPTS: ' + gameState.attempts, 400, 700);
  text('MATCHES: ' + gameState.numMatched, 100, 700);
  stroke('white');
  strokeWeight(3);
  noFill();
  rect(60, 663, 1360, 50)
  line(360, 663, 360, 710)
}

function mousePressed () {
  if (gameState.waiting) {
    return;
  }
  for (let k = 0; k < cards.length; k++) {
    if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
      console.log('flipped', cards[k]);
      gameState.flippedCards.push(cards[k]);
    }
  }
  if (gameState.flippedCards.length === 2) {
    gameState.attempts++;
    if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
      gameState.flippedCards[0].isMatch = true;
      gameState.flippedCards[1].isMatch = true;
      gameState.flippedCards.length = 0;
      gameState.numMatched++;
      loop();
    } else {
      gameState.waiting = true;
      const loopTimeout = window.setTimeout(() => {
        loop();
        window.clearTimeout(loopTimeout);
      }, 1000)
    }
  }
}

class Card {
  constructor (x, y, cardFaceImg) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 150;
    this.face = DOWN;
    this.cardFaceImg = cardFaceImg;
    this.isMatch = false;
    this.show();
  }
  show () {
    if (this.face === UP || this.isMatch) {
    fill('white');
    stroke('white');
    strokeWeight(3);
    rect(this.x, this.y, this.width, this.height);
    image(this.cardFaceImg, this.x, this.y+25, 100, 100);
    } else {
    stroke('white');
    strokeWeight(3);
    rect(this.x, this.y, this.width, this.height);
    image(cardback, this.x, this.y, 100, 150,);    
    }
    
  }
  didHit (mouseX, mouseY) {
    if (mouseX >= this.x && mouseX <= this.x + this.width && 
        mouseY >= this.y && mouseY <= this.y + this.height){
          this.flip();
        return true;
      } else {
        return false;
      }
  }
  flip () {
    if (this.face === DOWN) {
      this.face = UP;
    } else {
      this.face = DOWN;
    }
    this.show();
  }
}

function shuffleArray (array) {
  let counter = array.length;
  while (counter > 0) {
    const idx = Math.floor(Math.random() * counter);
    counter--;
    const temp = array[counter];
    array[counter] = array[idx];
    array[idx] = temp;
  }
  return array;
}


