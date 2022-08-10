let xPos = 25;

function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  background(0, 20);
  // background(0, 20) will give us a trailing green circle fade effect.
  // 20 is an alpha transparency value. A more transparent color is being painted and used as a background each time.

  fill(0, 255, 0);
  ellipse(xPos, 250, 50, 50);
  // create a green ellipse at the xPos, 250 with a width of 50 and height of 50.

  xPos += 3;
  // Then add 3 to the current value in xPos variable

  // if we have the background(0) function HERE at the bottom of the draw() function, we won't be able to see the ball. We'll just see the black background!

  // this is called a wrap around.
  if (xPos > 525) {
    // if the x is at the very end (right side),
    xPos = -25; // change the xPos value to -25 which will RESET the ball and move it all the way to the left. We're forcing the ball to go from the right wall to the left wall.
  }
}
