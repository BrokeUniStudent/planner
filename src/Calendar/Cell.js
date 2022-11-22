import { Grid, Box, Typography } from "@mui/material";
import todos from './../Data/todos.json';
import dayjs from "dayjs";
import Mark from './Mark.js';
import getLocalDeadline from "../functions/getLocalDeadline";
import { grey, blue } from '@mui/material/colors';

export default function Cell(props) {
    const tasks = todos.filter(task => 
        task.deadline && 
        props.date.isSame(getLocalDeadline(task.deadline, task.timezone), 'day')
    );
    const cellNumber = props.date.date();
    const isPast = props.date.isBefore(dayjs(), 'day');
    let cellColor = 'white';
    if (isPast) {
        cellColor = grey[200];
    } else if (props.date.isSame(dayjs(), 'day')) {
        cellColor = '#CEE8FB';
    }

    return (
        <Grid item xs={1} key={cellNumber} sx={{ height: 100, bgcolor: cellColor }}>
            <Box sx={{ position: 'relative', bottom: 0, top: -5, height: 105, border: 1, borderTop: 0 }}>
                <Grid container columns={7} sx={{ height: '100%' }} columnSpacing={0.5} >
                    <Grid item xs={2}>
                        <Typography variant='h6' sx={{ pt: 1, pl: 1, color: (isPast? grey[500]: 'black') }}>{cellNumber}</Typography>
                    </Grid>

                    {/* tasks.length > 4? */}
                    {tasks.map(task =>
                        <Mark task={task} isPast={isPast} />
                    )}
                </Grid>

            </Box>
        </Grid>
    );
}