const createTodoForm = document.querySelector("form.create-todo");

const showTodoForm = () => {
  createTodoForm.classList.remove("hidden");
};

const hideTodoForm = (e) => {
  //   createTodoForm.classList.add("hidden");
  e.preventDefault();
};

const parseTodoInput = (e) => {
  let formdata = new FormData(createTodoForm);

  let inputTitle = formdata.get("title");
  let inputDescription = formdata.get("description");
  let inputDueDate = formdata.get("due-date");
  let inputPriority = formdata.get("priority");

  return [inputTitle, inputDescription, inputDueDate, inputPriority];
};

export { showTodoForm, hideTodoForm, parseTodoInput };
