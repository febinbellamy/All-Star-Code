let jr_smith = {
  // properties
  // key value pairs AKA property value pairs
  // key and propery are the same thing. You can use the two terms interchangably.

  // key value pair #1
  fullName: `Earl Joseph "J. R." Smith III`,

  // key value pair #2
  age: 36,

  // key value pair #3
  inchesTall: 78,

  // key value pair #4
  currentTeam: "Denver Nuggets",

  number: 5,
  rings: 2,
  hasBeenOn2kCover: false,

  // Methods
  sayName: function () {
    alert(`My name is J.R. Smith.`); // the `` backticks are called template literals.
    // used to create strings!
    // this is more modern way of doing string concatation.

    // 'I want to live in' + ' ' + number +

    // when this code runs, the alert window will open and we'll see the message 'my name is J.R. Smith'
  },

  sayFullName: function () {
    alert(`My full name is ${this.fullName}.`);
  },

  // key or property
  sayTeam: function () {
    // value
    alert(`I play for the ${this["currentTeam"]}.`);
    // the ${ } tells the computer that the code inside of the curly braces is javascript.
    // the this keyword is a very special keyword in javascript.
    // this basically means THIS OBJECT. --> in this case, jr_smith
  },
};

// lets practice accessing values and keys in the object.
// what if we wanted to access JR smith's age?

// two ways of accessing values in an object:
// 1) Dot notation ****
// 2) Bracket notation

// dot notation:
console.log(jr_smith.inchesTall);
console.log(jr_smith.age);
console.log(jr_smith.rings);

jr_smith.rings = "3";
// now Jr smith has 3 rings! The value of rings has been updated.

console.log(jr_smith.rings);

// bracket notation
// console.log(jr_smith["age"]);

// let jrSmithArray = ["basketballPlayer", "NotbetterthanLebron", "only2ringsdoe"];
// console.log(jrSmithArray);

// jrSmithArray[0] = "golfPlayer";
// console.log(jrSmithArray);
