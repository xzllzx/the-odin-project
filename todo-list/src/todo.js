import { parseTodoInput } from "./todo-form-dom.js";

const TodoTask = (title, description, dueDate, priority) => {
  // title, description, dueDate and priority. You might also want to include notes or even a checklist
  return { title, description, dueDate, priority };
};

const Project = (projectName) => {
  const todoList = [];
  return { projectName, todoList };
};

const defaultProject = Project("Default");

const createTodo = () => {
  const inputArr = parseTodoInput();
  const newTodo = TodoTask(...inputArr);
  console.log("Created Todo list");
};

export { createTodo };
