import {
  createTask,
  createProject,
  addProjectToList,
  defaultProject,
} from "./project-task.js";
import {
  displayAllTasks,
  hideForms,
  addProjectToSidebar,
} from "./dom-project-task.js";

const allTasksTable = document.querySelector("#all-tasks > table");

const submitTask = (e) => {
  const newTask = createTask(e);
  hideForms(e);
  displayAllTasks(allTasksTable, defaultProject);
};

const submitProject = (e) => {
  const newProject = createProject(e);
  hideForms(e);
  addProjectToList(newProject);
  addProjectToSidebar(newProject);
};

export { submitTask, submitProject };
