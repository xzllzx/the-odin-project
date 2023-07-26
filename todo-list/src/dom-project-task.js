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

const displayAllTasks = (table, project) => {
  // Remove all rows and re-populate?
  table.querySelector("tbody").remove();
  const tableBody = document.createElement("tbody");

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

    tableBody.appendChild(newRow);
  }

  table.appendChild(tableBody);
};

const addProjectToSidebar = (project) => {
  const sidebarProjects = document.querySelector("nav#sidebar > ul.projects");

  const newProjectElement = document.createElement("li");
  const newSidebarGroup = document.createElement("div");
  newSidebarGroup.classList.add("page-group");
  const newProjectLink = document.createElement("button");
  newProjectLink.classList.add("page-link");
  newProjectLink.innerHTML = project.projectName;

  newSidebarGroup.appendChild(newProjectLink);
  newProjectElement.appendChild(newSidebarGroup);
  sidebarProjects.appendChild(newProjectElement);

  return { project };
};

export { showForm, hideForms, displayAllTasks, addProjectToSidebar };
