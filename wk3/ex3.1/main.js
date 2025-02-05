function setup() {
    createCanvas(200, 200);
}

function createTile() {
    translate(0,0);
    noStroke();
    fill('lavender');
    rect(0, 0, 200, 200);
    fill('pink');
    ellipse(100, 0, 200);
    ellipse(100, 200, 200);
    stroke('white');
    strokeWeight(2.5);
    line(100, 0, 100, 200);
    stroke('maroon');
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
    stroke('maroon');
    circle(100, 100, 175)
}

function draw() {
    createTile();
}