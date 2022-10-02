import './HomeToDo.css';
import { useState } from 'react';

function HomeToDo(props) {

    const [todo, setTodo] = useState(props.todo);

    const handleClick = () => {
        // update the selected todo
        props.updateToDo(todo.id);
    }

    var displayTime = "";

    const date = new Date(todo.deadline);
    // add offest in seconds
    date.setSeconds(date.getSeconds()+props.timeZoneOffset)

    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;

    if (props.type === "daily"){
        displayTime = h + ":" + m;
    } else {
        var y = date.getFullYear();// year
        var mon = date.getMonth()+1;// month
        var d = date.getDate();// day

        mon = (mon < 10) ? "0" + mon : mon;
        d = (d < 10) ? "0" + d : d;

        displayTime = h + ":" + m + " " + d + "/" + mon + "/" + y;
    }
    


    return (
        <div className='homeToDo'>
            <input type="radio" id={todo.id} onClick={handleClick} checked={todo.completed} className={todo.completed ? "completed" : null} />
            <label for={todo.id}>{todo.task}</label>
            <p>{displayTime}</p>
        </div>
    );
}

export default HomeToDo;