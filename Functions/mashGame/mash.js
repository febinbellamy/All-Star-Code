//step
function mash() {
  return `You will live in a ${getHome()}, travel to ${getTravelCount()} countries, and have a pet ${getPet()}!`;
}

console.log(mash());

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
