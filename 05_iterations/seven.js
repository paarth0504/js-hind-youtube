const myNumers  = [1,2,3,4,5,6,7,8,9,10 ]

// const newNums = myNums.map( (num) => num + 10)
// console.log(newNums);


// const newNums = myNums.map( (num) => { num + 10 }) // without return and opening of scope {}
                                                        // it will give undefined.
// console.log(newNums);


// const newNums = myNums.map( (num) => { return num + 10 })
// //after opening scope {}, ani return type dilyavr execution hotth.

// *** chaining method    maps, and filter ****
const newNums = myNumers
                .map( (num) => num*10)
                .map( (num) => num+1 )
                .filter( (num) => num >= 40)
console.log(newNums);
