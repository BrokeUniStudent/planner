// import './Home.css';
import { MenuItem, Typography, Select, Autocomplete, TextField, Grid } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import HomeToDoList from './HomeToDoList.js';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { timezones } from '../Data/timezones.js';

export var timeZoneOffset = 0

dayjs.extend(utc)
dayjs.extend(timezone)

function Home() {
    var localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const [time, setTime] = useState();
    const [calendarDate, setCalendarDate] = useState();
    const [value, setValue] = useState(`${localTimeZone},${timezones[localTimeZone]}GMT`);

    const listTimeZones = Object.entries(timezones).map((region, offset) => `${region}GMT`);

    useEffect(() => {
        setTimeout(updateTime, 1000);
    });

    function updateTime() {
        setCalendarDate(dayjs().tz().format('YYYY/MM/DD ddd'))
        setTime(dayjs().tz().format('HH:mm'))
    }

    useEffect(() => { 
        if (value) { 
            const region = value.split(",")[0];
            console.log(region);
            dayjs.tz.setDefault(region); }
    }, [value])


    return (
        <>
            <Grid container columns={6}>

                <Grid item xs={3}>
                    <Typography variant='h2' align="center">{calendarDate}</Typography>
                    <Typography variant='h2' align="center">{time}</Typography>
                </Grid>


                <Grid item xs={3}>

                    <Typography variant="h6">Time Zone</Typography>
                    <Autocomplete
                        disablePortal
                        options={listTimeZones}
                        renderInput={(params) => <TextField {...params} />}
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        size='small'
                    />
                </Grid>
            </Grid>
            <HomeToDoList type="day" />
            <HomeToDoList type="week" />
        </>
    );
}

export default Home;