function currentTime() {
  var today = new Date();

  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  if (hours == 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hours - 12;
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var time = hours + " : " + minutes + " : " + seconds;

  document.getElementById("clock").innerText = time;

  document.getElementById("clock").textContent = time;

  setTimeout(currentTime, 1000);
}

function currentDate() {
  var date = new Date();

  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var currentDay = month + " / " + day + " / " + year;

  document.getElementById("date").innerText = currentDay;

  document.getElementById("date").textContent = currentDay;
}

currentDate();
currentTime();
