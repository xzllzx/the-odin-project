import "./style.css";
import { loadIcons } from "./dom";

import { getWeather } from "./controller";

import { populateSlider } from "./dom";

const clickBtn = document.querySelector("button.temp");

clickBtn.addEventListener("click", function () {
  getWeather("Singapore");
});

const data = getWeather("Singapore");

loadIcons();

populateSlider(data.forecastData.weekData);
