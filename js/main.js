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
// const revisionDate = new Date("August 24, 2023 09:30:00");
const revisionDate = new Date("August 23, 2023 17:37:20");
const msRevision = revisionDate.getTime();

// get date of today
let todayDate = new Date();
let msNow = todayDate.getTime();

// missing ms till the revision
let timeLeft = msRevision - msNow;

setTimeout(revision, timeLeft);

let countdown = setInterval(myCountdown, 1000);

// * function for the revision of the exercise

function revision() {
  alert("It is time!");
  clearInterval(countdown);
}

// * function for the countdown

function myCountdown() {
  // get date of today
  todayDate = new Date();
  msNow = todayDate.getTime();

  timeLeft = msRevision - msNow;
  console.log(timeLeft);

  //   if (timeLeft < 100) {
  //     revision();
  //   } else {
  const timerDays = parseInt(timeLeft / day);
  timeLeft = timeLeft - timerDays;
  clock(timerDays, counterDay);

  const timerHours = parseInt(timeLeft / hour);
  timeLeft = timeLeft - timerHours * hour;
  clock(timerHours, counterHour);

  let timerMinutes = parseInt(timeLeft / minute);
  timeLeft = timeLeft - timerMinutes * minute;
  clock(timerMinutes, counterMinute);

  let timerSeconds = parseInt(timeLeft / second);
  timeLeft = timeLeft - timerSeconds * second;
  clock(timerSeconds, counterSecond);
  //   }
}

// * function to generate clock numbers

function clock(time, type) {
  if (time < 10) {
    type.innerHTML = "0" + time;
  } else {
    type.innerHTML = time;
  }
}

//   let timerCountdown = msRevision - msNow;
//   console.log(timerCountdown);

// !! at this moment for setTimeout to work it will need years
