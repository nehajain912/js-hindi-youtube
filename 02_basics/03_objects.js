// object 
// constructor se object bnta hai to singleton hota hai not from literals
// Object.create

//object literal

const mySym=Symbol("Key1");

const JsUser={
    name: "neha",
    "full name": "Neha Jain",
    [mySym]:"MyKey1",             // symbol
    age:19,
    location:"Udaipur",
    email:"nehaj@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.isLoggedIn);
// console.log(JsUser.lastLoginDays);
// console.log(JsUser["email"]);
//console.log(JsUser["full name"]);
// console.log(JsUser.mySym);
// console.log(JsUser[mySym]);


// JsUser.email = "nehajain@gmail.com"
// //Object.freeze(JsUser);                // nothing changes after this
// JsUser["isLoggedIn"]=true;
// // console.log(JsUser);

JsUser.greeting = function()
{
    console.log("Hello JS user");
}

JsUser.greeting();


JsUser.greetingTwo = function()
{
    console.log(`Hello my name is ${this.name}`);
    
}

JsUser.greetingTwo();