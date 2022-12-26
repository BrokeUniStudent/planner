import './HomeToDo.css';
import { useState } from 'react';
import { ListItem } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

// dayjs.extend(utc)
// dayjs.extend(timezone)

function HomeToDo(props) {

    // const [todo, setTodo] = useState(props.todo);
    const todo = props.todo;

    const handleClick = () => {
        // update the selected todo
        props.updateToDo(todo.id);
    }

    var displayTime = "";

    const deadline = dayjs(props.todo.deadline).tz(props.todo.timezone)

    if (props.type === "day") {
        displayTime = deadline.format('HH:MM')
    } else {
        displayTime = deadline.format('YYYY/MM/DD ddd HH:MM');
    }


    const isOverdue = dayjs().tz().isAfter(deadline) && !props.todo.completed



    return (
        <ListItemButton className='homeToDo' onClick={handleClick} sx={{ py: 0 }}>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={todo.completed}
                    tabIndex={-1}
                    disableRipple
                />
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