import { projects } from "./projects";
import todos from './../Data/todos.json';

// data structure
/*
project title cannot be number only
{
    projectTitle<string>: color<object>,
    TaskId<string>: {
        id: number
        task: string
        deadline: Date
        project: string
        completed: boolean
        timezone: string
        description: string
    },
}
*/

function isProject(item) {
    if (typeof (item) === String) {
        item = JSON.parse(item);
    }
    return item.color !== undefined;
}

function isTask(item) {
    if (typeof (item) === String) {
        item = JSON.parse(item);
    }
    return item.id !== undefined;
}

// add a new project object
export function addProject(title, color) {
    if (!title) {
        alert('Title cannot be empty');
    } else if (getProjectNames().includes(title)) {
        alert('There already exist a project with that title. Would you like to change the color of the project?');
    } else {
        localStorage[title] = JSON.stringify(color);
        console.log(localStorage[title])
        return true;
    }
    return false;
    ;
}

// get all project objects
export function getProjects() {
    const listProjects = getProjectNames()
        .map(projectName => JSON.parse(localStorage[projectName]));
    console.log(listProjects)
    return listProjects;
}

export function getProjectColor(title) {
    return getProjectColor(title).hsl;
}

export function getProjectColorFull(title) {
    const project = JSON.parse(localStorage[title]);
    return project;
}

// get all project names
export function getProjectNames() {
    let projectNames = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (isProject(localStorage[key])) {
            projectNames.push(key);
        }
    }
    return projectNames;
}

// delete a project object by title
export function deleteProject(title) {
    localStorage.removeItem(title);
}

// update a project by title
export function updateProject(oldTitle, title, color) {
    if (!title) {
        alert('Title cannot be empty');
    } else if (oldTitle === title) {
        localStorage[oldTitle].color = JSON.stringify(color);
        console.log(color)
        return true;
    } else if (getProjectNames().includes(title)) {
        alert('There already exist a project with that title. Would you like to change the color of the project?');
    } else {
        // create a new project entry
        localStorage[title].color = JSON.stringify(color);
        // delete the old project entry
        localStorage.removeItem(oldTitle);
        // update project name of all its task
        getDeadlines().forEach(task => {
            if (task.project === oldTitle) {
                updateDeadline(task.id, task.title, title, task.deadline, task.timezone, task.description);
            }
        })
        return true;
    }
    return false;
}

export function getDeadlines() {
    const listTasks = [];
    for (let i = 0; i < localStorage.length; i++) {
        const item = localStorage[localStorage.key(i)];
        if (isTask(item)) {
            listTasks.push();
        }
    }
    return listTasks;
}

// delete a deadline by id
export function deleteDeadline(id) {
    localStorage.removeItem(String(id));
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
        localStorage[String(id)] = JSON.stringify(todo);
        console.log(todo)
        return true;
    }
    return false;
}

export function updateCompleted(id) {
    const prevTask = JSON.parse(localStorage[String(id)]);
    const todo = {
        id: id,
        task: prevTask.title,
        deadline: prevTask.deadline,
        project: prevTask.project,
        completed: !prevTask.completed,
        timezone: prevTask.timezone,
        description: prevTask.description
    }
    localStorage[String(id)] = JSON.stringify(todo);
    console.log(todo)
    return true;
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

