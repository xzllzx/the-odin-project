import "./style.css";
import { addHeader, addSidebar, addMainContent } from "./main_dom.js";

const contentDiv = document.querySelector("div#content");
const headerDiv = addHeader();
const sidebarDiv = addSidebar();
const mainContentDiv = addMainContent();

contentDiv.appendChild(headerDiv);
contentDiv.appendChild(sidebarDiv);
contentDiv.appendChild(mainContentDiv);
