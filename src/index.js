import "./styles/main.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Task from "./modules/Task";
import Project from "./modules/Project";
import Storage from "./modules/Storage";

Storage();
// document.addEventListener("DOMContentLoaded", UI.loadHomepage);

// const project1 = new Project("First Project");
// console.log(project1);
// console.log(project1.tasks);
// const task1 = new Task("TaskTitle", "TaskDesc", "20/03/2023", "Low");
// const task2 = new Task("Task2", "Task-Desc2", "25/03/2023", "High");

// project1.addTask(task1);
// project1.addTask(task2);

// console.table(project1.tasks);

// project1.deleteTask("Task2");
// console.table(project1.tasks);

// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// let project1_serialized = JSON.stringify(project1);
// localStorage.setItem("Project 1", project1_serialized);
// console.log(localStorage);
