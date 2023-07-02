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

// Previously used for adding/removing class, instead of random color on hover
function changeBack(e) {
  e.target.classList.remove("hover");
}

function addHoverListener() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", function (e) {
      // Generate random color hex code
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      e.target.style.backgroundColor = `#${randomColor}`;
    });
    square.addEventListener("mouseout", function (e) {
      e.target.style.backgroundColor = "#FF0000";
    });
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
      square.textContent = `${j}`;
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
