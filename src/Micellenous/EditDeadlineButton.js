import { CreateDeadline } from "../Windows/CreateDeadline.js";
import EditIcon from '@mui/icons-material/Edit';
import { Grid, Box, Typography, Popper, Card, CardContent, Checkbox, IconButton } from "@mui/material";
import { useState } from "react";

export default function EditDeadlineButton(props) {
    const [openPanel, setOpenPanel] = useState(false);

    const handleClose = () => {
        setOpenPanel(false);
    }

    const handleOpen = () => {
        setOpenPanel(true);
    }

    return (
        <>
            <IconButton onClick={handleOpen}>
                <EditIcon />
            </IconButton>
            <CreateDeadline open={openPanel} handleClose={handleClose} task={props.task} />
        </>
        
    )
}