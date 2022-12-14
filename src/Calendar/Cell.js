import { Grid, Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import Mark from './Mark.js';
import getLocalDeadline from "../functions/getLocalDeadline";
import { grey } from '@mui/material/colors';
import { getDeadlines } from "../Data/functions.js";

export default function Cell(props) {
    const todos = getDeadlines();
    const tasks = todos
        .filter(task =>
            task.deadline &&
            props.date.isSame(getLocalDeadline(task.deadline, task.timezone), 'day')
        )
        .sort((a,b) => {
            const localTimeA = getLocalDeadline(a.deadline, a.timezone);
            const localTimeB = getLocalDeadline(b.deadline, b.timezone);
            return localTimeA.isAfter(localTimeB) ? 1: -1
        })
    const cellNumber = props.date.date();
    const isPast = props.date.isBefore(dayjs(), 'day');
    let cellColor = 'white';
    if (isPast) {
        cellColor = grey[200];
    } else if (props.date.isSame(dayjs(), 'day')) {
        cellColor = '#CEE8FB';
    }

    return (
        <Grid item xs={1} sx={{ height: 100, bgcolor: cellColor }}>
            <Box sx={{ position: 'relative', bottom: 0, top: -5, height: 105, border: 1, borderTop: 0 }}>
                <Grid container columns={7} sx={{ height: '100%' }} columnSpacing={0.5} >
                    <Grid item xs={2}>
                        <Typography variant='h6' sx={{ pt: 1, pl: 1, color: (isPast ? grey[500] : 'black') }}>{cellNumber}</Typography>
                    </Grid>

                    {/* tasks.length > 4? */}
                    {tasks.map(task =>
                        <Mark task={task} isPast={isPast} key={task.id} />
                    )}
                </Grid>

            </Box>
        </Grid>
    );
}