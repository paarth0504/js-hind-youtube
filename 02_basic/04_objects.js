// const facebookUser = new Object ()   **singleton object

const facebookUser = {}   //Non singleton Objects 

facebookUser.name = "Parth"
facebookUser.age = 23
facebookUser.loc = "Maharashtra"
facebookUser.id = "125689"

console.log(Object.keys(facebookUser));
// console.log((Object.values(facebookUser.id)));
// console.log((Object.entries(facebookUser)));
console.log(facebookUser.hasOwnProperty(`idff`));




// console.log(facebookUser);

const regularUser = {
    email : "someuser@gmail.com",
    fullname : {
        userfullname : {
            firstname: "Parth ",
            lastname : "Deshmukh",
            
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

//Merging Objects

const obj1 = {1: "a", 2:"b"}
const obj2 = {3:"c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1,obj2)
// console.log(obj3);

const obj3 = {...obj1,...obj2} //Spreading objects
// console.log(obj3);

//video 17 cmplted





