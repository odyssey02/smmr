/* eslint-disable */
import React, {useState, useEffect} from "react";
import "./Test-Content.css";

function TestContent(props) {
    return (
        <div className="Test-Content" onClick={(event)=>{
            event.preventDefault();
            props.onClick();
        }}>
            <h1>{props.title}</h1>
            <a>{props.body}</a>
        </div>
    );
}

export default TestContent;