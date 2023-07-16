/* eslint-disable */
import React, {useState, useEffect} from "react";
import "./StateBar.css";

import ClockShow from "./ClockShow";

function StateBar(props) {
    return (
        <div className="StateBar Panel-Common">
            <div className="StateBar-Left">
                <button className="StateBar-SetButton" onClick={(event)=>{
                    event.preventDefault();
                    props.onClickSetButton();
                }}>Settings</button>
            </div>
            <div className="StateBar-Right">
                <ClockShow />
            </div>
        </div>
    );
}

export default StateBar;