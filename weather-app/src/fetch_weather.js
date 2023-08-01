const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

const body = document.querySelector("body");

function asyncFetchForecast(targetLocation) {
  // const response = await fetch(
  //   `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${targetLocation}`
  // );
  // const responseJson = await response.json();
  // console.log(responseJson);

  const responseJson = `{
    "location": {
      "name": "Paris",
      "region": "Ile-de-France",
      "country": "France",
      "lat": 48.86,
      "lon": 2.35,
      "tz_id": "Europe/Paris",
      "localtime_epoch": 1690904881,
      "localtime": "2023-08-01 17:48"
    },
    "current": {
      "last_updated_epoch": 1690904700,
      "last_updated": "2023-08-01 17:45",
      "temp_c": 19,
      "temp_f": 66.2,
      "is_day": 1,
      "condition": {
        "text": "Partly cloudy",
        "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
        "code": 1003
      },
      "wind_mph": 11.9,
      "wind_kph": 19.1,
      "wind_degree": 240,
      "wind_dir": "WSW",
      "pressure_mb": 1007,
      "pressure_in": 29.74,
      "precip_mm": 0.1,
      "precip_in": 0,
      "humidity": 83,
      "cloud": 75,
      "feelslike_c": 19,
      "feelslike_f": 66.2,
      "vis_km": 10,
      "vis_miles": 6,
      "uv": 5,
      "gust_mph": 12.8,
      "gust_kph": 20.5
    },
    "forecast": {
      "forecastday": [
        {
          "date": "2023-08-01",
          "date_epoch": 1690848000,
          "day": {
            "maxtemp_c": 21.8,
            "maxtemp_f": 71.2,
            "mintemp_c": 15.2,
            "mintemp_f": 59.4,
            "avgtemp_c": 18.8,
            "avgtemp_f": 65.9,
            "maxwind_mph": 16.3,
            "maxwind_kph": 26.3,
            "totalprecip_mm": 18.8,
            "totalprecip_in": 0.74,
            "totalsnow_cm": 0,
            "avgvis_km": 9,
            "avgvis_miles": 5,
            "avghumidity": 74,
            "daily_will_it_rain": 1,
            "daily_chance_of_rain": 98,
            "daily_will_it_snow": 0,
            "daily_chance_of_snow": 0,
            "condition": {
              "text": "Moderate rain",
              "icon": "//cdn.weatherapi.com/weather/64x64/day/302.png",
              "code": 1189
            },
            "uv": 4
          },
          "astro": {
            "sunrise": "06:23 AM",
            "sunset": "09:30 PM",
            "moonrise": "10:00 PM",
            "moonset": "05:13 AM",
            "moon_phase": "Full Moon",
            "moon_illumination": "99",
            "is_moon_up": 1,
            "is_sun_up": 0
          },
          "hour": [
            {
              "time_epoch": 1690840800,
              "time": "2023-08-01 00:00",
              "temp_c": 18.3,
              "temp_f": 64.9,
              "is_day": 0,
              "condition": {
                "text": "Light rain shower",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/353.png",
                "code": 1240
              }
            },
            {
              "time_epoch": 1690844400,
              "time": "2023-08-01 01:00",
              "temp_c": 18.1,
              "temp_f": 64.6,
              "is_day": 0,
              "condition": {
                "text": "Moderate or heavy rain with thunder",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/389.png",
                "code": 1276
              }
            },
            {
              "time_epoch": 1690848000,
              "time": "2023-08-01 02:00",
              "temp_c": 18.1,
              "temp_f": 64.6,
              "is_day": 0,
              "condition": {
                "text": "Light drizzle",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/266.png",
                "code": 1153
              }
            },
            {
              "time_epoch": 1690851600,
              "time": "2023-08-01 03:00",
              "temp_c": 17.5,
              "temp_f": 63.5,
              "is_day": 0,
              "condition": {
                "text": "Moderate or heavy rain with thunder",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/389.png",
                "code": 1276
              }
            },
            {
              "time_epoch": 1690855200,
              "time": "2023-08-01 04:00",
              "temp_c": 16.5,
              "temp_f": 61.7,
              "is_day": 0,
              "condition": {
                "text": "Moderate rain at times",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/299.png",
                "code": 1186
              }
            },
            {
              "time_epoch": 1690858800,
              "time": "2023-08-01 05:00",
              "temp_c": 15.6,
              "temp_f": 60.1,
              "is_day": 0,
              "condition": {
                "text": "Patchy light drizzle",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/263.png",
                "code": 1150
              }
            },
            {
              "time_epoch": 1690862400,
              "time": "2023-08-01 06:00",
              "temp_c": 15,
              "temp_f": 59,
              "is_day": 0,
              "condition": {
                "text": "Light rain shower",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/353.png",
                "code": 1240
              }
            },
            {
              "time_epoch": 1690866000,
              "time": "2023-08-01 07:00",
              "temp_c": 15.4,
              "temp_f": 59.7,
              "is_day": 1,
              "condition": {
                "text": "Light rain",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/296.png",
                "code": 1183
              }
            },
            {
              "time_epoch": 1690869600,
              "time": "2023-08-01 08:00",
              "temp_c": 15.8,
              "temp_f": 60.4,
              "is_day": 1,
              "condition": {
                "text": "Overcast",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/122.png",
                "code": 1009
              }
            },
            {
              "time_epoch": 1690873200,
              "time": "2023-08-01 09:00",
              "temp_c": 16.3,
              "temp_f": 61.3,
              "is_day": 1,
              "condition": {
                "text": "Overcast",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/122.png",
                "code": 1009
              }
            },
            {
              "time_epoch": 1690876800,
              "time": "2023-08-01 10:00",
              "temp_c": 17.4,
              "temp_f": 63.3,
              "is_day": 1,
              "condition": {
                "text": "Overcast",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/122.png",
                "code": 1009
              }
            },
            {
              "time_epoch": 1690880400,
              "time": "2023-08-01 11:00",
              "temp_c": 18.6,
              "temp_f": 65.5,
              "is_day": 1,
              "condition": {
                "text": "Cloudy",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/119.png",
                "code": 1006
              }
            },
            {
              "time_epoch": 1690884000,
              "time": "2023-08-01 12:00",
              "temp_c": 19.8,
              "temp_f": 67.6,
              "is_day": 1,
              "condition": {
                "text": "Overcast",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/122.png",
                "code": 1009
              }
            },
            {
              "time_epoch": 1690887600,
              "time": "2023-08-01 13:00",
              "temp_c": 21.1,
              "temp_f": 70,
              "is_day": 1,
              "condition": {
                "text": "Patchy rain possible",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
                "code": 1063
              }
            },
            {
              "time_epoch": 1690891200,
              "time": "2023-08-01 14:00",
              "temp_c": 20.7,
              "temp_f": 69.3,
              "is_day": 1,
              "condition": {
                "text": "Patchy rain possible",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
                "code": 1063
              }
            },
            {
              "time_epoch": 1690894800,
              "time": "2023-08-01 15:00",
              "temp_c": 21.9,
              "temp_f": 71.4,
              "is_day": 1,
              "condition": {
                "text": "Light rain shower",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/353.png",
                "code": 1240
              }
            },
            {
              "time_epoch": 1690898400,
              "time": "2023-08-01 16:00",
              "temp_c": 21.7,
              "temp_f": 71.1,
              "is_day": 1,
              "condition": {
                "text": "Light rain shower",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/353.png",
                "code": 1240
              }
            },
            {
              "time_epoch": 1690902000,
              "time": "2023-08-01 17:00",
              "temp_c": 21.9,
              "temp_f": 71.4,
              "is_day": 1,
              "condition": {
                "text": "Patchy rain possible",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
                "code": 1063
              }
            },
            {
              "time_epoch": 1690905600,
              "time": "2023-08-01 18:00",
              "temp_c": 21.7,
              "temp_f": 71.1,
              "is_day": 1,
              "condition": {
                "text": "Patchy rain possible",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
                "code": 1063
              }
            },
            {
              "time_epoch": 1690909200,
              "time": "2023-08-01 19:00",
              "temp_c": 21.4,
              "temp_f": 70.5,
              "is_day": 1,
              "condition": {
                "text": "Light rain shower",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/353.png",
                "code": 1240
              }
            },
            {
              "time_epoch": 1690912800,
              "time": "2023-08-01 20:00",
              "temp_c": 19.8,
              "temp_f": 67.6,
              "is_day": 1,
              "condition": {
                "text": "Partly cloudy",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                "code": 1003
              }
            },
            {
              "time_epoch": 1690916400,
              "time": "2023-08-01 21:00",
              "temp_c": 19.4,
              "temp_f": 66.9,
              "is_day": 1,
              "condition": {
                "text": "Partly cloudy",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                "code": 1003
              }
            },
            {
              "time_epoch": 1690920000,
              "time": "2023-08-01 22:00",
              "temp_c": 19.4,
              "temp_f": 66.9,
              "is_day": 0,
              "condition": {
                "text": "Partly cloudy",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
                "code": 1003
              }
            },
            {
              "time_epoch": 1690923600,
              "time": "2023-08-01 23:00",
              "temp_c": 18.6,
              "temp_f": 65.5,
              "is_day": 0,
              "condition": {
                "text": "Cloudy",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/119.png",
                "code": 1006
              }
            }
          ]
        }
      ]
    }
  }
`;

  console.log(JSON.parse(responseJson));

  let { location, current, forecast } = JSON.parse(responseJson);

  console.log(current);
}

export { asyncFetchForecast };
