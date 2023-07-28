import { allProjects } from "./project-task";

const createForms = document.querySelectorAll("form.create-form");

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
  const currentProjectName = e.target.parentNode.id.slice(0, -7);
  pageName.innerHTML = currentProjectName;

  return currentProjectName;
};

const displayAllTasks = (project) => {
  // Remove all rows and re-populate?
  const allTasksTable = document.querySelector("#all-tasks > table");
  const oldtbody = allTasksTable.querySelector("tbody");
  const newtbody = document.createElement("tbody");

  if (oldtbody) oldtbody.remove();

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
  const sidebarProjects = document.querySelector("nav#sidebar > ul.projects");

  const newProjectElement = document.createElement("li");
  const newSidebarGroup = document.createElement("div");
  newSidebarGroup.classList.add("page-group");
  newSidebarGroup.id = `${project.projectName}-button`;
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

  return { project };
};

const addProjectToTaskDropdown = (project) => {
  const projectsDropdown = document.querySelector("#project");

  const projectOption = document.createElement("option");
  projectOption.value = allProjects.length - 1;
  projectOption.innerHTML = project.projectName;

  projectsDropdown.appendChild(projectOption);

  return { project };
};

export {
  showForm,
  hideForms,
  setCurrentPage,
  displayAllTasks,
  addProjectToSidebar,
  addProjectToTaskDropdown,
};
