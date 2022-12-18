import './ProjectToDo.css'
import { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { ListItemSecondaryAction, Typography } from '@mui/material';
import dayjs from 'dayjs';
import EditDeadlineButton from '../Micellenous/EditDeadlineButton';

function ProjectToDo(props) {

    const [completed, setCompleted] = useState(props.completed);
    const [openPanel, setOpenPanel] = useState(false);

    const handleChange = (event) => {
        setCompleted(event.target.checked);
    };

    const handleClose = () => {
        setOpenPanel(false);
    }

    const handleOpen = () => {
        setOpenPanel(true);
    }

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
        <ListItem
            className='projectToDo'
            
            secondaryAction={
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={updateDelete}>
                        <DeleteIcon />
                    </IconButton>
                    <EditDeadlineButton task={props} />
                </ListItemSecondaryAction>
            }
        >
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={props.completed}
                    tabIndex={-1}
                    disableRipple
                    onClick={updateCompleted}
                />
                {isOverdue ? <PriorityHighIcon fontSize="large" color="error" /> : null}
            </ListItemIcon>
            <ListItemText sx={{pr: 5, maxWidth: 200}}>
                <Typography variant='h6'>{props.task}</Typography>
                {props.deadline ? getDisplayTime() : null}
            </ListItemText>
        </ListItem>

    );
}

export default ProjectToDo;