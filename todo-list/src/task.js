import { parseTaskInput } from "./task-form-dom.js";

const Task = (title, description, dueDate, priority) => {
  // title, description, dueDate and priority. You might also want to include notes or even a checklist
  return { title, description, dueDate, priority };
};

const createTask = () => {
  const formdata = parseTaskInput();
  console.log(formdata);

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

  console.log(newTask);
};

export { createTask };
