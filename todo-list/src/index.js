import "./style.css";
import {
  showForm,
  setCurrentPage,
  displayAllTasks,
  hideForms,
} from "./dom-project-task";
import { submitTask, submitProject } from "./controller";
import { getAllTasks, getTodayTasks, getWeekTasks } from "./initialize";

// Sidebar
const allProjectsButton = document.querySelector("#button-all-projects");
const todayButton = document.querySelector("#button-today");
const weekButton = document.querySelector("#button-week");

const createTaskFromFormButton = document.querySelector("button.create-task");
const createTaskFromFormForm = document.querySelector("form#create-task");
const submitTaskForm = document.querySelector(
  `form#create-task button[type='submit']`
);
const closeFormButton = document.querySelector("button.exit-button");

const createProjectFromDomButton = document.querySelector(
  "button.create-project"
);
const createProjectFromDomForm = document.querySelector("form#create-project");
const submitProjectForm = document.querySelector(
  `form#create-project button[type='submit']`
);

// EVENT LISTENERS
createTaskFromFormButton.addEventListener("click", showForm);
createProjectFromDomButton.addEventListener("click", showForm);

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

closeFormButton.addEventListener("click", hideForms);
