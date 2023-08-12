export default class UI {
  //get items from Storage and display them in the UI

  //Display Projects in ProjectContainer
  static displayProjects() {
    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    const projectContainer = document.getElementById("projectContainer");
    projectContainer.innerHTML = "";

    projects.forEach((project) => {
      let projectName = project.name;

      projectContainer.innerHTML += `
      <div class="sidebar-bottom-container-project">
      <i class="fa-solid fa-list-check"></i>
      <input type="text" value="${projectName}" readonly />

      <button title="Delete Project" class="delete-project-button" data-index="${projects.indexOf(
        project
      )}">
        <i class="fa-regular fa-circle-xmark"></i>
      </button>
    </div>`;
    });
  }
}
