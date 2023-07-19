function loadMenu(mainDiv) {
  const displayPageDiv = document.createElement("div");
  displayPageDiv.classList.add("menu");
  displayPageDiv.innerHTML = "This is the Menu Page";

  return displayPageDiv;
}

export { loadMenu };
