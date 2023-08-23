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

let countdown = setInterval(myCountdown, 1000);

setTimeout(revision, msRevision);

// * function for the revision of the exercise

function revision() {
  alert("It is time!");
  clearInterval(countdown);
}

// * function for the countdown

function myCountdown() {
  // get date of today
  const todayDate = new Date();
  let msNow = todayDate.getTime();

  let timeLeft = msRevision - msNow;

  if (timeLeft < 0) {
    revision();
  } else {
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
  }
}

// * function to generate clock numbers

function clock(time, type) {
  if (time < 10) {
    type.innerHTML = "0" + time;
  } else {
    type.innerHTML = time;
  }
}
