
// if

const isuserLoggedIn = true

if (2 != 3) {
    // console.log("Executed");
    
}

// const temprature = 41

// if (temprature < 40) {
//     console.log("Temprature Is Less than 41");
// } else{
//     console.log("Temperature Is More Than 41");
// } 

// console.log("Executed");
// < , > , <= , >= , == , != , === , !==


// Blog Scope 

// const score = 200

// if (score > 100) {
//     let power = 'Fly'
//     console.log( `User Power : ${ power}` );
    
// }
    // console.log(`User Power : ${ power}`); 
    
// Implicit Scope 

const balance = 2000

if(balance>500) console.log("test"); // Implicit Scope

// if(balance>500) console.log("test") , console.log("test 2") , console.log("test 3"); Immature Habit Of Executing The Code.

// const balance2 = 1000
// if (balance2<500) {
//     console.log("Less Than 500");
    
// }else if (balance2<700){
//     console.log("Less Than 700");
    
// }else {console.log("Less Than 1200");

// }

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitcard && 2===5 ) {
    console.log("Allow To Buy Course");
    
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User Logged In Successfully");
    
}





