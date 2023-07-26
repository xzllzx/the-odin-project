const createForms = document.querySelectorAll("form.create-form");
const createTaskForm = document.querySelector("form#create-task");
const createProjectForm = document.querySelector("form#create-project");

const showTaskForm = () => {
  createTaskForm.classList.remove("hidden");
};

const showProjectForm = () => {
  createProjectForm.classList.remove("hidden");
};

const hideForms = (e) => {
  createForms.forEach((form) => {
    form.classList.remove("hidden");
  });
  e.preventDefault();
};

const parseTaskInput = (e) => {
  let formdata = new FormData(createTaskForm);
  return formdata;
};

const parseProjectInput = (e) => {
  let formdata = new FormData(createProjectForm);
  return formdata;
};

export {
  showTaskForm,
  showProjectForm,
  hideForms,
  parseTaskInput,
  parseProjectInput,
};
