import { Grid } from "@mui/material";
import todos from './../../src/Data/todos.json';
import dayjs from "dayjs";

export default function Cell(props) {
    const tasks = todos.filter(task => task.deadline && props.date.isSame(task.deadline, 'day'));
    const cellNumber = props.date.date();

    return <Grid item xs={1} key={cellNumber}>{cellNumber}</Grid>
}