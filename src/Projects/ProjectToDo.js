import './ProjectToDo.css'
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { ListItemSecondaryAction, Typography } from '@mui/material';
import dayjs from 'dayjs';
import EditDeadlineButton from '../Micellenous/EditDeadlineButton';
import { deleteDeadline } from '../Data/functions';

function ProjectToDo(props) {

    const updateCompleted = () => {
        // props.updateTodo(props.id, "completed");
        updateCompleted(props.id);
    }

    const updateDelete = () => {
        // props.updateTodo(props.id, 'delete')
        deleteDeadline(props.id)
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