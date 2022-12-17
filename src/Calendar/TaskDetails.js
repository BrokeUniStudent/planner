import { Grid, Box, Typography, Popper, Card, CardContent, Checkbox, IconButton } from "@mui/material";
import getLocalDeadline from '../functions/getLocalDeadline.js';
import { useState } from "react";
import EditDeadlineButton from '../Micellenous/EditDeadlineButton.js';

export default function TaskDetails(props) {

    const [completed, setCompleted] = useState(props.task.completed);

    const handleChange = (event) => {
        setCompleted(event.target.checked);
    };



    return (
        <>
            <Grid container columnSpacing={1} sx={{opacity: 1}} >
                <Grid item style={{ width: "50px" }}>
                    <Checkbox checked={completed} onChange={handleChange} />
                    <EditDeadlineButton task={props.task} />
                </Grid>
                <Grid item xs>
                    <Typography variant='h4'>{props.task.task}</Typography>
                    {getLocalDeadline(props.task.deadline, props.task.timezone).toString()}
                    <br />
                    {props.task.description}
                </Grid>
            </Grid>
        </>

    )
}