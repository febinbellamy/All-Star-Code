let state = 1;
let message = "State #1";

function setup() {
  createCanvas(500, 500);
}

function draw() {
  if (state == 1) {
    background(255, 0, 0);
  } else if (state == 2) {
    background(0, 255, 0);
  } else if (state == 3) {
    background(0, 0, 255);
  }

  fill(255); //
  textSize(50); // 50 pixels font size
  text(message, 15, 60);
  // value in message variable,  X , Y
}

function mouseClicked() {
  if (state == 1) {
    state = 2;
    message = "State #2";
  } else if (state == 2) {
    state = 3;
    message = "State #3";
  } else if (state == 3) {
    state = 1;
    message = "State #1";
  }
}
