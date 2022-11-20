import { projects } from './../Data/projects.js';
import { Grid, Box, Typography, Popper, Card, CardContent, Popover } from "@mui/material";
import { useState } from 'react';
import { grey } from '@mui/material/colors';
import TaskDetails from  './TaskDetails.js'

export default function Mark(props) {

    const getMarkColor = () => {
        return props.isPast ? grey[600] : projects[props.task.project];
    }

    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleHover = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };

    return (
        <Grid item xs={1}>
            <Box
                sx={{
                    height: '50%',
                    bgcolor: getMarkColor(),
                    width: '100%'
                    // width: 15
                }}
                onMouseOver={handleHover}
                // onMouseLeave={handleHover}
            />
            <Popper open={open} anchorEl={anchorEl} disablePortal >
                <Card sx={{ bgcolor: getMarkColor(), width: 440 }}>
                    <CardContent sx={{ color: (props.isPast ? 'white' : 'black') }}>
                        <TaskDetails task={props.task} />
                    </CardContent>
                </Card>
            </Popper>
        </Grid>
    )
}