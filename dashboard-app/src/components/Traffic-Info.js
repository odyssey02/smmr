/* eslint-disable */
import React, {useState, useEffect} from "react";
import "../styles/Traffic-Info.css";

export function TrafficInfoSide(props) {
    return (
        <div className="TrafficInfo-Side Pitem-Common" onClick={(event)=>{
            event.preventDefault();
            props.onClick();
        }}>
            <div className="TrafficInfoSide-Title">
                <h1>교통 정보</h1>
            </div>
            <div className="TrafficInfoSide-Body">
                <a>사이드바</a>
            </div>
        </div>
    );
}

export function TrafficInfoMain(props) {
    return (
        <div className="TrafficInfo-Main Main-Common">
            <div className="TrafficInfoMain-Title">
                <h1>교통 정보</h1>
            </div>
            <hr/>
            <div className="TrafficInfoMain-Body">
                <a>메인</a>
            </div>
        </div>
    );
}

export default {TrafficInfoSide, TrafficInfoMain};