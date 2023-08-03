function parseLocation(location) {
  const place = location.name;
  const date = new Date(location.localtime);
  return { place, date };
}

function parseCurrent(current) {
  const [
    tempC,
    tempF,
    feelsLikeC,
    feelsLikeF,
    conditionText,
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

  return {
    tempC,
    tempF,
    feelsLikeC,
    feelsLikeF,
    conditionText,
    conditionIcon,
    windSpeed,
  };
}

function parseForecast(forecast) {
  // Need daily for 8 days
  // Need hourly for 24 hours (1 day)
  const todayDate = new Date();
  const dailyList = [];
  const hourlyList = [];

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

  // console.log(dailyList);
  // console.log(hourlyList);

  const weekData = parseDays(dailyList);
  const dayData = parseHours(hourlyList);

  return { weekData, dayData };
}

function within24Hours(currentEpoch, targetEpoch) {
  const timeDifference = targetEpoch - currentEpoch;
  if (-3600000 <= timeDifference && timeDifference <= 86400000) return true;
  else return false;
}

function parseDays(dayList) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weekData = [];

  for (const day of dayList) {
    const dateTime = new Date(day.date);
    const weekday = weekdays[dateTime.getDay()];
    const maxTempC = day.day.maxtemp_c + " °C";
    const minTempC = day.day.mintemp_c + " °C";
    const maxTempF = day.day.maxtemp_f + " °F";
    const minTempF = day.day.mintemp_f + " °F";
    const conditionText = day.day.condition.text;
    const conditionIcon = "https:" + day.day.condition.icon;
    weekData.push({
      weekday,
      maxTempC,
      minTempC,
      maxTempF,
      minTempF,
      conditionText,
      conditionIcon,
    });
  }

  return weekData;
}

function parseHours(hourList) {
  const dayData = [];

  for (const hour of hourList) {
    const dateTime = new Date(hour.date);
    const timeHour = dateTime.getHours();
    const tempC = hour.temp_c + " °C";
    const tempF = hour.temp_f + " °F";
    const conditionText = hour.condition.text;
    const conditionIcon = "https:" + hour.condition.icon;
    dayData.push({ timeHour, tempC, tempF, conditionText, conditionIcon });
  }

  return dayData;
}

export { parseLocation, parseCurrent, parseForecast };
