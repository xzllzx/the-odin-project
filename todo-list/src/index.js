import "./style.css";
import {
  showForm,
  getCurrentPage,
  displayAllTasks,
} from "./dom-project-task.js";
import { submitTask, submitProject } from "./controller.js";
import { getAllTasks, getTodayTasks, getWeekTasks } from "./project-task.js";

// Main DOM Elements
const headerDiv = document.querySelector("#header");
const sidebarDiv = document.querySelector("#sidebar");
const mainContentDiv = document.querySelector("#main-content");

// Sidebar
const allButtons = document.querySelectorAll("button.page-link");

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

// EVENT LISTENERS
createTaskButton.addEventListener("click", showForm);
createProjectButton.addEventListener("click", showForm);

submitTaskForm.addEventListener("click", submitTask);
submitProjectForm.addEventListener("click", submitProject);

for (const button of allButtons) {
  button.addEventListener("click", getCurrentPage);
}

// Display projects
homeButton.addEventListener("click", function () {
  displayAllTasks(getAllTasks());
});

todayButton.addEventListener("click", function () {
  displayAllTasks(getTodayTasks());
});
weekButton.addEventListener("click", function () {
  displayAllTasks(getWeekTasks());
});
