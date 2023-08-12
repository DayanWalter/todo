export default function UI() {
  //Display Projects in ProjectContainer
  //Select the ProjectContainer
  const projectContainer = document.getElementById("projectContainer");
  //Delete everything inside the ProjectContainer with innerHTML =""
  projectContainer.innerHTML = "";
  //getItem get the project out of the projects in local storage
  let projects = JSON.parse(localStorage.getItem("projects")) || [];
  //   console.log("works");
  //create for every project in the projectarray the html
  projects.forEach((project) => {
    // console.log("works");

    let projectName = project.name;

    projectContainer.innerHTML += `
    <div class="sidebar-bottom-container-project">
        <i class="fa-solid fa-list-check"></i>
        <p>${projectName}</p>
    </div>`;
    // console.log(project.name);
    console.log(project);
  });
  //(with forEach?)
}
