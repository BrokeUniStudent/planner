import { projects } from "./projects";
import todos from './../Data/todos.json';

// data structure (this is when I regret not using Typescript)
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
    if (typeof (item) === 'string') {
        try {
            item = JSON.parse(item);
        } catch {
            return false;
        }
    }
    return item.id === undefined;
}

function isTask(item) {
    if (typeof (item) === 'string') {
        try {
            item = JSON.parse(item);
        } catch {
            return false;
        }
    }
    return item.id !== undefined;
}

// add a new project object
export function addProject(title, color) {
    // console.log(title)
    if (!title) {
        alert('Title cannot be empty');
    } else if (getProjectNames().includes(title)) {
        alert('There already exist a project with that title. Would you like to change the color of the project?');
    } else {
        localStorage[title] = JSON.stringify(color);
        // console.log(localStorage[title])
        return true;
    }
    return false;
    ;
}

// get all project objects
export function getProjects() {
    const listProjects = getProjectNames()
        .map(projectName => JSON.parse(localStorage[projectName]));
    // console.log(listProjects)
    return listProjects;
}

export function getProjectColor(title) {
    return getProjectColorFull(title).hsl;
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
    // console.log(projectNames);
    return projectNames;
}


// delete a project object by title
export function deleteProject(title) {
    localStorage.removeItem(title);
    getDeadlines().forEach(task => {
        if (task.project === title) {
            localStorage.removeItem(String(task.id));
        }
    })
}

// update a project by title
export function updateProject(oldTitle, title, color) {
    if (title === "") {
        alert('Title cannot be empty');
    } else if (oldTitle === title) {
        localStorage[oldTitle] = JSON.stringify(color);
        // console.log(color)
        return true;
    } else if (getProjectNames().includes(title)) {
        alert('There already exist a project with that title. Would you like to change the color of the project?');
    } else {
        // create a new project entry
        localStorage[title] = JSON.stringify(color);
        // delete the old project entry
        localStorage.removeItem(oldTitle);
        // update project name of all its task
        getDeadlines().forEach(task => {
            if (task.project === oldTitle) {
                updateDeadline(task.id, task.task, title, task.deadline, task.timezone, task.description);
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
            listTasks.push(JSON.parse(item));
        }
    }
    // console.log(listTasks)
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
        // console.log(todo)
        return true;
    }
    return false;
}

export function updateCompleted(id) {
    const prevTask = JSON.parse(localStorage[String(id)]);
    const todo = {
        id: id,
        task: prevTask.task,
        deadline: prevTask.deadline,
        project: prevTask.project,
        completed: !prevTask.completed,
        timezone: prevTask.timezone,
        description: prevTask.description
    }
    localStorage[id] = JSON.stringify(todo);
    // console.log(todo)
    return true;
}

export function getDeadline(id) {
    return getDeadlines().find(deadline => deadline.id === id);
}

export function addDeadline(title, project, deadline, timezone, description) {
    if (!title) {
        alert('Title cannot be empty');
    } else {
        const deadlines = getDeadlines();
        const id = deadlines.length === 0 ? 0 : deadlines.at(-1).id + 1
        const todo = {
            id: id,
            task: title,
            deadline: deadline,
            project: project,
            completed: false,
            timezone: timezone,
            description: description
        }
        // console.log(todo)
        localStorage[id] = JSON.stringify(todo);
        return true;
    }
    return false;
}

