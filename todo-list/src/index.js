import "./style.css";
import { showTaskForm, hideTaskForm } from "./task-form-dom.js";

const headerDiv = document.querySelector("#header");
const sidebarDiv = document.querySelector("#sidebar");
const mainContentDiv = document.querySelector("#main-content");

const createTaskButton = document.querySelector("button.create-task");
const createTaskForm = document.querySelector("form.create-task");
const submitTaskForm = document.querySelector(
  `form.create-task button[type='submit']`
);

console.log(headerDiv, sidebarDiv, mainContentDiv);

createTaskButton.addEventListener("click", showTaskForm);

submitTaskForm.addEventListener("click", (e) => {
  createTask(e);
  hideTaskForm(e);
});

// submitTaskForm.addEventListener("click", parseTaskInput);
