import Project from "./Project";
import Task from "./Task";

export default function Storage() {
  let projects = JSON.parse(localStorage.getItem("projects")) || [];

  const addProjectButton = document.getElementById("addProjectButton");

  addProjectButton.addEventListener("click", (e) => {
    e.preventDefault();
    let inputProjectName = document.getElementById("projectName").value;
    const project = new Project(inputProjectName);

    projects.push(project);

    localStorage.setItem("projects", JSON.stringify(projects));

    const projectContainer = document.getElementById("projectContainer");
    projectContainer.innerHTML += `
    <div class="sidebar-bottom-container-project">
        <i class="fa-solid fa-list-check"></i>
        <p>${inputProjectName}</p>
    </div>`;
    console.log(projects);
  });
  //   let inputTaskName = document.getElementById("taskName").value;

  //   const task = new Task(inputTaskName);
  //   project.addTask(task);
}
