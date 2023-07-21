import { parseTaskInput } from "./task-form-dom.js";

const Task = (title, description, dueDate, priority) => {
  // title, description, dueDate and priority. You might also want to include notes or even a checklist
  return { title, description, dueDate, priority };
};

const createTask = () => {
  const inputArr = parseTaskInput();
  const newTask = Task(...inputArr);
  console.log(`Created Task list: ${inputArr}`);
};

export { createTask };
