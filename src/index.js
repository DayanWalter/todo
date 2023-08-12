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

projectContainer.addEventListener("click", (event) => {
  console.log(event);

  if (event.target.closest(".delete-project-button")) {
    const index = parseInt(
      event.target.closest(".delete-project-button").getAttribute("data-index")
    );
    Storage.deleteProject(index);
  }
});
// document.addEventListener("DOMContentLoaded", UI.loadHomepage);
