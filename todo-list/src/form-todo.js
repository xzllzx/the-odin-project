const createTodoForm = document.querySelector("form.create-todo");

const showTodoForm = () => {
  createTodoForm.classList.remove("hidden");
};

const hideTodoForm = (e) => {
  createTodoForm.classList.add("hidden");
  e.preventDefault();
};

export { showTodoForm, hideTodoForm };
