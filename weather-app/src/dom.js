import backgroundImage from "./images/background.jpg";

function loadImages() {
  const background = document.querySelector("img.background");
  background.src = backgroundImage;
}

export { loadImages };
