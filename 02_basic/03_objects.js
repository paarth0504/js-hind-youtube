// Initiailzing An Object

const newSymbo = Symbol("Key123332") //Creating A Symbol 
const JsUser = {
    name : "Parth",
    age : 23,
    location : "Maharashtra",
    cont : 9049886898,
    email : "paarthdeshmukh71@gmail.com",
    isLoggedIn: false,
    [newSymbo] : ("Key12345")
}

// console.log(JsUser.age);
// console.log(JsUser.cont);
console.log(JsUser[newSymbo]);

JsUser.greeting = function (){
    console.log(`Hello JS User,${this.name}`);
    
}
console.log(JsUser.greeting());












