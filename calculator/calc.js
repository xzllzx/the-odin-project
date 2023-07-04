let num1 = "",
  operator = "",
  num2 = "",
  selectedOperator = "",
  initCalc = true,
  input;
let container = document.querySelector(".container");
let result = document.querySelector(".current");
let history = document.querySelector(".history");

// Clear everything
function clear() {
  num1 = "";
  operator = "";
  num2 = "";
  initCalc = true;
  if (selectedOperator) selectedOperator.classList.remove("hover");
  result.textContent = "";
}

// Delete last input
function deleteLast() {
  result.textContent = result.textContent.slice(0, -1);
  if (num2 != "") {
    num2 = num2.slice(0, -1);
  } else if (operator != "") {
    operator = "";
  } else if (num1 != "") {
    num1 = num1.slice(0, -1);
  }
}

// Change number to positive or negative sign
function changeSign() {
  if (num2 || operator) {
    if (num2.charAt(0) == "-") num2 = num2.slice(1);
    else num2 = "-" + num2;
    result.textContent = num1 + operator + num2;
  } else {
    if (num1.charAt(0) == "-") num1 = num1.slice(1);
    else num1 = "-" + num1;
    result.textContent = num1;
  }
}

// Perform calculations after pressing an operator / =
function calculate(num1, operator, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

// Calculation helper functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Accepting operators
function operate(e) {
  // First operator
  if (operator == "") {
    operator = input;
    result.textContent += input;
    changeOperator(e);
    // Re-selecting operators, since num2 has not been selected
  } else if (num2 == "") {
    operator = input;
    result.textContent = num1 + operator + num2;
    changeOperator(e);
    // Subsequent operators - calculate, then store new operator
  } else {
    changeOperator(e);
    initCalc = false;
    result.textContent = calculate(num1, operator, num2);
    operator = input;
    result.textContent += input;
    num1 = result.textContent;
    num2 = "";
  }
}

// Selecting operator after the last selected button was an operator - replace
function changeOperator(e) {
  if (selectedOperator != "") selectedOperator.classList.remove("hover");
  selectedOperator = e.target;
  selectedOperator.classList.add("hover");
}

// Set expression output to num1
function setResultToNum1() {
  history.textContent = num1 + operator + num2;
  initCalc = false;
  num1 = result.textContent;
  operator = "";
  num2 = "";
}

// Main logic function for accepting click inputs
function clickButton(e) {
  input = e.target.textContent;
  if (input == "A/C") clear();
  else if (input == "+/-") changeSign();
  else if (["+", "-", "*", "/"].includes(input)) operate(e);
  else if (input == "DEL") {
    if (initCalc) deleteLast();
    else clear();
    // If input is a number
  } else if (!isNaN(input) || input == ".") {
    // num1
    if (operator == "") {
      // num1 stores result of previous calculation - start new expression
      if (!initCalc) clear();
      num1 += input;
      // num2
    } else num2 += input;
    result.textContent += input;
    // Only accept one operator: Evaluate if a subsequent operator was selected
  } else if (input == "=") {
    if (num2) {
      selectedOperator.classList.remove("hover");
      result.textContent = calculate(num1, operator, num2);
      setResultToNum1();
    } else if (operator == "") setResultToNum1();
  }
}

function allButtonsListen() {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", clickButton);
  });
}

allButtonsListen();
