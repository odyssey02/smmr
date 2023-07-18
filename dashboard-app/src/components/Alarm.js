/* eslint-disable */
import React, {useState, useEffect} from "react";
import "../styles/Alarm.css";

export function AlarmSide(props) {
    return (
        <div className="Alarm-Side Pitem-Common" onClick={(event)=>{
            event.preventDefault();
            props.onClick();
        }}>
            <div className="AlarmSide-Title">
                <h1>알람</h1>
            </div>
            <div className="AlarmSide-Body">
                <a>사이드바</a>
            </div>
        </div>
    );
}

export function AlarmMain(props) {
    return (
        <div className="Alarm-Main Main-Common">
            <div className="AlarmMain-Title">
                <h1>알람</h1>
            </div>
            <hr/>
            <div className="AlarmMain-Body">
                <a>메인</a>
            </div>
        </div>
    );
}

export default {AlarmSide, AlarmMain};