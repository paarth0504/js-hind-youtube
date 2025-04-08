const user = {
    username: "Parth D",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username} , Welcome to Website`);
        
    }
}

// user.welcomeMessage()
// user.username = "Sammy"
// user.welcomeMessage()

function chai() {
    let username = "Thomas P"
    console.log(this.username);
    
}

// chai() 

// ***** arrow function *****

// const addTwo = (num1, num2) =>{
// return num1 * num2
// }

// console.log(addTwo());

//*****Implicit return ***** */

// const addTwo = (num1 , num2)=> num1 * num2 
// const addTwo = (num1 , num2)=> ( num1 * num2 ) //This Techinque Is USeful While Learning React
const addTwo = (num1 , num2)=> ({username: "Parth D"})//if u have to return an object then you have to wrap in ()
console.log(addTwo(2,2));



