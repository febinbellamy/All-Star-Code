// Example: Returning values

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

const firstNum = multiply(10, 50);
const secondNum = multiply(20, 5);

const thirdNum = subtract(firstNum, secondNum);

console.log(thirdNum);

// Example: defining a callback then executing it.

function innerFunction() {
  return "I am a callback function";
}

function anotherInnerFunction() {
  return "Hello world";
}

function outerFunction(callback) {
  console.log(callback());
}

outerFunction(innerFunction); // this will print "I am a callbackl function"

outerFunction(anotherInnerFunction); // this will print "hello world"

// ---------

// Example: Executing a callback function inline

// this is an anonymous function! it doesn't have a name.

const outerFunction1 = function (callback) {
  console.log(callback());
};

outerFunction1(function () {
  return "This is a string";
});

// ---------------------------

// this is a callback function
function saysHello(name) {
  console.log("Hello", name);
}

// this is a callback function
function saysGoodbye(name) {
  console.log("Goodbye", name);
}

// this is the higher order function VV
function callsWithName(name, sayHiOrGoodbye) {
  sayHiOrGoodbye(name);
}

callsWithName("Michael", saysHello);
callsWithName("Sally", saysGoodbye);

// array methods
// .push()
// .pop()
// .splice()
// .slice()
// .fill()
// shift() // removes the element at the beginning of the array
// unshift() adds an element to the beginning of the array

// .forEach() Example

const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));

// .forEach() example #2

let cities = ["Austin", "Boston", "Chicago", "Seattle"];

function upperCaseCities(string) {
  console.log(string.toUpperCase());
}

cities.forEach(upperCaseCities);
