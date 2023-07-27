import "./style.css";
import { showForm } from "./dom-project-task.js";
import { submitTask, submitProject } from "./controller.js";
import { getTodayTasks, getWeekTasks } from "./project-task.js";

// Main DOM Elements
const headerDiv = document.querySelector("#header");
const sidebarDiv = document.querySelector("#sidebar");
const mainContentDiv = document.querySelector("#main-content");

// Sidebar
const homeButton = document.querySelector("#home-button");
const todayButton = document.querySelector("#today-button");
const weekButton = document.querySelector("#week-button");

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

todayButton.addEventListener("click", getTodayTasks);
weekButton.addEventListener("click", getWeekTasks);
