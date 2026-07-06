const user = {
    username : "hitesh",
    price : 999,
    welcomeMessage : function()
    {
        //console.log(`${this.username}, welcome to website`);
        //console.log(this);
    }
}

// user.welcomeMessage();
// user.username="neha";
// user.welcomeMessage();

// console.log(this)          // node m empty aata h & browser mein this ki value window aati h

// function chai()
// {
//     let username="neha";
//     console.log(this.username);
// }

// chai();

// const chai = function()
// {
//     let username="neha";
//     console.log(this.username);

// }
// chai();

const chai = () =>
{
    let username="neha";
    console.log(this);

}
// chai();

// const addTwo= (num1,num2) => {
   
//     return num1+num2;
// }


// const addTwo = (num1,num2) => num1+num2;
// const addTwo = (num1,num2) => (num1+num2);

const addTwo = (num1,num2) => ({username:"neha",email:"google@.com"})

console.log(addTwo(3,4));

