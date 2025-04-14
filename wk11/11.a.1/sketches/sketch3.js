function setup() {
    createCanvas(600, 600);
    background (0);
}

function draw() {
    rotate(frameCount *0.5);
    stroke(255);
    line(300, 300, 450, 450);
    
}