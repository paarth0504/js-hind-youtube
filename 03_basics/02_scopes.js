var c = 300
let a = 300
if (true) {
    let a = 23
    const b = 55
    // console.log("Inner  Value : " ,a);

}
// console.log(a);
// console.log(b);
// console.log(c);

function one(params) {
    const username = "Parth"

    function two(params) {
        const website = "Youtube"
        console.log(username);
        
    }
    // console.log(website);
    
    // two()
}
// one()
if (true) {
    const username ="Parth"
    if (username==="Parth") {
        const website = "YoutUBE"
        // console.log( username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);

//+++++++++++  Intresting Example +++++ 
addOne(5)
function addOne(num) {
    return num + 1

}


const addTwo = function addTwo(num) {
    return num + 1

}

addTwo(5)

//Scope Level And Mini Hosting Vid- 22 Cmplted



