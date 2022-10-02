import './Project.css';
import ProjectToDo from './ProjectToDo';
import { useState } from 'react';

function Project(props){
    const listTodos = props.listTodos;
    const project = listTodos[0].project;
    // console.log(listTodos)

    const [rename, setRename] = useState(false);
    const [newName, setNewName] = useState(project);
    const [add, setAdd] = useState(false);

    const deleteProject = () => {
        props.updateProject(project, "delete")
    }

    const renameProject = () => {
        // console.log(newName)
        if (rename){
            props.updateProject(project,'rename', newName);
            setNewName(project);
        }
        setRename(rename => !rename);
        // console.log(project)
    }

    const addTodo = () => {

    }

    const handleChange = (e) => {
        setNewName(e.target.value);
    }

    return (
        <div className='project'>
            {rename ? 
                <input placeholder={project} onChange={handleChange} value={newName} /> : 
                <h1>{project}</h1>}   

            <button className='renameProject' onClick={renameProject}>{rename ? 'Confirm' : 'Rename'}</button>
            <button className='deleteProject' onClick={deleteProject}>Delete</button>
            <button className='addTodo'>Add</button>
            {add && <></>}
            {listTodos.map(todo => 
                <ProjectToDo 
                    key={todo.id} 
                    {...todo} 
                    updateTodo={props.updateTodo}  
                />)}
        </div>
    )
}

export default Project;