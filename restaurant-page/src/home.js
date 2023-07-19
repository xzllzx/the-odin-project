function homePage(mainDiv) {
  const displayPageDiv = document.createElement("div");
  displayPageDiv.classList.add("home");
  displayPageDiv.innerHTML = "This is the Home Page";

  return displayPageDiv;
}

export { homePage };
