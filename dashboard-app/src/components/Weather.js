/* eslint-disable */
import React, {useState, useEffect} from "react";
import "../styles/Weather.css";

export function WeatherSide(props) {
    return (
        <div className="Weather-Side Pitem-Common" onClick={(event)=>{
            event.preventDefault();
            props.onClick();
        }}>
            <div className="WeatherSide-Title">
                <h1>날씨</h1>
            </div>
            <div className="WeatherSide-Body">
                <a>지역</a>
            </div>
        </div>
    );
}

export function WeatherMain(props) {
    return (
        <div className="Weather-Main Panel-Common">
            <div className="WeatherMain-Title">
                <h1>날씨</h1>
            </div>
            <hr/>
            <div className="WeatherMain-Body">
                <a>부가정보</a>
            </div>
        </div>
    );
}

export default {WeatherSide, WeatherMain};