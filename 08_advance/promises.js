// const promiseOne = new Promise( function(resolve,reject){
//     // Do an asyn task
//     // DB calls , cryptography , network
//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve();                              // it connects with then
//     },1000)

// } )
// promiseOne.then(function(){
//     console.log('Promise Consumed');
// })



// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve();
//     },1000)
// }).then(function(){
//     console.log('Promise 2 consumed');
    
// })

// // data consumption
// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:'Neha',email:'neha@google'});
//     },1000)
    

// })

// promiseThree.then(function(user){
//     console.log(user);

// })

// cath error
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error)
        {
            resolve({username:'Neha',password:'123'});
        }
        else{
            reject('ERROR Something Went Wrong');
        }
        

    },1000)
})


// promiseFour.then(function(user){
//     console.log(user);
//     return user.username;
// }).then(function(username){
//     console.log(username);
// }).catch(function(error){
//     console.log("Something went wrong");
// })

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then( (username) => {
    console.log(username);

} ).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("The promise is either resolved or rejected!");
})

const promiseFive = new Promise(function(resolve,reject){
      setTimeout(function(){
        let error = true;
        if(!error)
        {
            resolve({username:'javascript',password:'123'});
        }
        else
        {
            reject('ERROR: JS went wrong')
        }
      },1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    } catch(error)
    {
        console.log(error);
    }
    
}
consumePromiseFive();

// async function getAllUsers(){
//     try{
//     const response =await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
  
//     } catch(error)
//     {
//         console.log('E:',error);
//     }
    
// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch(function(error)
{
    console.log(error);
}).finally(function(){
    console.log('Data is fetched or rejected');
})