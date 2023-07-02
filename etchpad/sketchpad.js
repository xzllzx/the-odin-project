let container = document.querySelector(".container");
let gridselect = document.querySelector("button.gridselect");
const gridSize = 960;

function gridSizeSelection() {
  let size = prompt("What size would you like the square grid to be?");
  // Remove all squares by deleting innerHTML
  container.innerHTML = "";
  createGrid(size);
  addHoverListener();
}

// Previously used for adding/removing class, instead of random color on hover
function changeToBlue(e) {
  e.target.classList.add("hover");
}

function changeToRandom(e) {
  e.target.dataset["hoverCount"] =
    parseInt(e.target.getAttribute("data-hover-count")) + 1;
  // Generate random color hex code
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  e.target.style.backgroundColor = `#${randomColor}`;
}

function changeBack(e) {
  // Previously used for adding/removing class, instead of random color on hover
  //   e.target.classList.remove("hover");
  let hoverCount = e.target.getAttribute("data-hover-count");
  let newColor = 255 - hoverCount * 25.5;
  setTimeout(function () {
    e.target.style.backgroundColor = `rgb(${newColor}, ${newColor}, ${newColor})`;
    if (hoverCount >= 5) e.target.style.color = "white";
  }, 500);
}

function addHoverListener() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", changeToRandom);
    square.addEventListener("mouseout", changeBack);
  });
}

function createGrid(gridRows) {
  for (let i = 0; i < gridRows; i++) {
    let row = document.createElement("div");
    row.className = "row";
    row.id = i;
    for (let j = 0; j < gridRows; j++) {
      let square = document.createElement("div");
      square.className = "square";
      square.id = `${i}-${j}`;
      // Track number of times cell has been hovered over
      square.dataset["hoverCount"] = 0;
      square.textContent = `${j}`;
      square.style.backgroundColor = "rgb(255, 255, 255)";
      row.appendChild(square);
    }
    container.appendChild(row);
  }
  setSquareSize(gridRows);
}

function setSquareSize(gridRows) {
  let squares = document.querySelectorAll(".square");
  const squareSize = gridSize / gridRows;
  squares.forEach((square) => {
    square.style.height = `${squareSize}px`;
    square.style.width = `${squareSize}px`;
  });
}

createGrid(16);
addHoverListener();

gridselect.addEventListener("click", gridSizeSelection);
