import { defaultProject, createProject, addTaskToProject } from "./project.js";
import { createTask } from "./task.js";
import { hideForms } from "./task-form-dom.js";
import { displayAllTasks } from "./task-display.js";

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
  //   addProjectToList();
  //   addProjectToSidebar();
};

export { submitTask, submitProject };
