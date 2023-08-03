import backgroundImage from "./images/background.jpg";
import feelsIcon from "./images/feels-like-icon.svg";
import humidityIcon from "./images/humidity-icon.svg";
import rainIcon from "./images/rain-icon.svg";
import windIcon from "./images/wind-icon.svg";

function loadImages() {
  const background = document.querySelector("img.background");
  background.src = backgroundImage;
}

function loadIcons() {
  const iconContainers = document.querySelectorAll(".icon-container");
  const iconList = [feelsIcon, humidityIcon, rainIcon, windIcon];

  iconContainers.forEach((container, index) => {
    const img = container.querySelector("img");
    img.src = iconList[index];
  });
}

function addConditionIcon(parentElement, conditionData) {
  const conditionImage = parentElement.querySelector(`img.condition-icon`);
  conditionImage.alt = conditionData.conditionText;
  conditionImage.src = conditionData.conditionIcon;

  return conditionImage;
}

function populateTopLeft(data) {
  const topLeftDiv = document.querySelector(".top-left");

  const conditionTextDiv = topLeftDiv.querySelector(".condition");
  const locationDiv = topLeftDiv.querySelector(".location");
  const dateDiv = topLeftDiv.querySelector(".date");
  // const timeDiv = topLeftDiv.querySelector(".time");
  const celsiusDiv = topLeftDiv.querySelector(".celsius");
  const fahrenheitDiv = topLeftDiv.querySelector(".fahrenheit");

  conditionTextDiv.textContent = data.currentData.conditionText;
  locationDiv.textContent = data.locationData.place;
  dateDiv.textContent = new Date();
  celsiusDiv.textContent = data.currentData.tempC;
  fahrenheitDiv.textContent = data.currentData.tempF;

  addConditionIcon(topLeftDiv, data.currentData);
}

function populateTopRight(data) {
  console.log(data);
  const topRightDiv = document.querySelector(".top-right");
  const feelsLikeCelsiusDiv = topRightDiv.querySelector(
    ".feels-like > .celsius"
  );
  const feelsLikeFahrenheitDiv = topRightDiv.querySelector(
    ".feels-like > .fahrenheit"
  );
  const humidityDiv = topRightDiv.querySelector(".humidity > .value");
  const rainChanceDiv = topRightDiv.querySelector(".chance-of-rain > .value");
  const windSpeedDiv = topRightDiv.querySelector(".wind-speed > .value");

  feelsLikeCelsiusDiv.textContent = data.currentData.feelsLikeC;
  feelsLikeFahrenheitDiv.textContent = data.currentData.feelsLikeF;
  humidityDiv.textContent = data.currentData.humidity;
  rainChanceDiv.textContent = data.forecastData.weekData[0].rainChance;
  windSpeedDiv.textContent = data.currentData.windSpeed;
}

function populateDailySlider(dayData) {
  const imageSlider = document.querySelector(".slider.daily");

  for (const [index, hour] of dayData.entries()) {
    const hourContainer = imageSlider.querySelector(
      `#hour-container-${index + 1}`
    );

    // hourContainer.textContent = JSON.stringify(hour);

    for (const attribute in hour) {
      const div = hourContainer.querySelector(`.${attribute}`);
      if (div) {
        div.textContent = hour[attribute];
      }
    }

    addConditionIcon(hourContainer, hour);
  }
}

function populateWeeklySlider(weekData) {
  const imageSlider = document.querySelector(".slider.weekly");

  for (const [index, day] of weekData.entries()) {
    const weekdayContainer = imageSlider.querySelector(
      `#weekday-container-${index + 1}`
    );

    for (const attribute in day) {
      const div = weekdayContainer.querySelector(`.${attribute}`);
      if (div) {
        div.textContent = day[attribute];
      }
    }

    addConditionIcon(weekdayContainer, day);
  }
}

function addToggleTemperature() {
  const toggleCelsius = document.querySelector("button.toggle-celsius");
  const toggleFahrenheit = document.querySelector("button.toggle-fahrenheit");

  const celsiusDivs = document.querySelectorAll(".celsius");
  const fahrenheitDivs = document.querySelectorAll(".fahrenheit");

  toggleCelsius.addEventListener("click", function () {
    for (const div of celsiusDivs) {
      div.style.display = "block";
    }

    for (const div of fahrenheitDivs) {
      div.style.display = "none";
    }
  });

  toggleFahrenheit.addEventListener("click", function () {
    for (const div of celsiusDivs) {
      div.style.display = "none";
    }

    for (const div of fahrenheitDivs) {
      div.style.display = "block";
    }
  });
}

function addToggleSliders() {
  const toggleSliderDaily = document.querySelector("button.daily");
  const toggleSliderWeekly = document.querySelector("button.weekly");

  const sliderDaily = document.querySelector(".slider.daily");
  const sliderWeekly = document.querySelector(".slider.weekly");

  toggleSliderDaily.addEventListener("click", function () {
    sliderDaily.style.display = "grid";
    sliderWeekly.style.display = "none";
  });

  toggleSliderWeekly.addEventListener("click", function () {
    sliderDaily.style.display = "none";
    sliderWeekly.style.display = "grid";
  });
}

export {
  loadImages,
  loadIcons,
  populateTopLeft,
  populateTopRight,
  populateDailySlider,
  populateWeeklySlider,
  addToggleTemperature,
  addToggleSliders,
};
