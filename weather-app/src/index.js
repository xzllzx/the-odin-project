import "./style.css";
import { loadIcons } from "./dom";

import { getWeather } from "./controller";

import {
  populateTopLeft,
  populateTopRight,
  populateDailySlider,
  populateWeeklySlider,
  addToggleTemperature,
  addToggleSliders,
} from "./dom";

const clickBtn = document.querySelector("button.temp");

clickBtn.addEventListener("click", function () {
  getWeather("Singapore");
});

const data = getWeather("Singapore");

loadIcons();

populateTopLeft(data);
populateTopRight(data);

populateDailySlider(data.forecastData.dayData);
populateWeeklySlider(data.forecastData.weekData);

addToggleTemperature();
addToggleSliders();
