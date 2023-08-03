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

const refreshButton = document.querySelector("button.refresh");
refreshButton.addEventListener("click", loadEverythingElse);

function loadOnce() {
  loadIcons();

  addToggleTemperature();
  addToggleSliders();
}

async function loadEverythingElse() {
  const data = await getWeather("Singapore");

  populateTopLeft(data);
  populateTopRight(data);

  populateDailySlider(data.forecastData.dayData);
  populateWeeklySlider(data.forecastData.weekData);
}

loadOnce();
await loadEverythingElse();
