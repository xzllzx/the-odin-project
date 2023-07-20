const todoList = (title, description, dueDate, priority, notes, checklist) => {
  // title, description, dueDate and priority. You might also want to include notes or even a checklist
  return { title, description, dueDate, priority, notes, checklist };
};

const createTodo = () => {
  newTodo = new todoList();
  console.log("Created Todo list");
};
