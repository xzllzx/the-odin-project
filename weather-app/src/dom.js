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

function populateDailySlider(dayData) {
  const imageSlider = document.querySelector(".slider.daily");

  for (const [index, hour] of dayData.entries()) {
    const hourContainer = imageSlider.querySelector(
      `#hour-container-${index + 1}`
    );

    // hourContainer.textContent = JSON.stringify(hour);

    for (const attribute in hour) {
      const div = hourContainer.querySelector(`#${attribute}`);
      if (div) {
        div.textContent = hour[attribute];
      }
    }

    const conditionImage = hourContainer.querySelector(`img.condition-icon`);
    conditionImage.alt = hour.conditionText;
    conditionImage.src = hour.conditionIcon;
  }
}

function populateWeeklySlider(weekData) {
  const imageSlider = document.querySelector(".slider.weekly");

  for (const [index, day] of weekData.entries()) {
    const weekdayContainer = imageSlider.querySelector(
      `#weekday-container-${index + 1}`
    );

    for (const attribute in day) {
      const div = weekdayContainer.querySelector(`#${attribute}`);
      if (div) {
        div.textContent = day[attribute];
      }
    }

    const conditionImage = weekdayContainer.querySelector(`img.condition-icon`);
    conditionImage.alt = day.conditionText;
    conditionImage.src = day.conditionIcon;
  }
}

export { loadImages, loadIcons, populateDailySlider, populateWeeklySlider };
