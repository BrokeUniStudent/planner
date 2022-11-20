import { useState } from 'react';
import './HomeToDoList.css';
import HomeToDo from "./HomeToDo.js"
import todoList from './../Data/todos.json';
import { List, Box } from '@mui/material';
import dayjs from 'dayjs';
import { CommentsDisabledOutlined } from '@mui/icons-material';

function HomeToDoList(props) {

    const [todos, setTodos] = useState(todoList);

    const oneDay = 1000 * 60 * 60 * 24;

    const currentTime = dayjs().tz()
    //check if the deadline is in time range
    // const isInRange  = (todo) => {
    //     var currentTime = new Date();

    //     if (todo.deadline){
    //         var deadline = new Date(todo.deadline);
    //     } else {
    //         return false;
    //     }

    //     // deadline time in ms
    //     var timeLeft = deadline.valueOf() - currentTime.valueOf();
    //     if (props.type === "daily"){
    //         //check if the deadline is today or before today
    //         return timeLeft < oneDay;
    //     } else {
    //         const oneWeek = oneDay * 7
    //         return ((oneDay < timeLeft) && (timeLeft < oneWeek));
    //     }
    // }

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

    const updateToDo = (id) => {

        setTodos(prevTodos => {
            prevTodos[id].completed = !(prevTodos[id].completed);
            return prevTodos;
        })
    }

    return (
        <List className='homeToDoList'>
            {/* title */}
            <h1 className='homeToDoList'>{(props.type === "day") ? "Today..." : "In a week..."}</h1>
            {/* todos */}
            <Box sx={{ overflowY: 'auto', height: 100 }}>
                {listTodos.map(todo => <HomeToDo todo={todo} key={todo.id} type={props.type} updateToDo={updateToDo} />)}
            </Box>
        </List>
    );
}

export default HomeToDoList;
