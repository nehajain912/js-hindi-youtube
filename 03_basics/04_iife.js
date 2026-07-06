// Immediately Invoked Function Expression (IIFE)
/*
global scope k pollution se problem hoti hai to prevent from that we use this
*/

(function chai() {
    // named iife
    console.log(`DB CONNECTED`);
})();                                  // explicit semi colon

// () -> function definition
// () -> function execution

// ( () => {
//     console.log(`DB CONNECTED2`)
// }  )()

((name) =>
{
    console.log(`DB CONNECTED TWO ${name}`)

})("neha")


//  2 iife ek sth like hue hai to end m semi colon lgana first wale