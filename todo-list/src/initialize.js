import { createProject, allProjects } from "./project-task";

// Projects
const defaultProject = createProject("Default");
const todayProject = createProject("Today");
const weekProject = createProject("Week");

const getProjectById = (id) => {
  if (isNaN(id)) {
    if (id === "all-projects") return defaultProject;
    else if (id === "today") return todayProject;
    else if (id === "week") return weekProject;
  } else {
    return allProjects[parseInt(id) - 1];
  }
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

  let today = new Date();
  today.setDate(today.getDate() - 1);
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

const setAllTasks = () => {
  return defaultProject;
};

export {
  defaultProject,
  todayProject,
  weekProject,
  getProjectById,
  getAllTasks,
  getTodayTasks,
  getWeekTasks,
};
