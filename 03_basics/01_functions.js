
function sayMyName(params) {
   
    console.log("P");
    console.log("A");
    console.log("R");
    console.log("T");
    console.log("H");
     
}
// sayMyName()

// function addTwoNumbers(number1 , number2) {
//     console.log(number1 + number2);
    
// }

// addTwoNumbers(1,5)

// 1st Way
function addTwoNumbers(number1 , number2) {
    
    let result = number1 + number2
    // console.log("Parth");
    return result
}

const result = addTwoNumbers(3,2)
// console.log("Result:", result);

//2nd Way
function addTwoNumbers(number1 , number2) {
    
    return number1 + number2
}

const result2 = addTwoNumbers(50,50)
// console.log("Result 2 is: " , result2);

function loginUserMessage(username) {
    // return `${username} Just Logged In`
    
}
// console.log(loginUserMessage());

//****3rd  */

function loginUserName(identy) {
    if (!identy) {
        console.log("Please Enter Identy");
        return 
    }
    return `${identy}Just Initailze Identy`
}
// console.log(loginUserName());


function calculateCartPrice(...num1) {
    return num1
    
}

// console.log(calculateCartPrice(500,400,600,800,955,656));

const user = {
    username : "Parth",
    price : 156
}

function handleObject(anyuser) {
    // console.log(`Username Is : ${anyuser.username} and Price Is : ${anyuser.price} `);
    
    
}

// handleObject(user)
handleObject({
    username : "OnlyFans",
    price : 25
})

const myNewArray =   [500,200,250,356,12,]
function returnSecondValue(getArray) {

    return getArray[3]
    
}
    // console.log(returnSecondValue(myNewArray));
    console.log(returnSecondValue([22,33,6666,5555,44]));
    

    
    

    // const myThirdArray= [11,22,33,44]
    // function returnThirdValue(thirdArray) {
    //     return thirdArray[3]
        
    // }

    // console.log(returnThirdValue(myThirdArray));
    
