import { createTask, createProject, defaultProject } from "./project-task.js";
import {
  displayAllTasks,
  hideForms,
  addProjectToSidebar,
  addProjectToTaskDropdown,
} from "./dom-project-task.js";

const allTasksTable = document.querySelector("#all-tasks > table");

const submitTask = (e) => {
  createTask(e);
  hideForms(e);
  displayAllTasks(allTasksTable, defaultProject);
};

const submitProject = (e) => {
  const newProject = createProject(e);
  hideForms(e);
  addProjectToSidebar(newProject);
  addProjectToTaskDropdown(newProject);
};

export { submitTask, submitProject };
