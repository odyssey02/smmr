/* eslint-disable */
import React, {useState, useEffect} from "react";
import "../styles/Station-Info.css";

export function StationInfoSide(props) {
    return (
        <div className="StationInfo-Side Pitem-Common" onClick={(event)=>{
            event.preventDefault();
            props.onClick();
        }}>
            <div className="StationInfoSide-Title">
                <h1>역 정보</h1>
            </div>
            <div className="StationInfoSide-Body">
                <a>지역</a>
            </div>
        </div>
    );
}

export function StationInfoMain(props) {
    return (
        <div className="StationInfo-Main Main-Common">
            <div className="StationInfoMain-Title">
                <h1>역 정보</h1>
            </div>
            <hr/>
            <div className="StationInfoMain-Body">
                <a>메인 브랜치 커밋 테스트22</a>
            </div>
        </div>
    );
}

export default {StationInfoSide, StationInfoMain};