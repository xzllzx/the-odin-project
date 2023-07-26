import "./style.css";
import { showForm } from "./dom-project-task.js";
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

const createProjectButton = document.querySelector("button.create-project");
const createProjectForm = document.querySelector("form#create-project");
const submitProjectForm = document.querySelector(
  `form#create-project button[type='submit']`
);

// Event listeners
createTaskButton.addEventListener("click", showForm);
createProjectButton.addEventListener("click", showForm);

submitTaskForm.addEventListener("click", submitTask);
submitProjectForm.addEventListener("click", submitProject);
