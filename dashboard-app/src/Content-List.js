/* eslint-disable */
import React, {useState, useEffect} from "react";
import "./Content-List.css";

import TestContent from "./Test-Content";
import {AlarmSide} from "./components/Alarm";
import {NewsSide} from "./components/News";
import {StationInfoSide} from "./components/Station-Info";
import {TodoListSide} from "./components/Todo-List";
import {TrafficInfoSide} from "./components/Traffic-Info";
import {WeatherSide} from "./components/Weather";

function ContentList(props) {
    const select = {
        "TestMain": <TestContent title="TestMain" body="테스트 컴포넌트임"/>,
        "AlarmMain": <AlarmSide />,
        "NewsMain": <NewsSide />,
        "StationInfoMain": <StationInfoSide />,
        "TodoListMain": <TodoListSide />,
        "TrafficInfoMain": <TrafficInfoSide />,
        "WeatherMain": <WeatherSide />,
    };

    return (
        <div className="Content-List Panel-Common">
            <div className="Content-Menu">
                <button className="Content-Clear" onClick={(event)=>{
                    event.preventDefault();
                    props.onClickClear();
                }}>Clear</button>
            </div>
            {Object.keys(select).map(item => (React.cloneElement(select[item], {onClick: ()=>{props.onClickContent(item);}})))}
        </div>
    );
}

export default ContentList;