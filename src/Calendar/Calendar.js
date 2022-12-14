import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import { Paper, Typography, Button } from '@mui/material';
import { useState } from 'react';
import Cell from './Cell';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Calendar(props) {

    dayjs.extend(isLeapYear);

    const [selectedMonth, setSelectedMonth] = useState(dayjs().month());
    const [selectedYear, setSelectedYear] = useState(dayjs().year());

    const noOfDays = { 0: 31, 1: dayjs(selectedYear).isLeapYear() ? 29 : 28, 2: 31, 3: 30, 4: 31, 5: 30, 6: 31, 7: 31, 8: 30, 9: 31, 10: 30, 11: 31 };

    const listOfDays = [...Array(noOfDays[selectedMonth]).keys()]
        .map(day => day + 1);
    const firstDayOfMonth = dayjs(`${selectedYear}-${selectedMonth + 1}-1`);

    const emptyCells = [...Array(firstDayOfMonth.day()).keys()];

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


    const goLast = () => {
        if (selectedMonth === 0) {
            setSelectedMonth(11);
            setSelectedYear(prevYear => prevYear - 1);
        } else {
            setSelectedMonth((prevMonth) => prevMonth - 1);
        }
    }

    const goNext = () => {
        if (selectedMonth === 11) {
            setSelectedMonth(0);
            setSelectedYear(prevYear => prevYear + 1);
        } else {
            setSelectedMonth((prevMonth) => prevMonth + 1);
        }
    }


    return (
        <div id='calendar'>
            <Grid container columns={6}>
                <Grid item xs={1}>
                    <Button fullWidth size='large' sx={{ height: '100%' }} color='inherit' onClick={goLast}>
                        <ArrowBackIosNewIcon />
                    </Button>
                </Grid>

                <Grid item xs={4}>
                    <Typography variant='h3' align='center'>{`${selectedYear} ${months[selectedMonth]}`}</Typography>
                </Grid>

                <Grid item xs={1}>
                    <Button fullWidth size='large' sx={{ height: '100%' }} color='inherit' onClick={goNext}>
                        <ArrowForwardIosIcon />
                    </Button>
                </Grid>

            </Grid>
            <Grid container columns={7}>
                {weekdays.map(weekday =>
                    <Grid item xs={1} sx={{ border: 1, textAlign: 'center' }} key={weekday}>
                        <Typography variant='h6'>{weekday}</Typography>
                    </Grid>
                )}
                {emptyCells.map(number => <Grid item xs={1} sx={{ border: 1 }} key={number + 'e'} />)}
                {listOfDays.map(day => <Cell date={dayjs(`${selectedYear}-${selectedMonth + 1}-${day}`)} key={day} />)}
            </Grid>
        </div>

    )
}