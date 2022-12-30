import { Grid, Typography, Checkbox } from "@mui/material";
import getLocalDeadline from '../functions/getLocalDeadline.js';
import { useState } from "react";
import EditDeadlineButton from '../Micellenous/EditDeadlineButton.js';
import { updateCompleted } from "../Data/functions.js";
import CompletionCheckbox from "../Micellenous/CompletionCheckbox.js";

export default function TaskDetails(props) {

    return (
        <>
            <Grid container columnSpacing={1} sx={{opacity: 1}} >
                <Grid item style={{ width: "50px" }}>
                    <CompletionCheckbox task={props.task} />
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