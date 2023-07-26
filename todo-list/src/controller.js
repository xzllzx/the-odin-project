import { createTask, createProject, defaultProject } from "./project-task.js";
import {
  displayAllTasks,
  hideForms,
  addProjectToSidebar,
  addProjectToTaskDropdown,
} from "./dom-project-task.js";

const submitTask = (e) => {
  const project = createTask(e);
  hideForms(e);
  displayAllTasks(project);
};

const submitProject = (e) => {
  const newProject = createProject(e);
  hideForms(e);
  addProjectToSidebar(newProject);
  addProjectToTaskDropdown(newProject);
};

export { submitTask, submitProject };
