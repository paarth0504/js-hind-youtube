const coding = ["Java" , "C++" , "Python" , "ruby"]

coding.forEach(function (val) {
    // console.log(val);
    
})

//  coding.forEach( (item) => {
//     console.log(item);
    
//  })

    function printMe(item) {
        console.log(item);
        
    }
    // coding.forEach(printMe)

    coding.forEach( (item , index , arr )=>{
        // console.log(item, index, arr);
        
    })

    const myCoding = [
        {
            languageName: "java",
            languageFileName:"Java"
        },

        {
            languageName: "javascript",
            languageFileName:"Js"
        },

        {
            languageName: "python",
            languageFileName: "py"
        },

    ]

    myCoding.forEach(  (item) => {
        // console.log(item.languageFileName);
        
    });

    myCoding.forEach( (index) =>{
        console.log(index.languageName);
        
    })


    