let state = "white";

function setup() {
  createCanvas(500, 500);
  background(0);
  noStroke();
}

function draw() {
  fill(255, 0, 0); //red
  rect(0, 0, 100, 100); //1st box
  fill(0, 255, 0); //green
  rect(100, 0, 100, 100); //2nd box
  fill(0, 0, 255); //blue
  rect(200, 0, 100, 100); //3rd box

  if (state == "white") {
    //if state is white change color to white
    fill(255, 255, 255);
  }
  if (state == "red") {
    //if state is red change color to red
    fill(255, 0, 0);
  }
  if (state == "green") {
    //if state is green change color to green
    fill(0, 255, 0);
  }
  if (state == "blue") {
    //if state is blue change color to blue
    fill(0, 0, 255);
  }

  ellipse(250, 250, 200, 200); //circle
}

function mouseClicked() {
  if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
    //checks for red box
    state = "red";
  }

  if (mouseX > 100 && mouseX < 200 && mouseY > 0 && mouseY < 100) {
    //checks for green box
    state = "green";
  }

  if (mouseX > 200 && mouseX < 300 && mouseY > 0 && mouseY < 100) {
    //checks for blue box
    state = "blue";
  }
}
