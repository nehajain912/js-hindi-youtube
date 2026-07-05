// array

/*
The array object enables storing a collection of multiple items under a single variable name and has member for performing common array operators
JS arrays are resizable and can contain a mix type of data types.
arrays are zero based indexed.
array creates shallow copy.
*/

const myArr=[1,2,3,4,"neha"];
//console.log(myArr);

const myArr2= new Array(24,19,23);
//console.log(myArr2);
//console.log(myArr2[2]);      // out of index -> undefined

//Array methods
// myArr.push(6);
// myArr.pop();
myArr.unshift(12);       // insert value at begin but shift rest of the values which takes time
myArr.shift();           // delete begin value

// true or false
// console.log(myArr.includes(9));

// console.log(myArr.indexOf(3));    // element which does not exist returns -1

const newArr=myArr.join();

// console.log(newArr);
// console.log(typeof(newArr));        // string



// console.log(myArr);


// slice , splice
console.log("A ",myArr);

const myn1=myArr.slice(1,3);
console.log(myn1);
console.log("B ",myArr);

const myn2=myArr.splice(1,3);
console.log(myn2);
console.log("C ",myArr);
// splice mein ending range  bhi include hoti hai also it manipulates the original array og-spliceArray