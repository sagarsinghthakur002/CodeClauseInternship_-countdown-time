let daysItem = document.querySelector("#day");
let hoursItem = document.querySelector("#hour");
let minItem = document.querySelector("#min"); 
let secItem = document.querySelector("#sec");

let countDown = () => {

    setInterval (() => {

    let futureDate = new Date("1 Jan 2025"); 

    let currentDate = new Date();

    let timeLeft = futureDate - currentDate;

    // fut - curr time 
    let days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
       
    let hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
    
    let minutes = Math.floor(timeLeft / 1000 / 60) % 60; 

    let seconds = Math.floor(timeLeft / 1000) % 60;

    
       // Divide by 1000 to convert milliseconds into seconds.
       // Divide by 60 to convert seconds into minutes.
       // Divide by 60 again to convert minutes into hours.
       // Finally, divide by 24 to convert hours into days.
    

    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = minutes; 
    secItem.innerHTML = seconds;

    },1000);
}

countDown();
// setInterval(countDown, 1000);
