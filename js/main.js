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
const msRevision = revisionDate.getTime();
// console.log("I ms della revisione sono " + msRevision);

let countdown = setInterval(myCountdown, 1000);

function myCountdown() {
  // get date of today
  const todayDate = new Date();
  let msNow = todayDate.getTime();

  let timeLeft = msRevision - msNow;

  const timerDays = parseInt(timeLeft / day);
  timeLeft = timeLeft - timerDays;
  counterDay.innerHTML = timerDays;

  const timerHours = parseInt(timeLeft / hour);
  timeLeft = timeLeft - timerHours * hour;
  counterHour.innerHTML = timerHours;

  let timerMinutes = parseInt(timeLeft / minute);
  timeLeft = timeLeft - timerMinutes * minute;
  counterMinute.innerHTML = timerMinutes;

  let timerSeconds = parseInt(timeLeft / second);
  timeLeft = timeLeft - timerSeconds * second;
  counterSecond.innerHTML = timerSeconds;
}

// function counterTimeLeft() {

// }

// let doubleCheck = new Date(msNow);
// console.log(doubleCheck);

// !! to create the actual countdown

setTimeout(revision, msRevision);

// * function for the revision of the exercise

function revision() {
  console.log("It is time!");
  clearInterval(countdown);
}

// * function for the countdown

// let countdown = setInterval(myTimer, 1000);

// function myTimer() {
//   const d = new Date();
//   console.log(d);
// }
