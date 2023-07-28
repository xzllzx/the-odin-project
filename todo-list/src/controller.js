import {
  createTaskFromForm,
  createProjectFromDom,
  addTaskToProject,
} from "./project-task";
import {
  displayAllTasks,
  hideForms,
  getCurrentPage,
  addProjectToSidebar,
  addProjectToTaskDropdown,
} from "./dom-project-task";
import { defaultProject } from "./initialize";

const submitTask = (e) => {
  const taskAndProject = createTaskFromForm(e);
  const task = taskAndProject[0];
  const project = taskAndProject[1];
  addTaskToProject(project, task);
  if (project != defaultProject) addTaskToProject(defaultProject, task);
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
