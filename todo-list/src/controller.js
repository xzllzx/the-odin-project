import { createTask } from "./task.js";
import { createProject } from "./project.js";

const exampleTask = createTask("Deez", "Deez Nuts", "2014-09-09", "low");
console.log(exampleTask);

// Stores all projects
const defaultProjects = createProject("Default");

const sportsProjects = createProject("Sports");
