import { asyncFetchForecast } from "./fetch_weather";
import { parseLocation, parseCurrent, parseForecast } from "./parse_weather";

function getWeather() {
  let { location, current, forecast } = asyncFetchForecast("Singapore");

  const locationData = parseLocation(location);
  const currentData = parseCurrent(current);
  const forecastData = parseForecast(forecast);

  console.log(locationData);
  console.log(currentData);
  console.log(forecastData);

  return { locationData, currentData, forecastData };
}

export { getWeather };
