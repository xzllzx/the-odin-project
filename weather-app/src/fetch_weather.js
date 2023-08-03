const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

const body = document.querySelector("body");

async function asyncFetchForecast(targetLocation) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${targetLocation}&days=8`
  );

  let responseJson = await response.json();

  return responseJson;
}

export { asyncFetchForecast };
