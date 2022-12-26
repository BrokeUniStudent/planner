import { projects } from "./projects";
import todos from './../Data/todos.json';

// add a new project object
export function addProject(title, color) {
    if (!title) {
        alert('Title cannot be empty');
    } else if (getProjectNames().includes(title)) {
        alert('There already exist a project with that title. Would you like to change the color of the project?');
    } else {
        const project = { title: title, color: color };
        return true;
    }
    return false;
    ;
}

// get all project objects
export function getProjects() {
    const listProjects = projects;
    console.log(listProjects)
    return listProjects;
}

export function getProjectColor(title) {
    const projects = getProjects();
    const project = projects[title];
    return project.hsl;
}

export function getProjectColorFull(title) {
    const projects = getProjects();
    const project = projects[title];
    return project;
}

// get all project names
export function getProjectNames() {
    return Object.keys(getProjects());
}

// delete a project object by title
export function deleteProject(title) {

}

// update a project by title
export function updateProject(oldTitle, title, color) {
    if (!title) {
        alert('Title cannot be empty');
    } else if (oldTitle === title) {
        projects[oldTitle].color = color
        console.log(color)
        return true;
    } else if (getProjectNames().includes(title)) {
        alert('There already exist a project with that title. Would you like to change the color of the project?');
    } else {
        // const project = {title: title, color: color};
        // projects[oldTitle] = project
        // update its color
        // update its name
        // update project name of all its task
        return true;
    }
    return false;
}

// delete a deadline by id
export function deleteDeadline(id) {

}

// update a deadline by id
export function updateDeadline(id, title, project, deadline, timezone, description) {
    if (!title) {
        alert('Title cannot be empty');
    } else {
        const todo = {
            id: id,
            task: title,
            deadline: deadline,
            project: project,
            completed: getDeadline(id).completed,
            timezone: timezone,
            description: description
        }
        console.log(todo)
        return true;
    }
    return false;
}

export function updateCompleted(id) {
    getDeadlines().forEach(deadline => {
        if (deadline.id === id) { 
            deadline.completed = !deadline.completed;
        } 
    })
}

// 
export function getDeadlines() {
    return todos;
}

export function getDeadline(id) {
    return getDeadlines().find(deadline => deadline.id === id);
}

export function addDeadline(title, project, deadline, timezone, description) {
    if (!title) {
        alert('Title cannot be empty');
    } else {
        const todo = {
            id: getDeadlines().at(-1).id + 1,
            task: title,
            deadline: deadline,
            project: project,
            completed: false,
            timezone: timezone,
            description: description
        }
        console.log(todo)
        return true;
    }
    return false;
}

