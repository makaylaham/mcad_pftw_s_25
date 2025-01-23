let color = window.prompt ("Pink or Blue ?")
  if (pink === true){
    fill ("pink");
  }
  if (blue === true){
    fill("blue");
  }
  else {
    fill ("grey");
  }
  

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(color);
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
  fill("orange");
  text("Howdy!", mouseX, mouseY);
 
}