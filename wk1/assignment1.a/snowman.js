let grid = undefined;

//CANNOT GET THIS TO WORK FOR THE RIGHT ARM ON SNOWMAN - IVE TRIED MANY DIFFERNT THINGS AND I AM JUST LOST NOW
// let direction = window.prompt ("up or down ?")
//   if (up === true) {
//     (450, 400, 600, 300)
//   } if (down === true) {
//     (450, 400, 600, 500)
//   } else {
//     (450, 400, 600, 400)
//   }

let color = window.prompt ("pick a color")
fill ("color");



function setup() {
  createCanvas(1000, 800);
  background ("#92C7EF");
  // cant get my image to show up for some reason ??
  grid = loadImage ("images/100px_grid.png");
}

function draw() {
  background(grid);
  //snowman body
  fill("f1f1f1");
  strokeWeight(2.5);
  stroke("black")
  //bottom
  ellipse(350, 600, 300);
  //middle
  ellipse(350, 400, 225);
  //top
  ellipse(350, 225, 175);


  //arms
  stroke("#994c00");
  strokeWeight(7);
  //right arm
  line(450, 400, 600, 300);

  //CANNOT FIGURE OUT HOW TO MAKE THIS WORK WITH A WINDOW PROMPT for the right arm
  // line (direction);

  //left 1
  line(250, 400, 150, 375);
  //left 2
  line(150, 375, 100, 300)
  //carrot nose
  fill(color);
  strokeWeight(0);
  triangle(350, 230, 450, 250, 350, 260);
  //eyes
  fill("black");
  //left
  ellipse(325, 200, 15);
  //right
  ellipse(375, 200, 15);

}
