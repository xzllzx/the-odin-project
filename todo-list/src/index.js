import "./style.css";
import { showTodoForm, hideTodoForm } from "./todo-form-dom.js";
import { createTodo } from "./todo.js";

const headerDiv = document.querySelector("#header");
const sidebarDiv = document.querySelector("#sidebar");
const mainContentDiv = document.querySelector("#main-content");

const createTodoButton = document.querySelector("button.create-todo");
const createTodoForm = document.querySelector("form.create-todo");
const submitTodoForm = document.querySelector(
  `form.create-todo button[type='submit']`
);

console.log(headerDiv, sidebarDiv, mainContentDiv);

createTodoButton.addEventListener("click", showTodoForm);
submitTodoForm.addEventListener("click", (e) => {
  createTodo(e);
  hideTodoForm(e);
});

// submitTodoForm.addEventListener("click", parseTodoInput);
