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

export { showForm, hideForms };
