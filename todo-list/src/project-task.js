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
const createTask = (title, description, dueDate, priority) => {
  const newTask = Task(title, description, dueDate, priority);
  return newTask;
};

const createTaskFromForm = (e) => {
  const formdata = new FormData(e.target.parentNode);

  const newTask = createTask(
    formdata.get("title"),
    formdata.get("description"),
    formdata.get("due-date"),
    formdata.get("priority")
  );

  return [newTask, allProjects[parseInt(formdata.get("project"))]];
};

// Create a new project
const createProject = (projectName) => {
  const newProject = Project(projectName);
  addProjectToProjectsList(newProject);
  return newProject;
};

const createProjectFromDom = (e) => {
  const formdata = new FormData(e.target.parentNode);
  const newProject = createProject(formdata.get("project-name"));
  return newProject;
};

// Add new tasks to a project's task list
const addTaskToProject = (project, task) => {
  project.taskList.push(task);
};

// Add new projects to a list containing all projects except [default, today, week]
const addProjectToProjectsList = (project) => {
  allProjects.push(project);
};

// INITIALIZE
// List of all projects
const allProjects = [];

export {
  allProjects,
  createTask,
  createTaskFromForm,
  createProject,
  createProjectFromDom,
  addTaskToProject,
  addProjectToProjectsList,
};
