let daysItem = document.querySelector("#day");
let hoursItem = document.querySelector("#hour");
let minItem = document.querySelector("#min"); 
let secItem = document.querySelector("#sec");

let countDown = () => {

    setInterval (() => {
    let futureDate = new Date("1 Jan 2025"); 
    let currentDate = new Date();
    let timeLeft = futureDate - currentDate;

    let days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
    let hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(timeLeft / 1000 / 60) % 60; 
    let seconds = Math.floor(timeLeft / 1000) % 60;

    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = minutes; 
    secItem.innerHTML = seconds;

    },1000);
}

countDown();
// setInterval(countDown, 1000);
