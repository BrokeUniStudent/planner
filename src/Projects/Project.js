import './Project.css';
import ProjectToDo from './ProjectToDo';
import { useState } from 'react';
import * as React from 'react';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import { Typography, Collapse, Button, Grid, Box } from '@mui/material';
import { Paper } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { getProject, getProjectColor, getProjects } from '../Data/functions';
import Draggable from 'react-draggable';

function Project(props){
    const listTodos = props.listTodos;
    const project = listTodos[0].project;
    // const projectColor = getProjectColor(project);
    const hsl = getProjectColor(project);
    const titleColor = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
    const contentColor = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l+30}%)`;
    // console.log(listTodos)

    const [rename, setRename] = useState(false);
    const [newName, setNewName] = useState(project);
    const [add, setAdd] = useState(false);
    const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

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
        <Draggable>
                    <Paper sx={{width: 300, bgcolor: titleColor, height:'fit-content', mb: 2}}>
            {/* {rename ? 
                <input placeholder={project} onChange={handleChange} value={newName} /> :  */}
                <Button 
                    onClick={handleClick} 
                    startIcon={open ? <ExpandLess /> : <ExpandMore />}
                    fullWidth
                    size='large'
                    fontSize='large'
                    color='inherit'
                    sx={{ pt: 2, justifyContent: 'left' }}
                >
                    <Typography variant='h5' align='center'>{project}</Typography>
                </Button>
            {/* }    */}

            {/* <button className='renameProject' onClick={renameProject}>{rename ? 'Confirm' : 'Rename'}</button>
            <button className='deleteProject' onClick={deleteProject}>Delete</button>
            <button className='addTodo'>Add</button> */}
            {/* {add && <></>} */}
            <Collapse in={open} timeout="auto" unmountOnExit >
                <List sx={{bgcolor: contentColor}}>
                {listTodos.map(todo => 
                    <ProjectToDo 
                        key={todo.id} 
                        {...todo} 
                        updateTodo={props.updateTodo}  
                    />)}
                </List>
            </Collapse>
        </Paper>
        </Draggable>

    )
}

export default Project;