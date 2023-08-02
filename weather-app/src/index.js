import "./style.css";
import { loadIcons } from "./dom";

import { getWeather } from "./controller";

const clickBtn = document.querySelector("button.temp");

clickBtn.addEventListener("click", function () {
  getWeather("Singapore");
});

getWeather("Singapore");

loadIcons();
