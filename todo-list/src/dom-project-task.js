import { allProjects } from "./project-task";

import {
  defaultProject,
  getProjectById,
  getTodayTasks,
  getWeekTasks,
  todayProject,
} from "./initialize";

const createForms = document.querySelectorAll("form.create-form");
let currentProject = defaultProject;

const showForm = (e) => {
  hideForms(e);
  const targetForm = document.querySelector(`form#${e.target.classList}`);
  targetForm.classList.remove("hidden");
};

const hideForms = (e) => {
  createForms.forEach((form) => {
    form.classList.add("hidden");
  });
  e.preventDefault();
};

const getCurrentPage = () => {
  return currentProject;
};

const setCurrentPage = (e) => {
  const allButtons = document.querySelectorAll("button.page-link");
  const pageName = document.querySelector("#page-name");

  for (const button of allButtons) {
    button.classList.remove("selected-page");
  }
  e.target.classList.add("selected-page");

  const currentProjectId = e.target.parentNode.id.slice(7);
  // Default pages: All, Today, Week
  currentProject = getProjectById(currentProjectId);

  pageName.innerHTML = currentProject.projectName;
  return currentProject;
};

const displayAllTasks = (project) => {
  // Remove all rows and re-populate?
  const allTasksTable = document.querySelector("#all-tasks > table");
  const oldtbody = allTasksTable.querySelector("tbody");
  const newtbody = document.createElement("tbody");

  if (oldtbody) oldtbody.remove();

  console.log(project);

  for (const task of project.taskList) {
    const newRow = document.createElement("tr");

    for (const property of [
      task.title,
      task.description,
      task.dueDate,
      task.priority,
    ]) {
      const newCell = document.createElement("td");
      newCell.innerHTML = property;
      newRow.appendChild(newCell);
    }

    newtbody.appendChild(newRow);
  }

  allTasksTable.appendChild(newtbody);
};

const addProjectToSidebar = (project) => {
  console.log(project);
  const sidebarProjects = document.querySelector("nav#sidebar > ul.projects");

  const newProjectElement = document.createElement("li");
  const newSidebarGroup = document.createElement("div");
  newSidebarGroup.classList.add("page-group");
  newSidebarGroup.id = `button-${allProjects.length}`;
  const newProjectLink = document.createElement("button");
  newProjectLink.classList.add("page-link");
  newProjectLink.innerHTML = project.projectName;

  newProjectLink.addEventListener("click", function (e) {
    setCurrentPage(e);
    displayAllTasks(project);
  });

  newSidebarGroup.appendChild(newProjectLink);
  newProjectElement.appendChild(newSidebarGroup);
  sidebarProjects.appendChild(newProjectElement);
};

const addProjectToTaskDropdown = (project) => {
  const projectsDropdown = document.querySelector("#project");

  const projectOption = document.createElement("option");
  projectOption.value = allProjects.length - 1;
  projectOption.innerHTML = project.projectName;

  projectsDropdown.appendChild(projectOption);
};

export {
  showForm,
  hideForms,
  getCurrentPage,
  setCurrentPage,
  displayAllTasks,
  addProjectToSidebar,
  addProjectToTaskDropdown,
  currentProject,
};
