import './ProjectToDo.css'
import { useState } from 'react';
import { timeZoneOffset } from '../Home/Home';

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
        <div className='projectToDo'>
            {/* <input type="radio" id={props.id} onClick={handleClick} checked={props.completed} className={props.completed ? "completed" : null} /> */}
            <input type="radio" key={props.id} onClick={updateCompleted} checked={props.completed} className={props.completed ? "completed" : null} />
            <label for={props.id}>{props.task}</label>
            {props.deadline ? <p>{getDisplayTime()}</p>: null}
            <button className='deleteTodo' onClick={updateDelete}>X</button>

        </div>
    );
}

export default ProjectToDo;