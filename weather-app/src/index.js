import "./style.css";
import { loadIcons } from "./dom";

import { getWeather } from "./controller";

import { populateDailySlider, populateWeeklySlider } from "./dom";

const clickBtn = document.querySelector("button.temp");

clickBtn.addEventListener("click", function () {
  getWeather("Singapore");
});

const data = getWeather("Singapore");

loadIcons();

populateDailySlider(data.forecastData.dayData);
populateWeeklySlider(data.forecastData.weekData);
