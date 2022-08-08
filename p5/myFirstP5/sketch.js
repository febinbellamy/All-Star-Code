function setup() {
  createCanvas(500, 500);
  // width, height in px
  // Creates a canvas elemen
  // only called once at the start of the setup

  background(220, 220, 220);
  // sets the color used for the background of the p5.js canvas
  //  red, green, blue - RGB
  // Any value from 0 - 255

  strokeWeight(10);
  // strokeWeight() sets the width of the stroke used for lines, points, and borders around shapes
  // the weight in pixels of the stroke

  stroke(255, 0, 255);
  // red, green, blue - RGB
  // Any value from 0 - 255

  point(20, 20);
  //    x , y

  line(100, 100, 400, 400);
  // x1, y1    x2, y2

  fill(255, 0, 0);
  // red, green, blue - RGB
  // sets the color used to fill shapes

  ellipse(180, 200, 200, 200);
  //      x,  y    width, height in px
  //  creates an ellipse (oval)

  fill(0, 255, 0);
  //  red, green, blue - RGB
  // sets the color used to fill shapes

  rect(200, 200, 120, 190);
  //   x,  y    width, height in px
  // creates a rectangle

  fill(0, 0, 255);
  // red, green, blue - RGB
  // sets the color used to fill shapes

  triangle(50, 450, 200, 450, 125, 320);
  // x1, y1, x2, y2, x3, y3)

  fill(255, 255, 255);
  // red, green, blue - RGB
  // sets the color used to fill shapes

  quad(340, 50, 300, 120, 430, 155, 450, 20);
  // short for quadrilateral, a four sided polygon
  // x1, y1, x2, y2, x3, y3, x4, y4
}
