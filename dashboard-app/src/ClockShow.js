/* eslint-disable */
import React, {useState, useEffect} from "react";

function ClockShow() {
    const [date,setDate] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 100);
        return function cleanup() {
        clearInterval(timer);
        };
    });
    return (
        <div className="ClockShow">
        {date.toLocaleDateString()} {date.toLocaleTimeString()}
        </div>
    );
}

export default ClockShow;