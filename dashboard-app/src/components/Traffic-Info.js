/* eslint-disable */
import React, {useState, useEffect} from "react";
import "../styles/Traffic-Info.css";

var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>kakao 지도 시작하기</title>
          <style dangerouslySetInnerHTML={{__html: "\n        @import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap\");\n      " }} />
          <style dangerouslySetInnerHTML={{__html: "\n        #map {position: relative;z-index:1;}\n        .map_wrap, .map_wrap * {margin:0;padding:0;font-family:'Malgun Gothic',dotum,'돋움',sans-serif;font-size:12px;}\n        .map_wrap a, .map_wrap a:hover, .map_wrap a:active{color:#000;text-decoration: none;}\n        .map_wrap {position:relative;width:100%;height:500px;}\n        #menu_wrap {position:absolute;top:0;left:0;bottom:0;width:250px;margin:10px 0 30px 10px;padding:5px;overflow-y:auto;background:rgba(255, 255, 255, 0.7);z-index:2;font-size:12px;border-radius: 10px;}\n        .bg_white {background:#fff;}\n        #menu_wrap hr {display: block; height: 1px;border: 0; border-top: 2px solid #5F5F5F;margin:3px 0;}\n        #menu_wrap .option{text-align: center;}\n        #menu_wrap .option p {margin:10px 0;}  \n        #menu_wrap .option button {margin-left:5px;}\n        #placesList li {list-style: none;}\n        #placesList .item {position:relative;border-bottom:1px solid #888;overflow: hidden;cursor: pointer;min-height: 65px;}\n        #placesList .item span {display: block;margin-top:4px;}\n        #placesList .item h5, #placesList .item .info {text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}\n        #placesList .item .info{padding:10px 0 10px 55px;}\n        #placesList .info .gray {color:#8a8a8a;}\n        #placesList .info .jibun {padding-left:26px;background:url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_jibun.png) no-repeat;}\n        #placesList .info .tel {color:#009900;}\n        #placesList .item .markerbg {float:left;position:absolute;width:36px; height:37px;margin:10px 0 0 10px;background:url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png) no-repeat;}\n        #placesList .item .marker_1 {background-position: 0 -10px;}\n        #placesList .item .marker_2 {background-position: 0 -56px;}\n        #placesList .item .marker_3 {background-position: 0 -102px}\n        #placesList .item .marker_4 {background-position: 0 -148px;}\n        #placesList .item .marker_5 {background-position: 0 -194px;}\n        #placesList .item .marker_6 {background-position: 0 -240px;}\n        #placesList .item .marker_7 {background-position: 0 -286px;}\n        #placesList .item .marker_8 {background-position: 0 -332px;}\n        #placesList .item .marker_9 {background-position: 0 -378px;}\n        #placesList .item .marker_10 {background-position: 0 -423px;}\n        #placesList .item .marker_11 {background-position: 0 -470px;}\n        #placesList .item .marker_12 {background-position: 0 -516px;}\n        #placesList .item .marker_13 {background-position: 0 -562px;}\n        #placesList .item .marker_14 {background-position: 0 -608px;}\n        #placesList .item .marker_15 {background-position: 0 -654px;}\n        #pagination {margin:10px auto;text-align: center;}\n        #pagination a {display:inline-block;margin-right:10px;}\n        #pagination .on {font-weight: bold; cursor: default;color:#777;}\n        #trafficDisplay {position:absolute;left:92%;bottom: 12%;overflow-y:auto;background:rgba(255, 255, 255, 0.7);}\n        #changeN {position:absolute;}\n        h2 {display: inline-block;margin-left:15pt;margin-right:15pt;}\n        #changeName {display:inline-block;margin-right:3pt;}\n        #headerName {\n            margin-top: 50px;\n            width: 100%;\n            height: auto;\n        }\n        h3 {\n            font-family: Arial, Helvetica, sans-serif;\n            text-align: center;\n            font-size: 20pt;\n        }\n        #menubar {\n            width: 600px;\n            height: 70px;\n            margin-bottom: 20px;\n        }\n        #menuLs>li {\n            display: inline-block;\n            list-style-type: none;\n            margin: 20pt;\n        }\n        a {\n            text-decoration-line: none;\n            color: black;\n        }\n        a:hover {\n            color: rgb(111, 135, 252);\n        }\n        h2 {\n            font: '굴림';\n            color: rgb(111, 135, 252);\n            display: inline-block;\n            padding-left: 20pt;\n            padding-right: 50pt;\n            text-align: center;\n        }\n    " }} /> 
          {/* jquery 사용 위한 문구 추가!!!!*/}
          {/* ------------------------  */}
          <header>
            <div id="headerName">
              <h3>Traffic information</h3>
            </div>
          </header>
          <article>
            <div id="menubar">
              <ul id="menuLs">
                <li id="searchMap"><a href="http://127.0.0.1:5500/">장소 검색</a></li>
                <li id="trafficInfo"><a href="#">장소 정보</a></li>
                <li id="findWay"><a href="https://map.kakao.com/link/to/카카오판교오피스,37.402056,127.108212">길찾기</a></li>
                <li id="bookmark"><a href="#">경로 저장</a></li>
              </ul>
            </div>
          </article>
          <article>
            <div className="map_wrap">
              <div id="map" style={{width: '100%', height: '500px', position: 'relative', overflow: 'hidden'}} /> {/* 지도의 크기 설정*/}
              <div id="menu_wrap" className="bg_white">
                <div className="option">
                  <div>
                    <form onsubmit="searchPlaces(); return false;">
                      건물명(상호) <input type="text" defaultValue="인하공업전문대학교" id="keyword" size={15} /> 
                      <button type="submit">검색하기</button> 
                    </form>
                  </div>
                </div>
                <hr />
                <ul id="placesList" />
                <div id="pagination" />
              </div>
            </div>
          </article>
          <div id="trafficDisplay">
            <form name="tr">
              <input type="button" id="trafficOn" defaultValue="교통상황 ON" onclick="trafficDisplayChange();" />
            </form>
          </div>
          <article>
            <div id="changeN">
              <h2>기본 주소 변경하기</h2>
              <input type="text" id="changeName" placeholder="인하공업전문대학교" />
              <input type="button" defaultValue="변경" id="changeNameButton" onclick="changeName();" />
            </div>
          </article>
        </div>
      );
    }
  });




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


