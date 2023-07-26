// CONSTRUCTORS
const Task = (title, description, dueDate, priority) => {
  return { title, description, dueDate, priority };
};

const Project = (projectName) => {
  const taskList = [];
  return { projectName, taskList };
};

// FUNCTIONS
// Create a new task
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

// Create a new project
const createProject = (e) => {
  const formdata = new FormData(e.target.parentNode);
  const newProject = Project(formdata.get("project-name"));

  addProjectToList(newProject);
  console.log(allProjects);
  return newProject;
};

// Add new tasks to a project's task list
const addTaskToProject = (project, task) => {
  project.taskList.push(task);
  return project;
};

// Add new projects to a list containing all projects
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
