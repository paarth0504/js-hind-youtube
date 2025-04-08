// Immediately Invoked Function Expression (IIFE)

// Named IIFE
(function chai() {
    console.log(`DB Connected`);
    
}) ();


// Unamed IIFE
((name)  => {
    console.log(`DataBase Connected Two ${name}`);
    
}) (`PARTH`)