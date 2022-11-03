import './Project.css';
import ProjectToDo from './ProjectToDo';
import { useState } from 'react';
import * as React from 'react';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import { Paper } from '@mui/material';


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
        <Paper className='project' sx={{width: 300, pt: 2, mx:3, float: 'left'}}>
            {rename ? 
                <input placeholder={project} onChange={handleChange} value={newName} /> : 
                <Typography variant='h4' align='center'>{project}</Typography>}   

            {/* <button className='renameProject' onClick={renameProject}>{rename ? 'Confirm' : 'Rename'}</button>
            <button className='deleteProject' onClick={deleteProject}>Delete</button>
            <button className='addTodo'>Add</button> */}
            {/* {add && <></>} */}
            <List>
            {listTodos.map(todo => 
                <ProjectToDo 
                    key={todo.id} 
                    {...todo} 
                    updateTodo={props.updateTodo}  
                />)}
            </List>
        </Paper>
    )
}

export default Project;