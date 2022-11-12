import { MenuItem, Typography, Select, Autocomplete, TextField, Grid } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import HomeToDoList from './HomeToDoList.js';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { timezones } from '../Data/timezones.js';

export default function TimeZonePicker(props) {
    var localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const [value, setValue] = useState(`${localTimeZone},${timezones[localTimeZone]}GMT`);

    const listTimeZones = Object.entries(timezones).map((region, offset) => `${region}GMT`);

    useEffect(() => { 
        if (value) { 
            const region = value.split(",")[0];
            console.log(region);
            dayjs.tz.setDefault(region); }
    }, [value])
    return (
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
    )
}