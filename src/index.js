import "./styles/main.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Storage from "./modules/Storage";
import UI from "./modules/UI";

// display Projects after reload
UI.displayProjects();
UI.displayTasks();
UI.renderButton();
UI.deleteButton();

// Eventlistener
const addProjectButton = document.getElementById("addProjectButton");
addProjectButton.addEventListener("click", Storage.addProject);

const projectContainer = document.getElementById("projectContainer");
projectContainer.addEventListener("click", Storage.deleteProject);

const addTaskButton = document.getElementById("addTaskButton");
addTaskButton.addEventListener("click", Storage.addTask);

// document.addEventListener("DOMContentLoaded", UI.loadHomepage);
