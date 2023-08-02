import { asyncFetchForecast } from "./fetch_weather";
import { parseLocation, parseCurrent, parseForecast } from "./parse_weather";

function getWeather() {
  let { location, current, forecast } = asyncFetchForecast("Singapore");
  // parseLocation(location);
  //   parseCurrent(current);
  parseForecast(forecast);
}

export { getWeather };
