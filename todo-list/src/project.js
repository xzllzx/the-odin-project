import { parseProjectInput } from "./task-form-dom.js";

const allProjects = [];

const Project = (projectName) => {
  const taskList = [];
  return { projectName, taskList };
};

const createProject = () => {
  const formdata = parseProjectInput();
  console.log(formdata);

  const inputName = formdata.get("project-name");

  const newProject = Project(inputName);
  allProjects.push(newProject);
  console.log(allProjects);
  return { newProject };
};

const addTaskToProject = (project, task) => {
  project.taskList.push(task);
  return { project };
};

export { createProject };
