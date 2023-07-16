/* eslint-disable */
import React, {useState, useEffect} from "react";
import "./Setting-Modal.css";

function SettingModal(props) {
    return (
        <div className="Setting-Modal">
            <div className="Setting-Modal-Content Panel-Common">
                <div className="Setting-Modal-Header">
                    <h1>Setting</h1>
                    <button className="Setting-Modal-Close" onClick={(event)=>{
                        event.preventDefault();
                        props.onClickClose();
                    }}>X</button>
                </div>
                <div className="Setting-Modal-Body">
                </div>
                <div className="Setting-Modal-Footer">
                    <button className="Setting-Modal-Apply" onClick={(event)=>{
                        event.preventDefault();
                        props.onClickApply();
                    }}>Apply</button>
                    <button className="Setting-Modal-Cancel" onClick={(event)=>{
                        event.preventDefault();
                        props.onClickCancel();
                    }}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default SettingModal;