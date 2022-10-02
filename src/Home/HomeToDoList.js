import { useState } from 'react';
import './HomeToDoList.css';
import HomeToDo from "./HomeToDo.js"
import todoList from './../Data/todos.json';

function HomeToDoList(props) {

    const [todos, setTodos] = useState(todoList);

    const oneDay = 1000*60*60*24;

    //check if the deadline is in time range
    const isInRange  = (todo) => {
        var currentTime = new Date();
        
        if (todo.deadline){
            var deadline = new Date(todo.deadline);
        } else {
            return false;
        }
        
        // deadline time in ms
        var timeLeft = deadline.valueOf() - currentTime.valueOf();
        if (props.type === "daily"){
            //check if the deadline is today or before today
            return timeLeft < oneDay;
        } else {
            const oneWeek = oneDay * 7
            return ((oneDay < timeLeft) && (timeLeft < oneWeek));
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
        <div className='homeToDoList'>
            {/* title */}
            <h1 className='homeToDoList'>{(props.type === "daily") ? "Today..." : "In a week..."}</h1>
            {/* todos */}
            {listTodos.map(todo => <HomeToDo todo={todo} key={todo.id} type={props.type} updateToDo={updateToDo} timeZoneOffset={props.timeZoneOffset} />)}
        </div>
    );
}

export default HomeToDoList;
