// let and const scope within the block
// var c=300;
let a=300;
if(true)
{
let a =10;
const b=20;
// console.log(a);
// c=30;
}
// console.log(a);
//console.log(b);
// console.log(c);

// function one()
// {
//     const userName="neha"

//     function two()
//     {
//         const website="youtube"
//         console.log(userName);
//     }
//    // console.log(website);
//     two();
// }

// one();

if(true)
{
    const username = "hitesh";
    if(username === "hitesh")
    {
        const price = 999;
    }
    //console.log(price);
}
//console.log(username);

//++++++++++++++++++++++++++++//

function addOne(num)
{
    return num+1;
}
console.log(addOne(5));
console.log(addTwo(7));
const addTwo = function(num)
{
    return num+2;
}
