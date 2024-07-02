window.onload = function () {
  updateTime();
  updateDay();
};

function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();
  const utcString = now.toUTCString().split(" ")[4];
  timeElement.textContent = utcString;
}

function updateDay() {
  const dayElement = document.getElementById("day");
  const now = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = days[now.getUTCDay()];
  dayElement.textContent = currentDay;
}
