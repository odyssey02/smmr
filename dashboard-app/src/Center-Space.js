/* eslint-disable */
import React, {useState, useEffect} from "react";
import "./Center-Space.css";

import TestMain from "./Test-Main";
import {WeatherMain} from "./components/Weather";

function CenterSpace(props) {
    const select = {
        "TestMain": <TestMain />,
        "WeatherMain": <WeatherMain />
    };
    return (
        <div className="Center-Space">
            {props.title && select[props.title]}
        </div>
    );
}

export default CenterSpace;