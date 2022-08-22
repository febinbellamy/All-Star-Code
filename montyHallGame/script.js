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

// event listeners for clickable elements
doorOne.addEventListener("click", doorSelected);
doorTwo.addEventListener("click", doorSelected);
doorThree.addEventListener("click", doorSelected);

switchBtn.addEventListener("click", reveal);
stayBtn.addEventListener("click", reveal);
resetBtn.addEventListener("click", newGame);

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
  gameText.style.display = "none";

  // get a random element (an array of img srcs) from the sets array.
  let randSet = sets[getRandInt(sets.length)];
  // give prizes random img srcs
  resultOne.src = randSet[0];
  resultTwo.src = randSet[1];
  resultThree.src = randSet[2];
}

// when a user clicks on a door, reveal a goat and the switch/stay buttons
function doorSelected() {
  console.log(this);

  if (state === "start") {
    // options monty can open
    let options = [];

    if (this.id === "door1") {
      answer = resultOne;
      gameText.innerHTML = "Door 1 is selected!";

      // if prize is not car, make it an option.
      if (!resultTwo.src.includes("car.png")) {
        options.push(resultTwo);
      }
      if (!resultThree.src.includes("car.png")) {
        options.push(resultThree);
      }
    }

    if (this.id === "door2") {
      answer = resultTwo;
      gameText.innerHTML = "Door 2 is selected!";

      // if prize is not car, make it an option.
      if (!resultOne.src.includes("car.png")) {
        options.push(resultOne);
      }
      if (!resultThree.src.includes("car.png")) {
        options.push(resultThree);
      }
    }

    if (this.id === "door3") {
      answer = resultThree;
      gameText.innerHTML = "Door 3 is selected!";

      // if prize is not car, make it an option.
      if (!resultTwo.src.includes("car.png")) {
        options.push(resultTwo);
      }
      if (!resultOne.src.includes("car.png")) {
        options.push(resultOne);
      }
    }
    montyOpen = options[getRandInt(options.length)];
    montyOpen.style.display = "inline";
    gameText.style.display = "block";
    switchBtn.style.display = "inline";
    stayBtn.style.display = "inline";
  }
  // change the state to "picked". this will lock in the user's choice
  state = "picked";
}

function reveal() {
  if (state === "picked") {
    // reveal answer
    if (this.id === "stayButton") {
      answer.style.display = "inline";
      timesStayed++;
      // check for car
      if (answer.src.includes("car.png")) {
        stayWon++;
        gameText.innerHTML = "You won! :)";
      } else {
        gameText.innerHTML = "You lost! :(";
      }
    }
    if (this.id === "switchButton") {
      // loop through the prizes and switch to the one Monty didn't choose and the user didn't choose
      for (let i = 0; i < prizes.length; i++) {
        if (prizes[i] !== answer && prizes[i] !== montyOpen) {
          answer = prizes[i];
          break;
        }
      }
      answer.style.display = "inline";
      timesSwitch++;
      // check for car
      if (answer.src.includes("car.png")) {
        switchWon++;
        gameText.innerHTML = "You won! :)";
      } else {
        gameText.innerHTML = "You lost! :(";
      }
    }

    switchWR.innerHTML = `Times Switched: ${timesSwitch} Times Won ${switchWon} Probability: ${
      switchWon / timesSwitch
    }`;
    stayWR.innerHTML = `Times Stayed: ${timesStayed} Times Won ${stayWon} Probability: ${
      stayWon / timesStayed
    }`;
    resetBtn.style.display = "inline";
    state = "start";
  }
}
