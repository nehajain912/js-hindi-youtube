// const user = {
//     username : 'neha',
//     loginCount : 8,
//     isSignedIn : true,

//     getUserDetails: function()
//     {
//         //console.log("Got user details");
//         //console.log(`Username:${this.username}`);
//         console.log(this);
//     }
// }

// console.log(user.username);
//console.log(user.getUserDetails());
// console.log(this);    

// constructor function   (new)
//const promiseOne = new Promise();

function user(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    return this;      
}

const userOne = new user('neha',12,true);
const userTwo = new user('jain',8,false);

console.log(userOne.constructor);
// console.log(userTwo);
// new -> an empty object has been created called instance 
/*
step 1-> new object is created
step 2-> constructor function call due to new
step 3-> argument gets injected 
*/

