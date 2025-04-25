var pos;
var slider;
var power;

function setup() {
  createCanvas(800, 800);
  
  angleMode(DEGREES);

  pos = 0.0;
  inc = 2.0;

  slider = createSlider(0, 7, 0);
}

function draw() {
  shape1();
  shape2();
}

function shape1() {
  clear();
  background(232, 174, 214);
  translate(width/2, height/2);
  
  fill(104, 176, 233);

  var sinValue = sin(pos);

  power = sinValue * 15;

  for (x = 0; x <= 360; x = x + 10) {
    square (power * 10, power, 20);
    rotate(x);

  }
  pos = pos + slider.value();
}

function shape2() {
  fill (104, 176, 23);
  translate(100, 100);
  for (x = 0; x <= 360; x = x + 10) {
  ellipse(power * 15, power * -15, power + 20, 40);
  }
}