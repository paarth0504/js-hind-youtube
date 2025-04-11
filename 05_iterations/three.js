// for of

const arr = [1,2,3,4,5,6,7,8,9]

for (const num of arr) {
    // console.log(`${num}`);
    
}

const greeting  = "Hello World"

for (const greet of greeting) {
    // console.log(`Each Character Is ${greet}`);
    
}

// maps

const map = new Map()
map.set('BH' , "BHARAT")
map.set('US' , "United States")
map.set('FR' , "France")
map.set('GR' , "Germany")

// console.log(map);

for (const [key , value] of map) {
    // console.log(key , ":-" , value);
    
}

const myObject={
    game1 : "NFS- Most Wanted",
    game2 : "Grand Theft Auto"
}

// for (const [key , value] of myObject) {
//     console.log(key , ":-" , value);        // not iterable
    
// }

// for (const key in map) {
//     console.log(key);
    
//     }


