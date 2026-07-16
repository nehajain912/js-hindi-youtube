
// function multiplyBy5(num)
// {
//     return num*5;
// }

// multiplyBy5.power = 2;
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function createUser(username,score)
{
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function()
{
    this.score++;
    console.log(`score is:${this.score}`);
}
createUser.prototype.printMe = function()
{
    console.log(`score is ${this.score}`);
}

const chai = new createUser('chai',25);
const tea = new createUser('tea',250);
chai.increment();
tea.increment();


/*

Here's what happend behind the scences when the new keyword is used:

A new object is created: The new keyword initiate the creation of a new Javascript object.

A prototype is linked : The newly created object gets linked to the prototype property of the constructor function.
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly create object.
If no explicit return value is specified from the constructor,Javascript assumes this, the newly created object to be intended return values.

The new object is reuturned, After the constructor function has been called,if it doesn't return a non-primitive value (object,array,function,etc.),
the newly created object is returned


*/
