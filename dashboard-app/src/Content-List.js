/* eslint-disable */
import React, {useState, useEffect} from "react";
import "./Content-List.css";

import TestContent from "./Test-Content";

function ContentList(props) {
    return (
        <div className="Content-List Panel-Common">
            <div className="Content-Menu">
                <button className="Content-Clear" onClick={(event)=>{
                    event.preventDefault();
                    props.onClickClear();
                }}>Clear</button>
            </div>
            <TestContent title="TestContent" body="테스트 컴포넌트임" onClick={()=>{
                props.onClickContent("TestMain");
            }}/>
        </div>
    );
}

export default ContentList;