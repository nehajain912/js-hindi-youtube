function setUsername(username)
{
    this.username = username;    
    console.log('called');
    
}

function createUser(username,email,password)
{
    setUsername.call(this,username);
    this.email = email;
    this.password = password;
    
    
}

const user =new createUser('neha','neha@google','123');
console.log(user);
// const setname = setUsername('neha');
// console.log(setname);

// call passes current execution to another function 