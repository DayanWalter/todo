import Project from "./Project";
import UI from "./UI";

export default class Storage {
  //get and set items from the local storage

  static addProject(e) {
    e.preventDefault();

    let projects = JSON.parse(localStorage.getItem("projects")) || [];

    let inputProjectName = document.getElementById("projectName").value;
    const project = new Project(inputProjectName);

    projects.push(project);

    localStorage.setItem("projects", JSON.stringify(projects));

    UI.displayProjects();
  }

  static deleteProject(index) {
    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    if (index >= 0 && index < projects.length) {
      projects.splice(index, 1);
      localStorage.setItem("projects", JSON.stringify(projects));

      UI.displayProjects();
    }
  }
}
