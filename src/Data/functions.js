import { projects } from "./projects";
import todos from './../Data/todos.json';
import TimeZonePicker from "../Micellenous/TimeZonePicker";

// add a new project object
export function addProject(title, color) {
    if (!title) {
        alert('Title cannot be empty');
    } else if (getProjectNames().includes(title)) {
        alert('There already exist a project with that title. Would you like to change the color of the project?');
    } else {
        const project = {title: title, color: color};
        return true;
    }
    return false;
   ;
}

// get all project objects
export function getProjects() {
    const listProjects = projects;
    return listProjects;
}

export function getProjectColor(title) {
    const projects = getProjects();
    const project = projects[title];
    return project.hsl;
}

// get all project names
export function getProjectNames() {
    return Object.keys(getProjects());
}

// delete a project object by title
export function deleteProject(title){

}

// update a project by title
export function updateProject(title, color) {
    if (!title) {
        alert('Title cannot be empty');
    } else if (getProjectNames().includes(title)) {
        alert('There already exist a project with that title. Would you like to change the color of the project?');
    } else {
        const project = {title: title, color: color};
        projects[title]
        return true;
    }
    return false;
}

// delete a deadline by id
export function deleteDeadline(id) {
    
}

// update a deadline by id
export function updateDeadline(id) {

}

// 
export function getDeadlines() {
    return todos;
}

export function addDeadline(title, project, deadline, timezone, description) {
    if (!title) {
        alert('Title cannot be empty');
    } else {
        const todo = {
            id: getProjects().at(-1).id + 1,
            task: title,
            deadline: deadline,
            project: project,
            completed: false, 
            timezone: timezone,
            description: description
        }
        return true;
    }
    return false;
}

