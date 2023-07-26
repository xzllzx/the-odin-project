import { defaultProject, createProject, addTaskToProject } from "./project.js";
import { createTask } from "./task.js";
import { hideForms } from "./task-form-dom.js";
import { displayAllTasks } from "./task-display.js";

const exampleTask = createTask("Deez", "Deez Nuts", "2014-09-09", "low");
console.log(exampleTask);

const submitTask = (e) => {
  const newTask = createTask(e);
  hideForms(e);
  addTaskToProject(defaultProject, newTask);
  displayAllTasks(defaultProject);
};

const submitProject = (e) => {
  createProject(e);
  hideForms(e);
};

export { submitTask, submitProject };
