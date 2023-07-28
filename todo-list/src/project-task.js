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
const createTask = (title, description, dueDate, priority, project) => {
  const newTask = Task(title, description, dueDate, priority);
  addTaskToProject(project, newTask);
  if (project !== defaultProject) addTaskToProject(defaultProject, newTask);
};

const createTaskFromForm = (e) => {
  const formdata = new FormData(e.target.parentNode);

  createTask(
    formdata.get("title"),
    formdata.get("description"),
    formdata.get("due-date"),
    formdata.get("priority"),
    allProjects[parseInt(formdata.get("project"))]
  );
};

// Get sub-set of tasks?
const getAllTasks = () => {
  return defaultProject;
};

const getTodayTasks = () => {
  todayProject.taskList = [];

  const today = new Date().toLocaleDateString();

  for (const Task of defaultProject.taskList) {
    let taskDate = new Date(Task.dueDate).toLocaleDateString();
    if (today === taskDate) {
      todayProject.taskList.push(Task);
    }
  }

  return todayProject;
};

const getWeekTasks = () => {
  weekProject.taskList = [];

  const today = new Date();
  let sevenDaysLater = new Date();
  sevenDaysLater.setDate(today.getDate() + 7);

  for (const Task of defaultProject.taskList) {
    let taskDate = new Date(Task.dueDate);
    if (today <= taskDate && taskDate <= sevenDaysLater) {
      weekProject.taskList.push(Task);
    }
  }

  return weekProject;
};

// Create a new project
const createProject = (projectName) => {
  const newProject = Project(projectName);
  addProjectToProjectsList(newProject);
};

const createProjectFromDom = (e) => {
  const formdata = new FormData(e.target.parentNode);
  createProject(formdata.get("project-name"));
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

// Tasks

// Projects
const defaultProject = createProject("Default");
const todayProject = createProject("Today");
const weekProject = createProject("Week");

export {
  allProjects,
  createTask,
  createTaskFromForm,
  createProject,
  createProjectFromDom,
  addTaskToProject,
  addProjectToProjectsList,
  defaultProject,
  todayProject,
  weekProject,
  getAllTasks,
  getTodayTasks,
  getWeekTasks,
};
