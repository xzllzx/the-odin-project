// Header
function addHeader() {
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");
  const websiteNameDiv = document.createElement("div");
  websiteNameDiv.classList.add("website-name");
  websiteNameDiv.innerHTML = "TO-DO LIST WEBSITE";
  headerDiv.appendChild(websiteNameDiv);
  return headerDiv;
}

// Sidebar
function addSidebar() {
  const sidebarDiv = document.createElement("div");
  sidebarDiv.classList.add("sidebar");

  sidebarDiv.innerHTML = "Side";

  return sidebarDiv;
}

// Main content
function addMainContent() {
  const mainContentDiv = document.createElement("div");
  mainContentDiv.classList.add("main-content");

  mainContentDiv.innerHTML = "Main";

  return mainContentDiv;
}

export { addHeader, addSidebar, addMainContent };
