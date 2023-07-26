const Project = (projectName) => {
  const taskList = [];
  return { projectName, taskList };
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

const allProjects = [];
const defaultProject = Project("Default");

export {
  createProject,
  addTaskToProject,
  addProjectToList,
  allProjects,
  defaultProject,
};
