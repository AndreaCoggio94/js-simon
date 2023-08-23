setTimeout(revision, 3000);

function revision() {
  console.log("It is time!");
}

setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
