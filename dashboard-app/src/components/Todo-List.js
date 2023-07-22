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
        <h1>
          <p>오늘의 할 일 ✅</p>
        </h1>
      </div>
      <hr /> <br />

      <div className="TodoListMain-Body">
        <div className="showList">
          <ul id="listCont">
            <li key={1} id="li">
              <div id="result"></div>
            </li>
          </ul>
        </div>

        <div id="addText">
          <input type="text" placeholder="할 일 추가하기" id="textBox" autoFocus></input>
          <button type="button" id="listBtn" onClick={addTodo}>+</button>
        </div>
      </div>

      <div className="footer">
        <button type="button" id = "allClear" onClick={allClearList}>모두 삭제</button>
      </div>
      
      <div className="add">
        <button type="button" id="addBtn"></button>
      </div>
    </div>
  );
}

let index = 0;

const addBtn = document.getElementById('addBtn');
const addText = document.getElementById('addText');
const textBox = document.getElementById('textBox');
const result = document.getElementById('result');

if(addText){
  addBtn.addEventListener("click", function () {
    if (addText.style.display === "none") {
      addText.style.display = "block";
    } else {
      addText.style.display = "none";
    }
  });
}

function addTodo() {
  const textValue = textBox.value; // 수정
  if (textValue) {
    if (textValue == false) { // 수정
      alert("내용을 입력하세요.");
    } else {
      index++;
      let listCont = document.getElementById("listCont");
      let list = document.createElement("li");
      let del = document.createElement("button");
      list.innerHTML = textValue;
      list.setAttribute("key", index);
      listCont.appendChild(list);
      result.appendChild(list); // 추가된 할일에 할일 리스트 추가하기
      list.appendChild(del); // 할일 리스트 추가시 삭제버튼도 추가
      list.style.fontSize = "20px";
      del.innerText = "x"; // 삭제버튼에 들어갈 'x'자 문자
      del.style.fontSize = "20px";
      del.style.border = "none";
      del.style.float = "right";
      del.style.right = "17px";
      del.style.marginTop = "5px";
      del.style.cursor = "pointer";
      del.addEventListener("click", deleteList); // 삭제버튼 클릭시 리스트지우기 이벤트 실행
      del.style.position = 'relative';

      addText.style.display = "none";
      textBox.value = ' ';
      textBox.focus();

      list.addEventListener("click", function(){      //할일 완료 후 클릭시 밑줄로 표시
        if(list.style.textDecoration=="line-through" || list.style.color=="gray"){
          liststyle.textDecoration="none";
          list.style.color="white";
        }
        else{
          list.style.textDecoration = "line-through";
          list.style.color = "gray";                  //클릭시 색변환
        }
      });
    }
  }
}

function deleteList(e) {
  // 삭제 버튼(x) 클릭시
  let removeOne = e.target.parentElement; // 선택한 목록 한개만 지우기(부모 객체를 지운다)
  removeOne.remove();
}

function allClearList(){
  if(confirm("정말 삭제하시겠습니까?")==true){   //취소메시지가 true(ok)일때
      if(result.innerText=='' || result.innerText==null){                      //목록칸이 비어있다면
          alert("삭제할 목록이 없습니다");              //삭제할 목록이 없다는 경고창뜨기
      }else{                                         //삭제할 목록이 있다면
          result.innerText='';                       //전체 삭제
      }
  }else{                                      //취소메시지가 false(no)일때
      return false;                           //삭제 취소
  }
}


export default {TodoListSide, TodoListMain};