// let myName = 'Neha      ';

// console.log(myName.trim().length);

let myHero = ['thor','spiderman'];
let heroPower = {
    thor : 'hammer',
    spiderman : 'sling',

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.Neha = function(){
    console.log(`Neha is present in all objects`);
    
}
Array.prototype.Neha = function(){
    console.log(`Neha is present in all arrays`);
}
// heroPower.Neha();
// myHero.Neha();


// INHERITANCE
const user = {
    username : 'Neha',
    email : 'neha@google.com'
}
const Teacher = {
    makeVideos : true
}
const TeachingSupport = {
    isAvailable : false
}
const TAsupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ : Teacher
}
Teacher.__proto__ = user;

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher);    // prototypal inheritance
let anotherName = 'Jain    ';
String.prototype.letTrim = function(name)
{
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
}
anotherName.letTrim();
'Neha    '.letTrim();
'  Hellooo   '.letTrim();