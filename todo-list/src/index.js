import "./style.css";
import { createTask } from "./task.js";
import { createProject } from "./project.js";
import { showTaskForm, showProjectForm, hideForms } from "./task-form-dom.js";

const headerDiv = document.querySelector("#header");
const sidebarDiv = document.querySelector("#sidebar");
const mainContentDiv = document.querySelector("#main-content");

const createTaskButton = document.querySelector("button.create-task");
const createTaskForm = document.querySelector("form#create-task");
const submitTaskForm = document.querySelector(
  `form#create-task button[type='submit']`
);
const createProjectForm = document.querySelector("form#create-project");
const submitProjectForm = document.querySelector(
  `form#create-project button[type='submit']`
);

console.log(headerDiv, sidebarDiv, mainContentDiv);

createTaskButton.addEventListener("click", showTaskForm);

submitTaskForm.addEventListener("click", (e) => {
  createTask(e);
  hideForms(e);
});

submitProjectForm.addEventListener("click", (e) => {
  createProject(e);
  hideForms(e);
});

// submitTaskForm.addEventListener("click", parseTaskInput);
