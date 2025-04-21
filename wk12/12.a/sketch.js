var button;

function setup() {
  createCanvas(600, 600);
  background(220);

  moo = loadSound("./sounds/mixkit-cow-moo-in-the-barn-1751.mp3");
  meow = loadSound("./sounds/mixkit-sweet-kitty-meow-93.mp3");
  bark = loadSound("./sounds/mixkit-medium-size-angry-dog-bark-54.mp3");
  chirp = loadSound("./sounds/mixkit-double-little-bird-chirp-21.mp3");
  cricketSound = loadSound("./sounds/mixkit-cricket-chirp-1927.mp3");
}

function draw() {
  cow();
  cat();
  dog();
  crickets();
  bird();
}

function cow() {
  button = createImg("./imgs/cow-with-wheat-in-mouth.png");
  button.position (50, 50);
  button.size (125, 100);
  button.mousePressed(mooPlay);
  noLoop();
}
function cat() {
  button = createImg("./imgs/pngtree-adorable-blue-cat-sit-on-the-floor-in-hand-drawn-style-png-image_6965434.png");
  button.position (275, 155);
  button.size (125, 100);
  button.mousePressed(meowPlay);
  noLoop();
}
function dog() {
  button = createImg("./imgs/pngtree-cute-cartoon-dog-png-file-png-image_10235707.png");
  button.position (50, 325);
  button.size (125, 100);
  button.mousePressed(barkPlay);
  noLoop();
}
function crickets() {
  button = createImg("./imgs/Adobe Express - file.png");
  button.position (300, 400);
  button.size (125, 100);
  button.mousePressed(cricketSoundPlay);
  noLoop();
}
function bird() {
  button = createImg("./imgs/Adobe Express - file (1).png");
  button.position (450, 100);
  button.size (125, 100);
  button.mousePressed(chirpPlay);
  noLoop();
}

function mooPlay() {
  moo.play();
}
function meowPlay() {
  meow.play();
}
function barkPlay() {
  bark.play();
}
function chirpPlay() {
  chirp.play();
}
function cricketSoundPlay() {
  cricketSound.play();
}
