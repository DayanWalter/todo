import "./styles/main.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Task from "./modules/Task";
import Project from "./modules/Project";
import Storage from "./modules/Storage";
import UI from "./modules/UI";

// display Projects after reload
UI.displayProjects();

// Eventlistener
const addProjectButton = document.getElementById("addProjectButton");
addProjectButton.addEventListener("click", Storage.addProject);

const projectContainer = document.getElementById("projectContainer");

projectContainer.addEventListener("click", Storage.deleteProject);
// document.addEventListener("DOMContentLoaded", UI.loadHomepage);
