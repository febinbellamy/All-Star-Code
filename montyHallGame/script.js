// 3 possible scenarios: the car is behind the first door, the second door, or the third door
let sets = [
  ["imgs/car.png", "imgs/goat.png", "imgs/goat.png"],
  ["imgs/goat.png", "imgs/car.png", "imgs/goat.png"],
  ["imgs/goat.png", "imgs/goat.png", "imgs/car.png"],
];

// accessor variables
const switchBtn = document.querySelector("#switchButton");
const resetBtn = document.querySelector("#resetButton");
const stayBtn = document.querySelector("#stayButton");

// the images - goat or car
const resultOne = document.querySelector("#result1");
const resultTwo = document.querySelector("#result2");
const resultThree = document.querySelector("#result3");

// the doors
const doorOne = document.querySelector("#door1");
const doorTwo = document.querySelector("#door2");
const doorThree = document.querySelector("#door3");

// the text which indicates if the user won or lost
const gameText = document.querySelector("#gameText");

// the switch and stay win rate
const switchWR = document.querySelector("#switchWR");
const stayWR = document.querySelector("#stayWR");



// global variables
let state = "start";
let answer; // stores the door number that the user chooses
let montyOpen; // the door that is opened
let prizes = [resultOne, resultTwo, resultThree]; // array of images
let timesSwitch = 0; // updates whenever the user switches
let switchWon = 0; // if the user switches and wins the car
let timesStayed = 0; // updates whenever the user stays
let stayWon = 0; // if the user stays and wins the car

newGame();

function getRandInt(num) {
  return Math.floor(Math.random() * num);
}

// the function below will reset the game.
function newGame() {
  // hide the buttons
  switchBtn.style.display = "none";
  stayBtn.style.display = "none";
  resetBtn.style.display = "none";

  // hide the goat and car images
  resultOne.style.display = "none";
  resultTwo.style.display = "none";
  resultThree.style.display = "none";

  // get a random element (an array of img srcs) from the sets array.
  let randSet = sets[getRandInt(sets.length)];
  // give prizes random img srcs
  resultOne.src = randSet[0];
  resultTwo.src = randSet[1];
  resultThree.src = randSet[2];
}
