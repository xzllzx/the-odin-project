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
  if (project !== defaultProject) addTaskToProject(defaultProject, newTask);
  return project;
};

// Get sub-set of tasks?
const getTodayTasks = (e) => {
  todayProject.taskList = [];

  const today = new Date().toLocaleDateString();

  for (const Task of defaultProject.taskList) {
    let taskDate = new Date(Task.dueDate).toLocaleDateString();
    if (today === taskDate) {
      todayProject.taskList.push(Task);
    }
  }

  console.log(todayProject);
  return todayProject;
};

const getWeekTasks = (e) => {
  weekProject.taskList = [];

  const today = new Date().toLocaleDateString();
  let sevenDaysLater = new Date();
  sevenDaysLater.setDate(sevenDaysLater.getDate() + 7);
  sevenDaysLater = sevenDaysLater.toLocaleDateString();

  for (const Task of defaultProject.taskList) {
    let taskDate = new Date(Task.dueDate).toLocaleDateString();
    if (today <= taskDate && taskDate <= sevenDaysLater) {
      weekProject.taskList.push(Task);
    }
  }

  console.log(weekProject);
  return weekProject;
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
const todayProject = Project("Today");
const weekProject = Project("Week");

addProjectToList(defaultProject);

export {
  createTask,
  getTodayTasks,
  getWeekTasks,
  createProject,
  addTaskToProject,
  addProjectToList,
  allProjects,
  defaultProject,
  todayProject,
  weekProject,
};
