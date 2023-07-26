const Task = (title, description, dueDate, priority) => {
  // title, description, dueDate and priority. You might also want to include notes or even a checklist
  return { title, description, dueDate, priority };
};

const createTask = (e) => {
  const formdata = new FormData(e.target.parentNode);

  const inputTitle = formdata.get("title");
  const inputDescription = formdata.get("description");
  const inputDueDate = formdata.get("due-date");
  const inputPriority = formdata.get("priority");

  const newTask = Task(
    inputTitle,
    inputDescription,
    inputDueDate,
    inputPriority
  );

  return newTask;
};

export { createTask };
