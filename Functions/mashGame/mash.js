//step
function mash() {
  return `You will live in a ${getHome()}, drive a ${getCar()}, work as a ${getOccupation()}, travel to ${getTravelCount()} countries, and have a pet ${getPet()}!`;
}

//step 3
function randNumGenerator(num) {
  return Math.floor(Math.random() * num); // generates a random number from 0 to num (exclusive)
}

//step 4
function getHome() {
  // returns a random house
  let houseArr = ["Mansion", "Castle", "Shack", "House"];

  //step 7
  let userInput = process.argv[2];

  if (userInput) {
    // checks to see if there is a user input
    houseArr.push(userInput); // if so, add the user input to the house array
  }

  let randomHouse = randNumGenerator(houseArr.length);
  return houseArr[randomHouse]; // return a random element within the house array
}

// step 5
function getTravelCount() {
  return randNumGenerator(101); // return a random number between 0 and 100
}

// step 6
function getPet() {
  // returns a random pet
  let fiftyFiftyChance = Math.floor(Math.random() * 2);
  if (fiftyFiftyChance === 0 || !process.argv[3]) {
    let randomPets = ["dog", "snail", "hamster", "tiger", "cat"];
    return randomPets[randNumGenerator(randomPets.length)];
  } else {
    return process.argv[3];
  }
}

function getCar() {
  // returns a random car
  let carArr = [
    "ferrari",
    "hondaPilot",
    "toyotaRav4",
    "dodgeCharger",
    "nissanSentra",
    "corvette",
  ];
  if (process.argv[4]) {
    //If there is a user input, push it to the end of the car array
    carArr.push(process.argv[4]);
  }
  return carArr[randNumGenerator(carArr.length)]; //returns random car from car array
}

function getOccupation() {
  //returns a random occupation
  let occupationArr = [
    "Software Engineer",
    "Instructor",
    "Entrepreneur",
    "Content Creator",
    "Tutor",
    "Wendys Crew Member",
  ];
  if (process.argv[5]) {
    // If there is a user input, push it to the end of the occupation array
    occupationArr.push(process.argv[5]);
  }
  return occupationArr[randNumGenerator(occupationArr.length)]; //returns random element from occupation array
}

let result = mash();
console.log(result);
