// import './Home.css';
import { MenuItem, Typography, Select, Autocomplete, TextField, Grid } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import HomeToDoList from './HomeToDoList.js';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { timezones } from '../Data/timezones.js';
import TimeZonePicker from '../Micellenous/TimeZonePicker.js';

export var timeZoneOffset = 0

dayjs.extend(utc)
dayjs.extend(timezone)

function Home() {

    const [time, setTime] = useState();
    const [calendarDate, setCalendarDate] = useState();
    const [region, setRegion] = useState();

    useEffect(() => {
        setTimeout(updateTime, 1000);
    });

    function updateTime() {
        setCalendarDate(dayjs().tz().format('YYYY/MM/DD ddd'))
        setTime(dayjs().tz().format('HH:mm'))
    }

    useEffect(() => { 
        console.log(region);
        dayjs.tz.setDefault(region); 
    }, [region])


    return (
        <>
            <Grid container columns={6}>

                <Grid item xs={3}>
                    <Typography variant='h2' align="center">{calendarDate}</Typography>
                    <Typography variant='h2' align="center">{time}</Typography>
                </Grid>

                <Grid item xs={3}>
                    <Typography variant="h6">Time Zone</Typography>
                    <TimeZonePicker setRegion={setRegion} />
                </Grid>
            </Grid>
            <HomeToDoList type="day" />
            <HomeToDoList type="week" />
        </>
    );
}

export default Home;