const accountId = 25689
let accountEmail = "paarthdeshmukh71@gmail.com"
var accountPassword = "968542"
accountCity = "Maharashtra"
let accountState; 

// accountId = 2 Not Allowed
accountEmail = "xyz01@gmail.com"
accountPassword = "12345"
accountCity = "Pune"

// console.log(accountId);
console.table([accountEmail, accountPassword, accountCity,accountState])

// Prefer Not To Use var Because of issue in block scope and functional scope.
