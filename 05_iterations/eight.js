const myNums = [1,2,3]

// const myTotal = myNums.reduce(function ( acc , currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)

// excecution using arrow function

const myTotal = myNums.reduce(  ( acc , currval) => acc + currval,0 )

// console.log(myTotal);

const myShopping = [
    {
        itemName: "js Course",
        price: 2999
    },

    {
        itemName: "java Course",
        price: 3299
    },

    {
        itemName: "python Course",
        price:7299
    }
]

const priceToPay= myShopping.reduce( (acc, item) => acc + item.price,0)
console.log(`Your Bill Is: ${priceToPay}`);
