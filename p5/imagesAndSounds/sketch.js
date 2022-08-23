// declare the following variables without assigning them any values
let charmanderImage;
let bulbasaurImage;
let squirtleImage;

let charmanderSound;
let bulbasaurSound;
let squirtleSound;

// preload() is used to handle asynchronous loading of external files in a blocking way
// this function runs once and must be listed before the function setup()
function preload() {
  charmanderImage = loadImage("images/charmander.png");
  bulbasaurImage = loadImage("images/bulbasaur.png");
  squirtleImage = loadImage("images/squirtle.png");

  charmanderSound = loadSound("sounds/charmander.mp3");
  bulbasaurSound = loadSound("sounds/bulbasaur.mp3");
  squirtleSound = loadSound("sounds/squirtle.mp3");
}

function setup() { //executes once!
  createCanvas(500, 500); // creates a canvas with a width of 500 and height of 500
  background(0); // equivalent to background( 0, 0 ,0). Black
  noStroke(); // removes the outline of our shapes
}

function draw() {
  // executes continously
  // red square
  fill(255, 0, 0);
  rect(100, 200, 100, 100);

  // green square
  fill(0, 255, 0);
  rect(200, 200, 100, 100);

  // blue square
  fill(0, 0, 255);
  rect(300, 200, 100, 100);

  //We're loading the images
  image(charmanderImage, 100, 200, 100, 100);
  //    charmander Image, x, y,   width, height

  image(bulbasaurImage, 200, 200, 100, 100);
  //    bulbasaur Image, x, y,   width, height

  image(squirtleImage, 300, 200, 100, 100);
  //    squirtle Image, x, y,   width, height
}

function mouseClicked() {
  // charmander sound. If the user clicks anywhere inside the red box, the charmander sound will play
  if (mouseX > 100 && mouseX < 200 && mouseY > 200 && mouseY < 300) {
    charmanderSound.play();
  }

  // bulbasaur sound. If the user clicks anywhere inside the green box, the bulbasaur sound will play
  if (mouseX > 200 && mouseX < 300 && mouseY > 200 && mouseY < 300) {
    bulbasaurSound.play();
  }

  // squirtle sound. If the user clicks anywhere inside the blue box, the squirtle sound will play
  if (mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 300) {
    squirtleSound.play();
  }
}
