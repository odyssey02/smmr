/* eslint-disable */
import React, {useState, useEffect} from "react";
import "../styles/Todo-List.css";

export function TodoListSide(props) {
    return (
        <div className="TodoList-Side Pitem-Common" onClick={(event)=>{
            event.preventDefault();
            props.onClick();
        }}>
            <div className="TodoListSide-Title">
                <h1>할 일</h1>
            </div>
            <div className="TodoListSide-Body">
                <a>사이드바</a>
            </div>
        </div>
    );
}

export function TodoListMain(props) {
    return (
        <div className="TodoList-Main Main-Common">
            <div className="TodoListMain-Title">
                <h1>할 일</h1>
            </div>
            <hr/>
            <div className="TodoListMain-Body">
                <a>메인</a>
            </div>
        </div>
    );
}

export default {TodoListSide, TodoListMain};