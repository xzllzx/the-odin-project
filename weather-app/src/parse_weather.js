function parseLocation(location) {
  const place = location.name;
  const date = new Date(location.localtime);
  console.log(place);
  console.log(date);
  console.log(date.toDateString());
  console.log(date.toTimeString());
  console.log(date.toISOString());
  return;
}

function parseCurrent(current) {
  const [
    tempC,
    tempF,
    feelsLikeC,
    feelsLikeF,
    condition,
    conditionIcon,
    windSpeed,
  ] = [
    current.temp_c,
    current.temp_f,
    current.feelslike_c,
    current.feelslike_f,
    current.condition.text,
    current.condition.icon,
    current.wind_kph,
  ];

  return;
}

function parseForecast(forecast) {
  // Need daily for 8 days
  // Need hourly for 24 hours (1 day)
  const todayDate = new Date();
  const dailyList = [];
  const hourlyList = [];

  console.log(`todayDate is ${todayDate}`);

  for (const day of forecast.forecastday) {
    dailyList.push(day);

    for (const hour of day.hour) {
      const hourWithin24Hours = within24Hours(
        todayDate.getTime(),
        hour.time_epoch * 1000
      );
      if (hourWithin24Hours) {
        hourlyList.push(hour);
      }
    }
  }

  console.log(dailyList);
  console.log(hourlyList);
  return;
}

function within24Hours(currentEpoch, targetEpoch) {
  const timeDifference = targetEpoch - currentEpoch;
  if (-3600000 <= timeDifference && timeDifference <= 86400000) return true;
  else return false;
}

function parseDays(days) {
  return;
}

function parseHours(day) {
  console.log(day);
  for (const hour of day.hour) {
    console.log(hour);
  }
  return;
}

export { parseLocation, parseCurrent, parseForecast };
