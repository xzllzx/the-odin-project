import {
  createProject,
  addTaskToProject,
  addProjectToList,
  defaultProject,
} from "./project.js";
import { createTask } from "./task.js";
import {
  displayAllTasks,
  hideForms,
  addProjectToSidebar,
} from "./dom-project-task.js";

const allTasksTable = document.querySelector("#all-tasks > table");

const submitTask = (e) => {
  const newTask = createTask(e);
  hideForms(e);
  addTaskToProject(defaultProject, newTask);
  displayAllTasks(allTasksTable, defaultProject);
};

const submitProject = (e) => {
  const newProject = createProject(e);
  hideForms(e);
  addProjectToList(newProject);
  addProjectToSidebar(newProject);
};

export { submitTask, submitProject };
