// primitive data type  -> 7
// String , Number , Boolean , null , undefined , Symbol , BigInt

// JS is a dynamically types language bcoz you don't need to define data types it automatically determines based on assign value.

const score=100
const scoreVal=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const anotherId=('123')

//console.log(id===anotherId);     //false

const bigNumber = 9302157842470246742n

// Non primitive data type (reference)
// Array , Objects , Functions

const heros=["shaktiman","naagraj","doga"];   // array
let objectName={
    name: "neha",
    age: 19
};

const myFunction=function()
{
    console.log("Hello world");

}

console.log(typeof myFunction);            // object-function
console.log(typeof outsideTemp);           // object
console.log(userEmail);                    // undefined
console.log(typeof id);                    // symbol
console.log(typeof anotherId);             // string



