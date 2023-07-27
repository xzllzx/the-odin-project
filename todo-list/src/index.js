import "./style.css";
import {
  showForm,
  setCurrentPage,
  displayAllTasks,
} from "./dom-project-task.js";
import { submitTask, submitProject } from "./controller.js";
import { getAllTasks, getTodayTasks, getWeekTasks } from "./project-task.js";

// Main DOM Elements
const headerDiv = document.querySelector("#header");
const sidebarDiv = document.querySelector("#sidebar");
const mainContentDiv = document.querySelector("#main-content");

// Sidebar

const allProjectsButton = document.querySelector("#all-projects-button");
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

// Display projects
allProjectsButton.addEventListener("click", function (e) {
  displayAllTasks(getAllTasks());
  setCurrentPage(e);
});

todayButton.addEventListener("click", function (e) {
  displayAllTasks(getTodayTasks());
  setCurrentPage(e);
});

weekButton.addEventListener("click", function (e) {
  displayAllTasks(getWeekTasks());
  setCurrentPage(e);
});
