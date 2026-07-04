//Dates

let myDate= new Date()
// console.log(myDate);
// console.log(myDate.toString());               // sat Jul 04 2026 16:06:30
// console.log(myDate.toISOString());            // 2026-07-04T16:06:30.166Z
// console.log(myDate.toLocaleDateString());     // 7/4/2026
// console.log(myDate.toDateString());           // Sat Jul 04 2026
// console.log(typeof(myDate));                  // object

//let myCreateDate=new Date(2026,5,24);           // month starts from 0 
//let myCreateDate=new Date(2026,5,14,7,15);
//console.log(myCreateDate.toLocaleString());
let myCreateDate=new Date("2026-06-24");
//console.log(myCreateDate.toLocaleString());

let myTimeStamp= Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate= new Date();
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());

newDate.toLocaleString('default',{
        weekday:"long",
    }
)



