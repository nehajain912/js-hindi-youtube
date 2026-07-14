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
// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error)
//         {
//             resolve({username:'Neha',password:'123'});
//         }
//         else{
//             reject('ERROR Something Went Wrong');
//         }
        

//     },1000)
// })


// promiseFour.then(function(user){
//     console.log(user);
//     return user.username;
// }).then(function(username){
//     console.log(username);
// }).catch(function(error){
//     console.log("Something went wrong");
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username;
// }).then( (username) => {
//     console.log(username);

// } ).catch(function(error){
//     console.log(error);
// })