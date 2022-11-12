import './ProjectToDo.css'
import { useState } from 'react';
import { timeZoneOffset } from '../Home/Home';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { ListItemSecondaryAction } from '@mui/material';
import React from 'react';
import dayjs from 'dayjs';




function ProjectToDo(props) {

    // const [completed, setCompleted] = useState(props.completed);

    const updateCompleted = () => {
        // setCompleted(prev => !prev);
        props.updateTodo(props.id, "completed");
    }

    const updateDelete = () => {
        props.updateTodo(props.id, 'delete')
    }

    const deadline = dayjs(props.deadline).tz(props.timezone)

    const getDisplayTime = () => {
        const displayTime = deadline.format('HH:mm DD/MM');
        return displayTime;
    }

    const isOverdue = props.deadline && dayjs().tz().isAfter(deadline) && !props.completed
    


    return (
        <ListItemButton role={undefined} dense onClick={updateCompleted}>
        <ListItem 
            className='projectToDo' 
            key={props.key} 
            secondaryAction={
                <ListItemSecondaryAction>
                    {/* <IconButton edge="end" aria-label="delete" onClick={updateDelete}>
                        <DeleteIcon />
                    </IconButton> */}
                    <IconButton edge="end" aria-label="edit">
                        <EditIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            }
        >
            {/* <input type="radio" id={props.id} onClick={handleClick} checked={props.completed} className={props.completed ? "completed" : null} /> */}
            {/* <input type="radio" key={props.id} onClick={updateCompleted} checked={props.completed} className={props.completed ? "completed" : null} /> */}
            
                <ListItemIcon>
                    <Checkbox
                    edge="start"
                    checked={props.completed}
                    tabIndex={-1}
                    disableRipple
                    // onClick={updateCompleted}
                    />
                    {isOverdue ? <PriorityHighIcon fontSize="large" color="error" /> : null}
                </ListItemIcon>
                {/* <label for={props.id}>{props.task}</label> */}
                <ListItemText>
                    {props.task}
                    {props.deadline ? <p>{getDisplayTime()}</p>: null}
                </ListItemText>
                {/* <button className='deleteTodo' onClick={updateDelete}>X</button> */}
            
        </ListItem>
        </ListItemButton>
    );
}

export default ProjectToDo;