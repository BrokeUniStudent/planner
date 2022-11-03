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
import { ListItemSecondaryAction } from '@mui/material';
import React from 'react';


function ProjectToDo(props) {

    // const [completed, setCompleted] = useState(props.completed);

    const updateCompleted = () => {
        // setCompleted(prev => !prev);
        props.updateTodo(props.id, "completed");
    }

    const updateDelete = () => {
        props.updateTodo(props.id, 'delete')
    }

    const getDisplayTime = () => {
        var displayTime = "";

        const date = new Date(props.deadline);
        // add offest in seconds
        date.setSeconds(date.getSeconds()+timeZoneOffset)

        var h = date.getHours(); // 0 - 23
        var m = date.getMinutes(); // 0 - 59

        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;

        var y = date.getFullYear();// year
        var mon = date.getMonth()+1;// month
        var d = date.getDate();// day

        mon = (mon < 10) ? "0" + mon : mon;
        d = (d < 10) ? "0" + d : d;

        displayTime = h + ":" + m + " " + d + "/" + mon + "/" + y;
        return displayTime;
    }
    


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