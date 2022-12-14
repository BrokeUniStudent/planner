import { Autocomplete, TextField } from '@mui/material';
import { timezones } from '../Data/timezones.js';
import { useState, useEffect } from 'react';


export default function TimeZonePicker(props) {

    var localTimeZone = props.defaultValue ?? Intl.DateTimeFormat().resolvedOptions().timeZone;

    const [value, setValue] = useState(`${localTimeZone},${timezones[localTimeZone]}GMT`);


    const listTimeZones = Object.entries(timezones).map((region, offset) => `${region}GMT`);

    useEffect(() => {
        if (value) {
            const region = value.split(",")[0];
            props.setRegion(region);
        }
    }, [value]);

    return (
        <Autocomplete
            disablePortal
            options={listTimeZones}
            renderInput={(params) => <TextField {...params} />}
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            sx={{ minWidth: 350 }}
            size='small'
        />
    )
}