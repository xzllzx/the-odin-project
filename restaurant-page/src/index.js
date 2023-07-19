import "./style.css";
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { contactPage } from "./contact.js";

const contentDiv = document.querySelector("div#content");

const headerDiv = addHeader();

contentDiv.appendChild(headerDiv);

const homeButtonDiv = addHeaderPages("Home");
const menuButtonDiv = addHeaderPages("Menu");
const contactButtonDiv = addHeaderPages("Contact");

const displaySectionDiv = addMainContent();

const homePageDiv = homePage();
const menuPageDiv = menuPage();
const contactPageDiv = contactPage();

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
  pageButton.classList.add("page-button");
  return pageButton;
}

const buttonDivs = [homeButtonDiv, menuButtonDiv, contactButtonDiv];
headerDiv.append(...buttonDivs);

// Main Section
function addMainContent() {
  const mainSection = document.createElement("div");
  mainSection.classList.add("main-content");

  const displaySection = document.createElement("div");
  displaySection.classList.add("display-page");

  mainSection.appendChild(displaySection);
  contentDiv.appendChild(mainSection);

  return displaySection;
}

// Main Section - Home Page
displaySectionDiv.appendChild(homePageDiv);
homePageDiv.classList.add("hidden");

// Main Section - Menu Page
displaySectionDiv.appendChild(menuPageDiv);
// menuPageDiv.classList.add("hidden");

// Main Section - Contact Page
displaySectionDiv.appendChild(contactPageDiv);
contactPageDiv.classList.add("hidden");

// Page Navigation
const pageArr = [homePageDiv, menuPageDiv, contactPageDiv];

function showPage(targetPage) {
  for (const page of pageArr) {
    if (page === targetPage) {
      page.classList.remove("hidden");

      //   for (const child of page.childNodes) {
      //     if (child.nodeType === Node.ELEMENT_NODE) {
      //       addClassToElementAndChildren(child, className);
      //     }
      //   }
    } else page.classList.add("hidden");
  }
}

homeButtonDiv.addEventListener("click", () => showPage(homePageDiv));
menuButtonDiv.addEventListener("click", () => showPage(menuPageDiv));
contactButtonDiv.addEventListener("click", () => showPage(contactPageDiv));
