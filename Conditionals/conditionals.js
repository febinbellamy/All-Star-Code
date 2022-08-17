//This guessing game works when you open your terminal and run node conditionals.js followed by any number.
// Example: node conditionals.js 3
// Example: node conditionals.js 2000
// Example: node conditionals.js 5

let userGuess = process.argv[2]; // This is the number that the user guesses (example: 9, 2, 1,  etc.)
// We are storing the user's guess into a variable called userGuess.


let answer = 5; // This is the correct answer. We're declaring a variable and assigning the value 5 to it.


if(userGuess == answer) { // if the user guesses the correct answer, 
    console.log('Correct guess!!') // this code will run. "Correct guess!!" will print in the console.
}
// if the user DOESN'T guess the correct answer, this else if statement below will be evaluated.
else if(userGuess < answer) { // if the user guesses a number that is LESS THAN the correct answer (example: 3, 1, 4.), 
    console.log('Too low!!'); // this code will run. "Too low!!" will print in the console.
}
// This else statement will be evaluated and ran ONLY IF the two conditional statements above didn't run. 
else { // If the number the user guessed ISN'T the correct answer and it's NOT lower than the correct answer, 
    console.log('Too high!!'); // this code will run. 'Too high!!' will print in the console.
}