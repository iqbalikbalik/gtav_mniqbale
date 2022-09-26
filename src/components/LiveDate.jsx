import React, { useState } from "react";
import { RiSunFill, RiMoonClearFill } from "react-icons/ri";

const LiveDate = () => {

    let zone = 'en-GB';
    let event = new Date();

    // Full Days with date
    // const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
    const options = { weekday: 'long' };
    const date = event.toLocaleDateString(zone, options);

    // Times
    const localTime = event.toLocaleTimeString(zone, { hour: '2-digit', minute: '2-digit' });
    const [time, setTime] = useState(localTime);
    
    function updateTime() {
        const newTime = localTime;
        setTime(newTime);
    }
    setInterval(updateTime, 1000);

    // Weather
    const localHours = parseInt(event.toLocaleTimeString(zone, { hour: '2-digit' }));
    let weather;
    if (localHours >= 5 && localHours < 18) {
        weather = <RiSunFill />;
    } else{
        weather = <RiMoonClearFill />;
    }

  return (
    <div className='eyefind__header-top_time'>
        <div className='time__day'>
            <div className='date'>{date}</div>
            <div className='hours'>{time}</div>
        </div>
        <div className='time__weather'>{weather}</div>
    </div>

  )
}

export default LiveDate