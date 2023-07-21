const createTaskForm = document.querySelector("form.create-task");

const showTaskForm = () => {
  createTaskForm.classList.remove("hidden");
};

const hideTaskForm = (e) => {
  //   createTaskForm.classList.add("hidden");
  e.preventDefault();
};

const parseTaskInput = (e) => {
  let formdata = new FormData(createTaskForm);

  let inputTitle = formdata.get("title");
  let inputDescription = formdata.get("description");
  let inputDueDate = formdata.get("due-date");
  let inputPriority = formdata.get("priority");

  return [inputTitle, inputDescription, inputDueDate, inputPriority];
};

export { showTaskForm, hideTaskForm, parseTaskInput };
