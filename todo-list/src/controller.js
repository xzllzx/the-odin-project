import { createTaskFromForm, createProjectFromDom } from "./project-task";
import {
  displayAllTasks,
  hideForms,
  addProjectToSidebar,
  addProjectToTaskDropdown,
} from "./dom-project-task";

const submitTask = (e) => {
  createTaskFromForm(e);
  hideForms(e);
  displayAllTasks(getCurrentPage());
};

const submitProject = (e) => {
  const newProject = createProjectFromDom(e);
  hideForms(e);
  addProjectToSidebar(newProject);
  addProjectToTaskDropdown(newProject);
};

export { submitTask, submitProject };
