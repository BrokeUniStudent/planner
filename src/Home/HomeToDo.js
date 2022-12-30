import './HomeToDo.css';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import dayjs from 'dayjs';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import CompletionCheckbox from '../Micellenous/CompletionCheckbox';
import { useState } from 'react';

// dayjs.extend(utc)
// dayjs.extend(timezone)

function HomeToDo(props) {

    // const [todo, setTodo] = useState(props.todo);
    const todo = props.todo;

    var displayTime = "";

    const deadline = dayjs(props.todo.deadline).tz(props.todo.timezone)

    if (props.type === "day") {
        displayTime = deadline.format('HH:MM')
    } else {
        displayTime = deadline.format('YYYY/MM/DD ddd HH:MM');
    }


    
    const [isOverdue, setIsOverdue] = useState(dayjs().tz().isAfter(deadline) && !props.todo.completed)
    // const isOverdue = dayjs().tz().isAfter(deadline) && !props.todo.completed

    return (
        <ListItemButton className='homeToDo' sx={{ py: 0 }} disableRipple>
            <ListItemIcon>
                {/* <Checkbox
                    edge="start"
                    checked={todo.completed}
                    tabIndex={-1}
                    disableRipple
                /> */}
                <CompletionCheckbox task={todo} />
                {isOverdue ? <PriorityHighIcon fontSize="large" color="error" /> : null}
            </ListItemIcon>
            <ListItemText>
                {todo.task}
            </ListItemText>
            <ListItemText>{todo.deadline ? <p>{displayTime}</p> : null}</ListItemText>
        </ListItemButton>
    );
}

export default HomeToDo;