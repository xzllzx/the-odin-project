import "./style.css";
import Burger from "./burger.jpg";

// const burgerImage = new Image();
// burgerImage.src = Burger;
// contentDiv.appendChild(burgerImage);

const contentDiv = document.querySelector("div#content");

function mainSections() {
  const headerDiv = document.createElement("div");
  headerDiv.innerHTML = "Welcome to the Krusty Krab!";
  headerDiv.classList.add("header");

  const mainDiv = document.createElement("div");
  mainDiv.innerHTML = "Food?";
  mainDiv.classList.add("main-content");

  return [headerDiv, mainDiv];
}

function component() {
  const element = document.createElement("div");
  element.innerHTML = "Menu";
  return element;
}

// console.log(mainSections());
// console.log(...mainSections());

contentDiv.append(...mainSections());
contentDiv.appendChild(component());
