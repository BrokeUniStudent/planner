import { useState } from 'react';
import './HomeToDoList.css';
import HomeToDo from "./HomeToDo.js"
import { List, Box, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { CommentsDisabledOutlined } from '@mui/icons-material';
import { getDeadlines, updateCompleted } from '../Data/functions';

function HomeToDoList(props) {

    const [todos, setTodos] = useState(getDeadlines());

    const oneDay = 1000 * 60 * 60 * 24;

    const currentTime = dayjs().tz()

    const isInRange = (todo) => {
        const deadline = dayjs(todo.deadline).tz(todo.timezone);
        if (!todo.deadline) { return false }
        else if (props.type === "day") {
            return currentTime.isSame(deadline, 'day');
        } else {
            return (!(currentTime.isSame(deadline, 'day'))) && currentTime.isSame(deadline, 'week');
        }

    }

    const listTodos = todos.filter(isInRange);

    return (
        <List className='homeToDoList'>
            {/* title */}
            <Typography variant='h4'>
                {(props.type === "day") ? "Today..." : "In a week..."}
            </Typography>
            {/* todos */}
            <Box sx={{ overflowY: 'auto', height: 200 }}>
                {listTodos.map(todo =>
                    <HomeToDo
                        todo={todo}
                        key={todo.id}
                        type={props.type}
                    />)}
            </Box>
        </List>
    );
}

export default HomeToDoList;
