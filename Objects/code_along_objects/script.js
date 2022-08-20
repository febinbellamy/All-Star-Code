const jared = {
  fullname: "Jared Murray",
  favColor: "red",
  favFood: "rosemary icecream",
  sayName: function () {
    console.log(`My name is ${this.fullname}`);
  },
};

console.log(jared.favColor);
console.log(jared.favFood);
jared.sayName();

const patrick = {
  fullname: "Patrick Allen",
  favColor: "green",
  favFood: ["orange chicken", "ramen", "burgers"],
};

// Here's how we can delete a key-value pair from an object:
delete patrick.favColor; // use the delete keyword!
console.log(patrick); // if we run this code, we'll see that favColor: "green" key-value pair has been deleted from the object

// Here's how we add new key-value pairs to the object:
patrick.favSummerProgram = "All Star Code";
patrick.favShow = "Dragon Ball Z";

// Now if we check our patrick object, we'll see that it's updated with the two key-value pairs we just created:
console.log(patrick);

// Here's how we access an element of the array inside of the key named favFood:
patrick.console.log(patrick.favFood[2]); // this will print the value "burgers"
