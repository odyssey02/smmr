/* eslint-disable */
import React, { useState, useEffect } from "react";
import "./Setting-Modal.css";

function SettingModal(props) {
    const [PrevList, setPrevList] = useState(props.setList);
    const toggleSetting=(e)=> {
        const id = e.target.id;
        const newSettings = Object.assign({},props.setList,{[id]:!props.setList[id]});
        props.changeSetList(newSettings);
    }

    return (
        <div className="Setting-Modal">
            <div className="Setting-Modal-Content Panel-Common">
                <div className="Setting-Modal-Header">
                    <h1>Setting</h1>
                    <button className="Setting-Modal-Close" onClick={(event) => {
                        event.preventDefault();
                        props.onClickClose();
                    }}>X</button>
                </div>
                <hr />
                <div className="Setting-Modal-Body">
                    <ul>
                        <li><a>상태바 아래로 내리기</a><input type="checkbox" id="EnStaBar" checked={!props.setList.EnStaBar} onChange={toggleSetting}/></li>
                    </ul>
                </div>
                <hr />
                <div className="Setting-Modal-Footer">
                    <button className="Setting-Modal-Apply" onClick={(event) => {
                        event.preventDefault();
                        props.onClickClose();
                    }}>Apply</button>
                    <button className="Setting-Modal-Cancel" onClick={(event) => {
                        event.preventDefault();
                        props.changeSetList(PrevList);
                    }}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default SettingModal;