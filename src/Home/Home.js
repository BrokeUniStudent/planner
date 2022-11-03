// import './Home.css';
import { MenuItem, Typography, Select } from '@mui/material';
import { useState, useEffect } from 'react';
import HomeToDoList from './HomeToDoList.js';

export var timeZoneOffset = 0

function Home() {
    const weekdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const url = "https://worldtimeapi.org/api/timezone/";
    var localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    const [time, setTime] = useState();
    const [calendarDate, setCalendarDate] = useState();
    const [timeZone, setTimeZone] = useState(localTimeZone);
    
    useEffect(() => {
        setTimeout(updateTime, 1000);
    });

    useEffect(() => {
        getTimeOffset(timeZone);
    }, [timeZone]);

    function updateTime(){
        var date = new Date();
        date.setSeconds(date.getSeconds() + timeZoneOffset);
        // console.log(timeZoneOffset + " " + date.getHours())

        // update date
        var y = date.getFullYear();// year
        var mon = date.getMonth()+1;// month
        var d = date.getDate();// day
        var w = date.getDay(); // weekday

        mon = (mon < 10) ? "0" + mon : mon;
        d = (d < 10) ? "0" + d : d;
        w = weekdays[w]

        // update time
        var h = date.getHours(); // 0 - 23
        var m = date.getMinutes(); // 0 - 59
        var s = date.getSeconds(); // 0 - 59
        
        if(h === 0){
            h = 12;
        }
        
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
        

        setCalendarDate(d + "/" + mon + "/" + y + " " + w);
        setTime(h + ":" + m + ":" + s);
    }
    

    const changeTimeZone = (e) => {
        setTimeZone(e.target.value);
    }

    const getTimeOffset = async (zone) => {
        try {
            // console.log(url+zone);
          // get offest in seconds
            timeZoneOffset = await fetch(url + zone).then((res) => res.json()).then(res => res.raw_offset);
            // console.log(timeZoneOffset);
        //   console.log(timeZoneOffset);
            return timeZoneOffset
        } catch (e) {
          throw new Error(e);
        }
      };

    return (
        <div>
            <Typography variant='h2'>Home</Typography>
            <div className='clock date'>{calendarDate}</div>
            <div className='clock time'>{time}</div>

            <label for="selectTimeZone">Time Zone</label>
            <Select id="selectTimeZone" value={timeZone} onChange={changeTimeZone}>
                <MenuItem value="Asia/Shanghai">Beijing</MenuItem>
                <MenuItem value="Europe/London">London</MenuItem>
                <MenuItem value="Australia/Adelaide">Adelaide</MenuItem>
            </Select>

            <HomeToDoList type="daily" timeZoneOffset={timeZoneOffset} />
            <HomeToDoList type="weekly" timeZoneOffset={timeZoneOffset} />
        </div>
  );
}

export default Home;