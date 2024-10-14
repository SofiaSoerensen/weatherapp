let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes().toString().padStart(2, "0");

function formatDate() {
  return `${day} ${hours}:${minutes}`;
}
console.log(formatDate());

let date = document.querySelector("#today-date");
date.innerHTML = formatDate();

function currentCity(event) {
  event.preventDefault();
  let inputValue = inputSearch.value;
  city.innerHTML = inputValue;
}
let inputSearch = document.querySelector(".search-input");
inputSearch.addEventListener("submit", currentCity);

let city = document.querySelector(".current-city");

let searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", currentCity);
