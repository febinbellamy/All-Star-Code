/* 
Question 1:  Use the .forEach() function to loop over the array and print the following output:

JELLY DONUT
CHOCOLATE DONUT
GLAZED DONUT
VANILLA DONUT
STRAWBERRY DONUT

*/

const donuts = ["jelly", "chocolate", "glazed", "vanilla", "strawberry"];

// solution: defining a callback then executing it
function uppercasedDonuts(treat) {
  treat += " donut";
  treat = treat.toUpperCase();
  console.log(treat);
}

donuts.forEach(uppercasedDonuts);

// alternative solution: executing a callback function inline
donuts.forEach((treat) => {
  treat += " donut";
  treat = treat.toUpperCase();
  console.log(treat);
});

// ----------------------------------------------------------------

/* 
Question 2: What is the expected output?
*/

function filterByRange(value) {
  return value >= this.lower && value <= this.upper;
}

let range = {
  lower: 10,
  upper: 100,
};

let data = [-32, -16, -13, 72, 23, 44, 55, 16, 997, 82, 91, 100, 101, 102];

let result = data.filter(filterByRange, range);
console.log(result);
// The expected output is an array with values between 10 and 100 inclusive.

// ----------------------------------------------------------------

/* 
Question 3: What is the expected output?
*/

function say(names, sayWithNameFunction) {
  for (let name of names) {
    sayWithNameFunction(name);
  }
}

let team = ["Febin", "Bryan", "Aly", "Andy"];

function sayHello(name) {
  console.log("Hello " + name + "!");
}

say(team, sayHello);

// The expected output is:  Hello Febin! Hello Bryan! Hello Aly! Hello Andy!
// The say() function is the higher order function. The sayHello() function is the callback that we're passing in to say() along with the team array.
// The callback is executed on each element in the array.

// ----------------------------------------------------------------

/* 
Question 4: (EXTRA CREDIT) 
Explain what's happening in this program. What is the expected output for the console.log statements?

*/

// This is a higher order function that returns an anonymous function
function addNums(x) {
  return function (y) {
    return x + y;
  };
}

const addFive = addNums(5);
const addTwenty = addNums(20);

// When the outer function is done executing, the inner anonymous function will be able to access the arguments passed into the outer function due to a concept called closure.

console.log(addFive(50)); // the value passed into x is 5 and y is 50. Expected output: 55
console.log(addTwenty(15)); // the value passed into x is 20 and y is 15. The final output is 35.
