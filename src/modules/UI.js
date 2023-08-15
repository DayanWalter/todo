import { format, parseISO } from "date-fns";
import Storage from "./Storage";

export default class UI {
  //get items from Storage and display them in the UI

  static displayProjects() {
    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    const projectContainer = document.getElementById("projectContainer");
    const projectTitle = document.getElementById("projectTitle");

    projectContainer.innerHTML = "";

    projects.forEach((project) => {
      let projectName = project.name;

      projectContainer.innerHTML += `
      <div class="sidebar-bottom-container-project" value="${projectName}">
      <i class="fa-solid fa-list-check"></i>
      <input type="text" value="${projectName}" class="project-title"readonly/>

      <button title="Delete Project" class="delete-project-button" data-index="${projects.indexOf(
        project
      )}">
        <i class="fa-regular fa-circle-xmark"></i>
      </button>
    </div>`;
      projectTitle.innerHTML = projectName;

      //   taskProjectModal.innerHTML += `
      // <option value="${projectName}">
      //   ${projectName}
      // </option>`;
    });
  }
  static displayTasks(projectName) {
    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    const taskContainer = document.getElementById("taskContainer");
    taskContainer.innerHTML = "";

    projects.forEach((project) => {
      if (project.name === projectName) {
        project.tasks.forEach((task) => {
          const taskName = task.name;
          let dueDate = task.dueDate;

          if (task.dueDate !== "") {
            dueDate = format(parseISO(task.dueDate), "dd.MM.yyyy");
          } else {
            dueDate = "No date added";
          }

          taskContainer.innerHTML += `
          <div class="content-task">
      <label>
        <input type="checkbox" />
        <span class="bubble task"></span>
      </label>

      <div class="content-task-title">
      
        <input type="text" value="${taskName}" readonly/>
      </div>

      <div class="dueDate">
        ${dueDate}
      </div>

      <div class="actions">
        <button class="edit"
        data-project="${projectName}" 
        data-task="${taskName}">Edit</button>
        <button class="delete"  
        data-project="${projectName}" 
        data-task="${taskName}" >Delete</button>
      </div>
      </div>
    `;
        });
      }
    });
  }
  static displayProjectInTitle(e) {
    const value = e.currentTarget.querySelector("input[type='text']").value;
    const projectTitle = document.getElementById("projectTitle");
    projectTitle.innerHTML = value;

    UI.displayTasks(value);
    UI.deleteButton();
  }
  static renderButton() {
    const displayProjectsInTitle = document.querySelectorAll(
      ".sidebar-bottom-container-project"
    );

    displayProjectsInTitle.forEach((element) => {
      element.addEventListener("click", UI.displayProjectInTitle);
    });
  }
  static deleteButton() {
    const deleteButton = document.querySelectorAll(".delete");

    deleteButton.forEach((element) => {
      element.addEventListener("click", Storage.deleteTask);
    });
  }
  static displayModal() {
    const modal = document.getElementById("taskModal");
    const overlay = document.getElementById("overlay");
    modal.classList.add("active");
    overlay.classList.add("active");
  }
  static hideModal() {
    const modal = document.getElementById("taskModal");
    const overlay = document.getElementById("overlay");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }
  static displayAddProject() {
    const projectForm = document.getElementById("projectForm");
    projectForm.classList.toggle("active");
  }
}
