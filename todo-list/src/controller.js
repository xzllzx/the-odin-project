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
import { defaultProject, getTodayTasks, getWeekTasks } from "./initialize";
import { validateForm } from "./form-validation";

const submitTask = (e) => {
  const taskAndProject = createTaskFromForm(e);
  const task = taskAndProject[0];
  const project = taskAndProject[1];
  if (validateForm(e)) {
    addTaskToProject(project, task);
    if (project != defaultProject) addTaskToProject(defaultProject, task);
    getTodayTasks();
    getWeekTasks();
    hideForms(e);
    displayAllTasks(getCurrentPage());
  }
};

const submitProject = (e) => {
  const newProject = createProjectFromDom(e);
  if (validateForm(e)) {
    hideForms(e);
    addProjectToSidebar(newProject);
    addProjectToTaskDropdown(newProject);
  }
};

export { submitTask, submitProject };
