var song;
var button;

function setup() {
  createCanvas(600, 600);
  song = loadSound("./assets/zapsplat_animals_bird_ringneck_parakeet_kiss_long_109599.mp3");
  button = createButton("Chirp");
  button.mousePressed(songPlay);
  song.setVolume(0.3);
  background(160, 178, 205);
}

function songPlay() {
  song.play();
}



