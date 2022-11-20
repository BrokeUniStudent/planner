import { Grid, Box, Typography, Popper, Card, CardContent, Checkbox, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import getLocalDeadline from '../functions/getLocalDeadline.js';
import { useState } from "react";
import { CreateDeadline } from "../Windows/CreateDeadline.js";

export default function TaskDetails(props) {

    const [completed, setCompleted] = useState(props.task.completed);
    const [openPanel, setOpenPanel] = useState(false);

    const handleChange = (event) => {
        setCompleted(event.target.checked);
    };

    const handleClose = () => {
        setOpenPanel(false);
    }

    const handleOpen = () => {
        setOpenPanel(true);
    }


    return (
        <>
            <Grid container columnSpacing={1} >
                <Grid item style={{ width: "50px" }}>
                    <Checkbox checked={completed} onChange={handleChange} />
                    <IconButton onClick={handleOpen}>
                        <EditIcon />
                    </IconButton>
                </Grid>
                <Grid item xs>
                    <Typography variant='h4'>{props.task.task}</Typography>
                    {getLocalDeadline(props.task.deadline, props.task.timezone).toString()}
                    <br />
                    {props.task.description}
                </Grid>
            </Grid>
            <CreateDeadline open={openPanel} handleClose={handleClose} task={props.task} />
        </>

    )
}