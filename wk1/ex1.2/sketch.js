function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("lightblue");
  //background color
  
  fill("yellow");
  //fill the circle below with a color
  
  stroke("orange");
  //color of stroke of circle
  
  strokeWeight(15);
  //stroke of the circle below
  
  circle(750, 50, 75)
  //circle in top right corner
  
  fill("green");
  
  strokeWeight(0);
  
  rect(0, 500, 800, 600);
  
  textSize(50);
  fill("maroon");
  text("Howdy!", mouseX, mouseY);
 

}