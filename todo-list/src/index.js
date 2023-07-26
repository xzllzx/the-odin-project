import "./style.css";
import { showTaskForm } from "./task-form-dom.js";
import { submitTask, submitProject } from "./controller.js";

// DOM Elements
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

// Event listeners
createTaskButton.addEventListener("click", showTaskForm);
submitTaskForm.addEventListener("click", submitTask);
submitProjectForm.addEventListener("click", submitProject);

// submitTaskForm.addEventListener("click", parseTaskInput);
