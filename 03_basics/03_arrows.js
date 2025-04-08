const user = {
    username: "Parth D",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username} , Welcome to Website`);
        
    }
}

// user.welcomeMessage()
// user.username = "Sammy"
// user.welcomeMessage()

function chai() {
    let username = "Thomas P"
    console.log(this.username);
    
}

chai() 