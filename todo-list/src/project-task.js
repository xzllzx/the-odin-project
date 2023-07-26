// CONSTRUCTORS
const Task = (title, description, dueDate, priority) => {
  return { title, description, dueDate, priority };
};

const Project = (projectName) => {
  const taskList = [];
  return { projectName, taskList };
};

// FUNCTIONS
const createTask = (e) => {
  const formdata = new FormData(e.target.parentNode);
  const project = allProjects[parseInt(formdata.get("project"))];

  const newTask = Task(
    formdata.get("title"),
    formdata.get("description"),
    formdata.get("due-date"),
    formdata.get("priority")
  );

  addTaskToProject(project, newTask);
  return newTask;
};

const createProject = (e) => {
  const formdata = new FormData(e.target.parentNode);
  const newProject = Project(formdata.get("project-name"));
  allProjects.push(newProject);
  return newProject;
};

const addTaskToProject = (project, task) => {
  project.taskList.push(task);
  return project;
};

const addProjectToList = (project) => {
  allProjects.push(project);
  return allProjects;
};

// INITIALIZE
const allProjects = [];
const defaultProject = Project("Default");

addProjectToList(defaultProject);

export {
  createTask,
  createProject,
  addTaskToProject,
  addProjectToList,
  allProjects,
  defaultProject,
};
