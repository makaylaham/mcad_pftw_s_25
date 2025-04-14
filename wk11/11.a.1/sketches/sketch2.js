function setup() {
    createCanvas(600, 600);
    background (0, 124, 214);
    angleMode(DEGREES);
}

function draw() {
    noFill();
    stroke (255, 29, 71);
    strokeWeight (3);
    arc(300,300, random(0, 550), random(0, 550), random(0, 360),random(0, 360));
}


function mousePressed() {
    noLoop();
}