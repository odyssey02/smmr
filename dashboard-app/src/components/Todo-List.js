/* eslint-disable */
import React, {useState, useEffect} from "react";
import "../styles/Todo-List.css";

/* 플러스 버튼 클릭 시 텍스트상자 show  */
 const addBtn = document.getElementById('imgBtn');
 const addList = document.getElementById('addText');
 
 addBtn.addEventListener("click", function() {
    if(addList.style.display=='none'){
        addList.style.display = 'block';
    }
    else{
        addList.style.display = 'none';
    }
 });

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
                <form id="list">
                    <label><input type="checkbox"></input> 미용실 가기 </label><br/>
                    <label><input type="checkbox"></input> 우체국 가기 </label><br/>
                    <label><input type="checkbox"></input> 할 일 1 </label><br/>
                    <label><input type="checkbox"></input> 할 일 2 </label><br/>
                </form>
                <div id="addText">
                    <input type="text" placeholder="할 일 추가하기" id="addList" autoFocus></input>
                    <button type="button" id="listBtn">+</button>
                </div>
            </div>
            <div className="add">
                <input type="button" id="imgBtn"></input>
            </div>
        </div>
    );
}

export default {TodoListSide, TodoListMain};