// ** Global

// get elements for the counter
const counterDay = document.getElementById("days");
const counterHour = document.getElementById("hours");
const counterMinute = document.getElementById("minutes");
const counterSecond = document.getElementById("seconds");

// time in milliseconds

const second = 1 * 1000;
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;

// get date of the revision
const revisionDate = new Date("August 24, 2023 09:30:00");

// get date of today
const todayDate = new Date();

let msRevision = revisionDate.getTime();
console.log(msRevision);

let msNow = todayDate.getTime();
console.log("ora è così " + msNow);

let timeLeft = msRevision - msNow;
console.log(timeLeft);

let timerDays = parseInt(timeLeft / day);
timeLeft = timeLeft - timerDays;
console.log(timerDays);
console.log(timeLeft);

let timerHours = parseInt(timeLeft / hour);
timeLeft = timeLeft - timerHours * hour;
console.log(timerHours);
console.log(timeLeft);

let timerMinutes = parseInt(timeLeft / minute);
timeLeft = timeLeft - timerMinutes * minute;
console.log(timerMinutes);
console.log(timeLeft);

let timerSeconds = parseInt(timeLeft / second);
timeLeft = timeLeft - timerSeconds * second;
console.log(timerSeconds);
console.log(timeLeft);

// function counterTimeLeft() {

// }

// let doubleCheck = new Date(msNow);
// console.log(doubleCheck);

// !! to create the actual countdown

// setTimeout(revision, 3000);

// * function for the revision of the exercise

// function revision() {
//   console.log("It is time!");
//   clearInterval(countdown);
// }

// * function for the countdown

// let countdown = setInterval(myTimer, 1000);

// function myTimer() {
//   const d = new Date();
//   console.log(d);
// }
