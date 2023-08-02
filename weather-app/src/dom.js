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

function populateSlider() {
  const imageSlider = document.querySelector(".picture-slider");
  for (const [index, image] of imageList.entries()) {
    const navDot = document.createElement("span");
    navDot.innerHTML = index;

    navDot.addEventListener("click", function () {
      skipToImage(index, image);
    });

    imageSlider.appendChild(navDot);
  }
}

export { loadImages, loadIcons };
