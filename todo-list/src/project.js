import { parseProjectInput } from "./task-form-dom.js";

const allProjects = [];

const Project = (projectName) => {
  const taskList = [];
  return { projectName, taskList };
};

// Stores all projects
const defaultProject = Project("Default");

const createProject = () => {
  const formdata = parseProjectInput();

  const inputName = formdata.get("project-name");

  const newProject = Project(inputName);
  allProjects.push(newProject);
  return { newProject };
};

const addTaskToProject = (project, task) => {
  project.taskList.push(task);
  return { project };
};

export { createProject, addTaskToProject, defaultProject };
