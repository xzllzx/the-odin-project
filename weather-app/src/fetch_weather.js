const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

async function asyncFetchWeather(apiMethod, location) {
  console.log(WEATHER_API_KEY);
  const response = await fetch(
    `http://api.weatherapi.com/v1/${apiMethod}.json?key=${WEATHER_API_KEY}?q=${location}`,
    { mode: "cors" }
  );
  const responseJson = await response.json();
  console.log(responseJson);
  //   img.src = responseJson.data.images.original.url;
}

export { asyncFetchWeather };
