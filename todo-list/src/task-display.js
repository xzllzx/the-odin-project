const allTasksTable = document.querySelector("#all-tasks > table");

const displayAllTasks = (project) => {
  document.querySelector("#all-tasks > table > tbody").remove();
  const tableBody = document.createElement("tbody");

  for (const task of project.taskList) {
    console.log(task);
    const newRow = document.createElement("tr");

    const title = document.createElement("td");
    title.innerHTML = task.title;
    const description = document.createElement("td");
    description.innerHTML = task.description;
    const dueDate = document.createElement("td");
    dueDate.innerHTML = task.dueDate;
    const priority = document.createElement("td");
    priority.innerHTML = task.priority;

    newRow.append(title, description, dueDate, priority);
    tableBody.appendChild(newRow);
  }

  allTasksTable.appendChild(tableBody);
};

export { displayAllTasks };
