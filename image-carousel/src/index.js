import "./style.css";
import Image_1 from "../images/bones.png";
import Image_2 from "../images/cyberpunk.jpg";

const previousArrow = document.querySelector(".arrow.previous");
const nextArrow = document.querySelector(".arrow.next");
const pictureImage = document.querySelector(".picture-container > img");
const pictureSlider = document.querySelector(".picture-slider");

// Create a function to import all images from a directory
function importAllImages() {
  const imageList = [];
  // Use `require.context` to dynamically import all images from `images` folder
  const r = require.context("../images/", false, /\.(png|jpe?g|svg)$/);
  r.keys().forEach((filename) => imageList.push(r(filename)));
  return imageList;
}

// INITIALIZE DOM ELEMENTS
function showPreviousPicture() {
  if (count <= 0) count += imageCount;
  pictureImage.src = imageList[--count];
  console.log(count);
}

function showNextPicture() {
  if (count >= imageCount - 1) count -= imageCount;
  pictureImage.src = imageList[++count];
  console.log(count);
}

function skipToImage(index, image) {
  count = index;
  console.log(count);
  pictureImage.src = image;
}

function populateImageSlider() {
  const imageSlider = document.querySelector(".picture-slider");
  for (const [index, image] of imageList.entries()) {
    const navDot = document.createElement("span");
    navDot.className = "circle";
    navDot.innerHTML = index;

    navDot.addEventListener("click", function () {
      skipToImage(index, image);
    });

    imageSlider.appendChild(navDot);
  }
}

// INITIALIZE VALUES
const imageList = importAllImages();

let count = -1;
const imageCount = imageList.length;
showNextPicture();
populateImageSlider();

// ADD EVENT LISTENERS
previousArrow.addEventListener("click", showPreviousPicture);
nextArrow.addEventListener("click", showNextPicture);
