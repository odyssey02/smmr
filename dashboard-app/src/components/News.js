/* eslint-disable */
import React, {useState, useEffect} from "react";
import "../styles/News.css";

export function NewsSide(props) {
    return (
        <div className="News-Side Pitem-Common" onClick={(event)=>{
            event.preventDefault();
            props.onClick();
        }}>
            <div className="NewsSide-Title">
                <h1>뉴스</h1>
            </div>
            <div className="NewsSide-Body">
                <a>사이드바</a>
            </div>
        </div>
    );
}

export function NewsMain(props) {
    return (
        <div className="News-Main Main-Common">
            <div className="NewsMain-Title">
                <h1>뉴스</h1>
            </div>
            <hr/>
            <div className="NewsMain-Body">
                <a>뉴스걍 보지 맙시다</a>
            </div>
        </div>
    );
}

export default {NewsSide, NewsMain};