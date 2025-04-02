// Primitive Datatype

// 7 Types: String,Number,Boolean,Null,undefined,symbol,Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anoId= Symbol('123')

// console.log(id === anoId);

const bigNumber = 1641621646145n


// Non Primitve (reference Datype)

// Array, Objects, Funtions

const heros = ["shaktiman", "naagraj", "doga"] // an Arry
let myObj ={
    name: " Parth ",     // An Object Where Datatype will be anything
    age: 23,
}

const myFunction= function(){
    // console.log("Hello World");  // A Function which is stored in Variable       
    
}      

// console.log(typeof anoId);

// console.log(typeof bigNumber);

// **********************************************************************************************************

let myYoutubename = "Parth Deshmukh"

let anotherName = "Only Cars"

// console.log(myYoutubename);
// console.log(anotherName);

let userOne = {
    email: "paarthdeshmukh71@gmail.com",
    upi: "user@ybl"
}
// console.log(userOne);

let userTwo = userOne

userTwo.email = "onlycars24@gmail.com"
// console.log(userTwo);
// console.log(userOne);
// console.log(userTwo);

userTwo.email="helloworl@gmail.com"
// userOne.upi = "customer@ybl"

// console.log(userOne);






