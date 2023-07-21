const allProjects = [];

const Project = (projectName) => {
  const taskList = [];
  return { projectName, taskList };
};

const createProject = (projectName) => {
  const newProject = Project(projectName);
  allProjects.push(newProject);
  return { newProject };
};

const addTaskToProject = (project, task) => {
  project.taskList.push(task);
  return { project };
};

export { createProject };
