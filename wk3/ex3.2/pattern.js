function setup() {
    createCanvas(600, 600);
}

function createTile(originX, originY, primaryColor, circleRadius) {
    translate(originX,originY);
    noStroke();
    fill(primaryColor);
    rect(0, 0, 200, 200);
    fill('pink');
    //was having trouble with my ellipses going outside my 200x200 tile and could not figure out how to use the arc how I wanted...so I changed my tile to have rectangles instead
    rect(10, 10, 180, 20);
    rect(10, 170, 180, 20);
    stroke('white');
    strokeWeight(2.5);
    line(100, 0, 100, 200);
    stroke('black');
    line(25, 100, 175, 100);
    stroke('white');
    line(50, 50, 150, 150);
    line(150, 50, 50, 150);
    noStroke();
    fill('white');
    circle(50, 50, 15);
    circle(150, 150, 15);
    circle(50, 150, 15);
    circle(150, 50, 15);
    noFill();
    stroke('white');
    strokeWeight(1);
    circle(50, 50, 25);
    circle(150, 150, 25);
    circle(50, 150, 25);
    circle(150, 50, 25);
    strokeWeight(5);
    quad(100, 75, 150, 100, 100, 125, 50, 100);
    strokeWeight(6)
    stroke('black');
    circle(100, 100, circleRadius)
}

function draw() {
    createTile(0, 0, 'lavender', 175);
    createTile(0, 200, 'orange', 100);
    createTile(0, 200, 'lightgreen', 50);  
    createTile(200, -400, 'red', 80);
    createTile(0, 200, 'lightblue', 200);
    createTile(0, 200, 'purple', 110);
    createTile(200, -400, 'blue', 60);
    createTile(0, 200, 'green', 180);
    createTile(0, 200, 'gold', 75);

}