const clock = document.getElementById('clock'); // 1st way.
// const clock = document.querySelector('#clock') // 2nd way.

setInterval(function (){
    let date = new Date();
    // console.log(date.toLocaleTimeString()); // output is giving in console.

    clock.innerHTML = date.toLocaleTimeString();
    } , 1000);



