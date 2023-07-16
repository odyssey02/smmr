/* eslint-disable */
import React, {useState, useEffect} from 'react';
import './App.css';

import StateBar from './StateBar';
import ContentList from './Content-List';
import BottomPanel from './Bottom-Panel';
import CenterSpace from './Center-Space';

function App() {
  const [centerContent, setCenterContent] = useState("TestMain");
  const settings = {};
  [settings.EnStaBar, settings.setEnStaBar] = useState(true);
  return (
    <div className="App">
      {settings.EnStaBar && <StateBar onClickSetButton={()=>{settings.setEnStaBar(!settings.EnStaBar);}}/>}
      <div className="App-Content">
        <ContentList onClickClear={()=>{setCenterContent(false);}} onClickContent={(SelectList)=>{setCenterContent(SelectList);}}/>
        <div className="Outer-Space">
          <CenterSpace title={centerContent}/>
          <BottomPanel />
        </div>
      </div>
      {settings.EnStaBar || <StateBar onClickSetButton={()=>{settings.setEnStaBar(!settings.EnStaBar);}}/>}
    </div>
  );
}

export default App;
