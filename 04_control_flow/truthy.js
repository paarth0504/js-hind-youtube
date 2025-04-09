// const userMail = "p@rth.ai"

// if (userMail) {
//     console.log(" Got An Usermail ");
    
// }else{console.log(" Don't Have An User Email ");
// }

// falsy values
// false , 0 , -0 , BigInt , 0n , "" , null , undefined , Nan (not a number)

// *** truthy values
// "0", "false" , "  " , [] , {} , function(){} 

const emptyObj = {}

if (Object.keys(emptyObj).length=== 0 ) {
    // console.log("Object Is Empty");
    
}

// Nulish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 null ?? 10
// val1 = null ?? 10 ?? 20


// console.log(val1);

// ** Ternary Operator

const iceTeaprice = 100
iceTeaprice <= 80 ? console.log("Less Than 80"): console.log("More Than 80");

