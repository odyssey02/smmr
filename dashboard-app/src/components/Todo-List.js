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
                <h1>TodoList</h1>
            </div>
            <div className="TodoListSide-Body">
                <a>일정 정리</a>
            </div>
        </div>
    );
}

export function TodoListMain(props) {
    return (
        <div className="TodoList-Main Main-Common">
            <div className="TodoListMain-Title">
                <p><h1>오늘의 할 일 ✅</h1></p>
            </div>
            <hr/> <br/>
            <div className="TodoListMain-Body">
                <form>
                    <label><input type="checkbox"></input> 미용실 가기 </label><br/>
                    <label><input type="checkbox"></input> 우체국 가기 </label><br/>
                    <label><input type="checkbox"></input> 할 일 1 </label><br/>
                    <label><input type="checkbox"></input> 할 일 2 </label><br/>
                </form>
            </div>
            <div className="add">
                <input type="button"></input>
            </div>
        </div>
    );
}

export default {TodoListSide, TodoListMain};