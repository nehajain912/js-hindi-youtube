// if
/*
if(condition)
{
//body
}
*/

const userIsLoggedIn=true;
// if(userIsLoggedIn)
// {
//     console.log(`user is logged in`);
// }

// if(2=="2")
// {
//     console.log("executed");
// }

// if(2==="2")
// {
//     console.log("executed"`);
// }

// if(2!=="2")
// {
//     console.log("executed")
// }

// const score=200
// if(score>100)
// {
//     const power="fly";
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

const balance=1000         
// if(balance > 5000) console.log(balance),console.log("Hii");

// if(balance < 500)
// console.log("less than 500")
// else if(balance < 750)
// console.log("less than 750");
// else if(balance < 900)
// console.log("less than 900")
// else
// console.log("Greater than 899");

const userLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=false
const loggedInFromEmail=true;
// if(userLoggedIn && debitCard && 2==2)
// {
//     console.log("Allow to buy course");
    
// }

// if(loggedInFromGoogle || loggedInFromEmail)
// {
//     console.log("user log in");
    
// }

//++++++++++++++ switch+++++++++++++++++++++++++//

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month=3;
// switch(month)
// {
//     case 1:
//         console.log("Jan");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("Mar");
//         break;
//     case 4:
//         console.log("Apr");
//         break;
//     default:
//         console.log("Default case match");
//         break;
          
        
// }


//+++++++++truthy+++++++++++//
const userEmail=[];
// if(userEmail)
// {
//     console.log("Got user email")
// }
// else
// {
//     console.log("Don't have user email");
// }

// // falsy values
// false, 0, null, -0, BigInt 0n,"",undefined,NaN
// //truthy value
// true, 1, [], "0", 'false', " ", {}, function(){},

// if you want to check array
// if(userEmail.length === 0)
// {
//     console.log("Array is empty");
    
// }

// const emptyObj={};
// if(Object.keys(emptyObj).length === 0)
// {
//     console.log("object is empty");
    
// }

// Nullish Coalescing Operator (??): null undefine

let val1;
// val1= 5 ?? 10
// val1= undefined ?? 15
// val1 = undefined ?? 10 ?? 20        // first value gets assigned after null / undefined 
val1 = undefined ?? null ?? undefined
// console.log(val1);

//TERNARY OPERATOR  (short hand for if else)

// condition?true:false

const iceTeaPrice = 100
iceTeaPrice >= 80?console.log("Greater than 80"):console.log("Less than 80");

