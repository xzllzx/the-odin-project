const displayAllTasks = (table, project) => {
  // Remove all rows and re-populate?
  table.querySelector("tbody").remove();
  const tableBody = document.createElement("tbody");

  for (const task of project.taskList) {
    const newRow = document.createElement("tr");

    for (const property of [
      task.title,
      task.description,
      task.dueDate,
      task.priority,
    ]) {
      const newCell = document.createElement("td");
      newCell.innerHTML = property;
      newRow.appendChild(newCell);
    }

    tableBody.appendChild(newRow);
  }

  table.appendChild(tableBody);
};

export { displayAllTasks };
