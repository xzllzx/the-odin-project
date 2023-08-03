import { asyncFetchForecast } from "./fetch_weather";
import { parseLocation, parseCurrent, parseForecast } from "./parse_weather";

async function getWeather() {
  let { location, current, forecast } = await asyncFetchForecast("Singapore");

  const locationData = parseLocation(location);
  const currentData = parseCurrent(current);
  const forecastData = parseForecast(forecast);

  return { locationData, currentData, forecastData };
}

export { getWeather };
