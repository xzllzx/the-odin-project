import "./style.css";

import { asyncFetchForecast } from "./fetch_weather";

const clickBtn = document.querySelector("button.temp");

clickBtn.addEventListener("click", function () {
  asyncFetchForecast("48.8567,2.3508");
});
