import { asyncFetchWeather } from "./fetch_weather";

const clickBtn = document.querySelector("button.temp");

clickBtn.addEventListener("click", function () {
  asyncFetchWeather("current", "48.8567,2.3508");
});
