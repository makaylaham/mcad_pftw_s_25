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


let myName = window.prompt ("enter a name for our snowcreature");


let color = window.prompt ("pick a color")
fill ("color");






function setup() {
  createCanvas(1000, 800);
  background ("#92C7EF");
  // cant get my image to show up for some reason ??
  //grid = loadImage ("images/100px_grid.png");
}

function draw() {

  fill("white");
  //landscaping
  strokeWeight(0);
  ellipse (450, 750, 1200, 400);

  //log cabin house
  stroke("#994c00");
  strokeWeight(30);

  line (700, 700, 1000, 700);
  line (700, 670, 1000, 670);
  line (700, 640, 1000, 640);
  line (700, 610, 1000, 610);
  line (700, 580, 1000, 580);
  line (700, 550, 1000, 550);
  line (700, 520, 1000, 520);
  line (700, 490, 1000, 490);
  line (700, 460, 1000, 460);
  line (700, 430, 1000, 430);
  line (700, 400, 1000, 400);
  line (700, 370, 1000, 370);
  line (700, 340, 1000, 340);
  line (700, 310, 1000, 310);
  line (700, 280, 1000, 280);
  line (700, 250, 1000, 250);
  line (700, 220, 1000, 220);
  line (700, 190, 1000, 190);
  line (700, 160, 1000, 160);
  line (700, 130, 1000, 130);
  line (700, 100, 1000, 100);
  line (700, 70, 1000, 70);
  line (700, 40, 1000, 40);

  //cabin door
  fill("#663300");
  strokeWeight(1);
  stroke("black");
  rect(775, 115, 175, 600)
  fill("gold");
  ellipse(800, 500, 15)



  
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

  
  //face
  ellipse(305, 265, 8);
  ellipse(320, 275, 8);
  ellipse(335, 285, 8);
  ellipse(350, 290, 8);
  ellipse(365, 285, 8);
  ellipse(380, 275, 8);
  ellipse(395, 265, 8);

  //buttons
  ellipse (350, 345, 30);
  ellipse (350, 410, 30);
  ellipse (350, 475, 30);
  

  //background(grid);

  //snowman nametag
  fill ("white");
  stroke("red")
  strokeWeight(5);
  rect(25, 250, 200, 75)

  fill ("black");
  strokeWeight(0);
  textSize(14);
  text("My name is" + " " + myName + "!", 35, 275)
}
