//for
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element==5)
//         console.log("5 is best number");
//     console.log(element);
// }


for (let i= 1; i <=10; i++) {
    //console.log(`Outer loop value ${i}`);
    for (let j = 0; j<=10;j++) {

        //console.log(`Inner loop value ${j} and outer loop value ${i}`);
        //console.log(i + '*'+ j+ '='+ i*j);
        
    }
    
}

let myArray=["flash","batman","spiderman"];
//console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
   // console.log(element);
}

// break and continue
for (let index = 1; index <=20; index++) {
    if(index==5)
        continue;
    //console.log(`value of index is ${index}`);
}

//+++++++++++++++++++++    while   +++++++++++++++++++++++\\
let index=0
while(index<=10)
{
   // console.log(`value of index is ${index}`);
    index+=2;
}

let i=0;
while(i<myArray.length)
{
   // console.log(myArray[i]);
    i++;
}

//++++++++++++++++++ do while ++++++++++++++++++++++++++++++++++//
let score=1;
do
{
    //console.log(`score is ${score}`);
    score++;

}while(score<=10)


//+++++++++++++++ for of loop ++++++++++++++++++++++++++//

const arr = [1,2,3,4,5]

for (const num of arr) {
   // console.log(num);
}

const greetings = "Hello world";
for (const greet of greetings) {
    //console.log(greet);
    
}


//Maps   unique values and same order

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
//console.log(map);


// for (const key in map) {
    
//    console.log(key);
    
    
// }

for (const [key,value] of map) {
    //console.log(key);
    
}

const myObj = {
    game1 : 'NFS',
    game2 :'spiderman',
    
}

// for (const [key,value] of myObj) {
//     console.log(key,':-',value);
    
// }

