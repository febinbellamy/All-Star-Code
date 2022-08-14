function setup() {
  createCanvas(500, 500);
  background(0, 0, 0);
  noStroke();
}

function draw() {
  ellipse(mouseX, mouseY, 25, 25);
  // let r = random(0, 255);
  // // min val, max val exclusive
  // let g = random(0, 255);
  // let b = random(0, 255);
  //   let xPos = random(0, 500);
  //   let yPos = random(0, 500);
  //   ellipse(xPos, yPos, 25, 25);
}

function mouseClicked() {
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  fill(r, g, b);
}
