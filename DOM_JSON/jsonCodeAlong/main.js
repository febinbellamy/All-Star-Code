/** @TODO - Access the pokemon data from data.js */
/**         and print to the console to check */

/** @TODO - Update the page data using a single pokemon */
/**
 *      1. Update the #poke_name heading with the name and index number
 *      2. Update the #poke_img with the pokemon's image URL
 *      3. Update the type heading with the pokemon's type(s)
 *      4. Change the width of each stat bar using the
 *          pokemon's base stats
 */

function randomPokemon() {
  let randomInteger = Math.floor(Math.random() * pokemon.length);

  let pokemonObject = pokemon[randomInteger];

  // pokemon name
  let h1 = document.querySelector("#poke_name");
  h1.innerHTML = `#${pokemonObject.id} - ${pokemonObject.name}`;

  // pokemon image
  let pokeImg = document.querySelector("#poke_img");
  pokeImg.src = `${pokemonObject.image[0]}`;

  // pokemon type
  let pokeType = document.querySelector("#poke_types");
  if (pokemonObject.type[1] === "none") {
    pokeType.innerHTML = `${pokemonObject.type[0]}-Type`;
  } else {
    pokeType.innerHTML = `${pokemonObject.type[0]} / ${pokemonObject.type[1]}-Type`;
  }

  // if pokemonObject.type[1] , only display type[0]

  // pokemon stats
  let hp = document.querySelector("#hp");
  let atk = document.querySelector("#atk");
  let def = document.querySelector("#def");
  let sp_atk = document.querySelector("#sp_atk");
  let sp_def = document.querySelector("#sp_def");
  let spd = document.querySelector("#spd");

  // set the width property of each div to 4x the pokemon's stat.
  let statDivsArray = document.querySelectorAll("#poke_stats div");
  for (let i = 0; i < statDivsArray.length; i++) {
    let stat = statDivsArray[i].id;
    statDivsArray[i].style.width = `${pokemonObject.base[stat] * 4}px`;
  }
}

// when a user clicks the "Random Starter" button, the function declared above will execute.
let randomBtn = document.querySelector("#random_btn");
randomBtn.addEventListener("click", randomPokemon);

/** @TODO - Assign #random_btn to pick a random starter on click */
/**         and update the page data accordingly
 *
 *      1. Make a new function for the code from the previous task
 *      2. Generate a random index for the pokemon array
 *      3. Replace references to the specific pokemon with references
 *          to the randomly-chosen pokemon
 *      4. Add an eventListener to #random_btn with our new function!
 */
