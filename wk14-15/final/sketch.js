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
let cardObjectArray = [];
let cardback;


function preload() {
  cardback = loadImage('images/card cover.png');
//   cardfaceArray = [
//     loadImage('images/apple.jpg'),
//     loadImage('images/clock.png'),
//     loadImage('images/duck.jpg'),
//     loadImage('images/pencil.jpg'),
//     loadImage('images/piano.jpg'),
//     loadImage('images/printer.jpg'),
//     loadImage('images/raincoat.png')
//   ]
// }
cardObjectArray = [
  {
    imageA: loadImage('images/apple.jpg'),
    imageB: loadImage('images/apple-german.png'),
    match: "apple",
    // sound: loadSound('sounds/apple.mp3')

  },
  {
    imageA: loadImage('images/clock.png'),
    imageB: loadImage('images/clock-german.png'),
    match: "clock",
    // sound: loadSound('sounds/piano.mp3')

  },
  {
    imageA: loadImage('images/piano.jpg'),
    imageB: loadImage('images/piano-german.png'),
    match: "piano",
    // sound: loadSound('sounds/piano.mp3')

  },
  {
    imageA: loadImage('images/duck.jpg'),
    imageB: loadImage('images/duck-german.png'),
    match: "duck",
    // sound: loadSound('sounds/piano.mp3')

  },
  {
    imageA: loadImage('images/pencil.jpg'),
    imageB: loadImage('images/pencil-german.png'),
    match: "pencil",
    // sound: loadSound('sounds/piano.mp3')

  },
  {
    imageA: loadImage('images/printer.jpg'),
    imageB: loadImage('images/printer-german.png'),
    match: "printer",
    // sound: loadSound('sounds/piano.mp3')

  },
  {
    imageA: loadImage('images/raincoat.png'),
    imageB: loadImage('images/raincoat-german.png'),
    match: "raincoat",
    // sound: loadSound('sounds/piano.mp3')

  }
]
}


function setup() {
  createCanvas(1500, 800);

  let selectedFaces = [];
  for (let z = 0; z < 7; z++) {
    const randomIdx = floor(random(cardObjectArray.length));
    // const face = cardfaceArray[randomIdx];
    const selectedObject = cardObjectArray[randomIdx]
    console.log(selectedObject)
    selectedFaces.push(
      {
        image: selectedObject.imageA, 
        matchKey: selectedObject.match, 
        // sound: selectedObject.sound
      }
  );
    selectedFaces.push(
      {
        image: selectedObject.imageB, 
        matchKey: selectedObject.match, 
        // sound: selectedObject.sound
      }
    );
    cardObjectArray.splice(randomIdx, 1);
  }
  selectedFaces = shuffleArray(selectedFaces);
  myCard = new Card();
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 7; i++) {
      const faceImage = selectedFaces.pop();
      cards.push(new Card(
        startingX, 
        startingY, 
        faceImage.image,
        faceImage.matchKey,
        faceImage.sound
      ));
      startingX += 210;
      // console.log(startingX);
  }
  startingY += 200;
  startingX = 60;
  
  }
}

function draw () {
  background('black');
  fill('white');
  textSize(70);
  strokeWeight(2);
  text('German Vocabulary / Deutsches Vokabelspiel', 35, 120);
  if (gameState.numMatched === gameState.totalPairs) {
  fill('yellow');
  strokeWeight(0);
  textSize(56);
  text('Congrats! You are a winner!', 400, 200);
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
  text('Corret / Richtig: ' + gameState.numMatched, 280, 700);
  text('Attempts / Versuchen: ' + gameState.attempts, 900, 700);
  stroke('white');
  strokeWeight(5);
  noFill();
  rect(260, 663, 325, 50);
  rect(880, 663, 425, 50);
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
    if (gameState.flippedCards[0].matchKey === gameState.flippedCards[1].matchKey) {
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
  constructor (x, y, cardFaceImg, matchKey, sound) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 150;
    this.face = DOWN;
    this.cardFaceImg = cardFaceImg;
    this.isMatch = false;
    this.sound = sound;
    this.matchKey = matchKey
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


