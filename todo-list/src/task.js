const Task = (title, description, dueDate, priority) => {
  return { title, description, dueDate, priority };
};

const createTask = (e) => {
  const formdata = new FormData(e.target.parentNode);

  const newTask = Task(
    formdata.get("title"),
    formdata.get("description"),
    formdata.get("due-date"),
    formdata.get("priority")
  );

  return newTask;
};

export { createTask };
