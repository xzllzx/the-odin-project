import "./style.css";
import { homePage } from "./home.js";
import { loadMenu } from "./menu.js";

const contentDiv = document.querySelector("div#content");

// Header
function addHeader() {
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");
  const restaurantNameDiv = document.createElement("div");
  restaurantNameDiv.classList.add("restaurant-name");
  restaurantNameDiv.innerHTML = "Welcome to the Krusty Krab!";
  headerDiv.appendChild(restaurantNameDiv);
  return headerDiv;
}

function addHeaderPages(page) {
  const pageButton = document.createElement("button");
  pageButton.innerHTML = page;
  pageButton.classList.add("page");
  return pageButton;
}

const headerDiv = addHeader();
contentDiv.appendChild(headerDiv);

const homeButtonDiv = addHeaderPages("Home");
const menuButtonDiv = addHeaderPages("Menu");
const contactButtonDiv = addHeaderPages("Contact");
headerDiv.append(homeButtonDiv, menuButtonDiv, contactButtonDiv);

// ["Home", "Menu", "Contact"].forEach((page) => {
//   headerDiv.appendChild(addHeaderPages(page));
// });

function addMainContent() {
  const mainSection = document.createElement("div");
  mainSection.classList.add("main-content");

  const displaySection = document.createElement("div");
  displaySection.classList.add("display-page");

  mainSection.appendChild(displaySection);
  contentDiv.appendChild(mainSection);

  return displaySection;
}

const displaySectionDiv = addMainContent();

// Main Section - Home Page
const homePageDiv = homePage();
displaySectionDiv.appendChild(homePageDiv);
// contentDiv.appendChild(homePageDiv);

// Main Section - Home Page
// const menuPageDiv = menuPage();
// contentDiv.appendChild(menuPageDiv);
