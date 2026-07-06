
function sayMyName()
{
console.log("N");
console.log("E");
console.log("H");
console.log("A");

}
// sayMyName();
// console.log(typeof(sayMyName));
// function definition -> parameters
//function calling -> arguments
// function addTwoNumbers(number1,number2)
// {
//     console.log(number1+number2); 
// }


function addTwoNumbers(number1,number2)
{
    // let result=number1+number2;
    // return result;

    return (number1+number2);
    
}

// console.log(addTwoNumbers(5,6));
// console.log(result);

function loginUserMessage(userName="sam")
{
    if(!userName)
    {
        console.log("Please enter userName");
        return;
    }
    return `${userName}`;

}

let msg=loginUserMessage("neha");
// let msg=loginUserMessage();            // when you don't pass value it will show undefined
// console.log(msg);


// when you don't know how many arguments user may enter
function calculateCartPrice(val1,val2,...num1)                // rest operator ...
{ 
    return num1;
}
// console.log(calculateCartPrice(2,56,235,456,235));

const user = {
    username:"neha",
    price:199
}

function handleObject(anyObject)
{
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);

}
// handleObject(user);

// passing object in function
// handleObject({
//     username:"sam",
//     price:399
// })

// passing array into function
const myNewArr = [200,300,500,400];

function arrayFun(arr)
{
    return arr[5];
}
console.log(arrayFun(myNewArr));



