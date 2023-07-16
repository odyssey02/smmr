/* eslint-disable */
import React, {useState, useEffect} from "react";
import "./Center-Space.css";

import TestMain from "./Test-Main";

function CenterSpace(props) {
    const select = {
        "TestMain": <TestMain />
    };
    return (
        <div className="Center-Space">
            {props.title && select[props.title]}
        </div>
    );
}

export default CenterSpace;