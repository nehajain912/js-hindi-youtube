const accountId=24125
let accountEmail="neha@google.com"
var accountPassword="12345"
accountCity="Udaipur"
let accountState;

//accountId=23   cannot assign new value to a const
console.log(accountId);
accountEmail="njain24@gmail.com"
accountPassword="1424"
accountCity="Mandsaur"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/
