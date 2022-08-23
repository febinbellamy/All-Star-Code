function setup() {
  createCanvas(500, 500);
  background(220, 220, 220);
}

function draw() {
  line(250, 250, mouseX, mouseY);
}

function mouseClicked() {
  background(220, 220, 220);
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  stroke(r, g, b);
}
