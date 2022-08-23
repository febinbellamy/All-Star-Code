function drawTree() { // We're declaring a function. The JS engine will store it into memory. We won't see the tree in our console until the function is called. 
    console.log('     *');
    console.log('    ***');
    console.log('   *****');
    console.log('  *******');
    console.log(' *********');
    console.log('***********');
    console.log('   *****');
    console.log('  *******');
    console.log(' **********');
    console.log('*************');
    console.log('    ***');
    console.log('    ***');
    console.log('    ***');

}

// OPTIONAL: here is an alternative way to declare a function --> arrow functions! If you run node christmas_tree.js, you'll see that both functions work. 2 trees will be printed to the console. 
const drawTreeArrowFunction = () => {
    console.log('     *');
    console.log('    ***');
    console.log('   *****');
    console.log('  *******');
    console.log(' *********');
    console.log('***********');
    console.log('   *****');
    console.log('  *******');
    console.log(' **********');
    console.log('*************');
    console.log('    ***');
    console.log('    ***');
    console.log('    ***');
}

drawTree(); // we're calling the drawTree function. 
drawTreeArrowFunction(); // we're calling the arrow function. Learn more about arrow functions here: https://www.youtube.com/watch?v=h33Srr5J9nY&ab_channel=WebDevSimplified




