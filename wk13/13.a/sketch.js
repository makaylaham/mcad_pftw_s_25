let gravity; 
let firework;
let explode = false;
let particles = [];
let num = 50;

function setup() {
  createCanvas(400, 400);

  gravity = createVector(0, 0.1);

  firework = new Particle(width/2, 150, 0, -2, explode)
}

function draw() {
  background(50);

  if (explode == false) {
    firework.update();

    if (firework.vel.y >= 0) {
      explode = true;
      for (let i=0; i<num; i++) {
        let vel = p5.Vector.random2D();
        vel.mult(random(1,3));
        particles[i] = new Particle(firework.pos.x, firework.pos.y, vel.x, vel.y, explode);
      }
    }

    firework.display();
  } else {

    for (let i=0; i<particles.length; i++) {
      particles[i].finished();
      particles[i].update();
      particles[i].display();
      if (particles[i].done) {
        particles.splice(i, 1);
      }
    }
  }


}

class Particle {
  constructor(x, y, vx, vy, explode) {
      this.pos = createVector(x, y);
      this.vel = createVector(vx, vy);
      this.explode = explode;

      if (this.explode) {
        this.size = 2;
      } else {
      this.size = 10;
      }
      this.life = 255;
      this.done = false;
  }

  update() {
      this.vel.add(gravity);
      this.pos.add(this.vel);
      this.life -= 3;
  }


  display() {
    stroke(255, this.life)
    fill(255, this.life);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }

  finished() {
    if (this.life < 0) {
      this.done = true;
    } else {
      this.done = false;
    }
  }
} 


