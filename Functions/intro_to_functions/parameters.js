function pokedex(name, type, genNum){ // declare a function with 3 parameters, name, type, genNum
    console.log(name + " is a Gen " + genNum + " " + type + "-type Pokemon") // we're making our function dynamic and using string concatenation to create a sentence
}

pokedex("Squirtle", "Water", 3); // we're calling the pokedex function above and passing in 3 arguments, "Squirtle" (name), "Water" (type), and 3 (genNum); The expected output:  Squirtle is a Gen 3 Water-type Pokemon
pokedex("Mewtwo", "Psychic", 1); // We're calling the pokedex function above and passing in 3 arguments, "Mewtwo" (name), "Psychic" (type), and 13 (genNum); The expected output:  Mewtwo is a Gen 1 Psychic-type Pokemon







