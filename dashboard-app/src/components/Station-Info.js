/* eslint-disable */
import React, {useState, useEffect} from "react";
import axios from "axios";
import "../styles/Station-Info.css";

const { REACT_APP_BUS_API_KEY } = process.env;

let Businfo ={};
function getBusInfo() {
    let url = "http://apis.data.go.kr/6410000/busarrivalservice/getBusArrivalList";
    let queryParams = '?' + encodeURIComponent('serviceKey') + '=' + REACT_APP_BUS_API_KEY; /* Service Key*/
    queryParams += '&' + encodeURIComponent('stationId') + '=' + encodeURIComponent('200000078'); /**/

    axios.get(url+queryParams).then((response) => {
        Businfo = response.data;
        console.log(Businfo);
    }).catch((error) => {
        console.log(error);
    });
}

export function StationInfoSide(props) {

    useEffect(() => {
        getBusInfo();
        const refreshBus = setInterval(getBusInfo, 15000);
        return function cleanup() {
            clearInterval(refreshBus);
        };
    });

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