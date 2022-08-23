 //pokemon array
 let pokemon = ['Squirtle', 'Pikachu', 'Mewtwo', 'Arceus', 'Dwebble', 'Blaziken'];
 
 //for (counter variable; conditional; counter change){}
 for (let i = 0; i < pokemon.length; i++) {
    console.log(i, pokemon[i]);
    //if loop finds 'Pikachu' String, terminate loop 
    if (pokemon[i] == 'Pikachu') {
        console.log('Terminate for loop...');
        break;
    }
 }

 