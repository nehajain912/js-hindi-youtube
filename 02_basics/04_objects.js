//const tinderUser = new Object() // empty object
const tinderUser= {}

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser={
    email:"Some@gmail.com",
    fullName:{
        userFullName:{
        firstName:"Neha",
        LastName:"Jain"
        }
    }

}

//console.log(regularUser.fullName?.userFullName.firstName);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};

//const obj3 = {obj1,obj2};
// const obj3 = Object.assign({},obj1,obj2);      // target source

const obj3 = {...obj1, ...obj2};
// console.log(obj3)

// array of objects

const users = [
    {
        id : 1,
        email : "n@gmail.com"
    },
    {
        id : 2,
        email : "j@gmail.com"
    },
]

//console.log(users[1].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));      // data type array
// console.log(Object.values(tinderUser));    // array
// console.log(Object.keys(tinderUser));  
// console.log(Object.entries(tinderUser));  // array k andr array first key second value

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
  