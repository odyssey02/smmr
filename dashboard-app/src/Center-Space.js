/* eslint-disable */
import React, {useState, useEffect} from "react";
import "./Center-Space.css";

import TestMain from "./Test-Main";
import {AlarmMain} from "./components/Alarm";
import {NewsMain} from "./components/News";
import {StationInfoMain} from "./components/Station-Info";
import {TodoListMain} from "./components/Todo-List";
import {TrafficInfoMain} from "./components/Traffic-Info";
import {WeatherMain} from "./components/Weather";

function CenterSpace(props) {
    const select = {
        "TestMain": <TestMain />,
        "AlarmMain": <AlarmMain />,
        "NewsMain": <NewsMain />,
        "StationInfoMain": <StationInfoMain />,
        "TodoListMain": <TodoListMain />,
        "TrafficInfoMain": <TrafficInfoMain />,
        "WeatherMain": <WeatherMain />,
    };
    return (
        <div className="Center-Space">
            {props.title && select[props.title]}
        </div>
    );
}

export default CenterSpace;