/* eslint-disable */
/* App Main Component */
import React, {useState, useEffect} from 'react';
import './App.css';

import StateBar from './StateBar';
import ContentList from './Content-List';
import BottomPanel from './Bottom-Panel';
import CenterSpace from './Center-Space';
import SettingModal from './Setting-Modal';

function App() {
  const [centerContent, setCenterContent] = useState(false);
  const [EnSetModal, setEnSetModal] = useState(false);
  const settings = {};
  [settings.EnStaBar, settings.setEnStaBar] = useState(true);

  return (
    <div className="App">
      {settings.EnStaBar && <StateBar onClickSetButton={()=>{setEnSetModal(true);}}/>}
      <div className="App-Content">
        <ContentList onClickClear={()=>{setCenterContent(false);}} onClickContent={(SelectList)=>{setCenterContent(SelectList);}}/>
        <div className="Outer-Space">
          <CenterSpace title={centerContent}/>
          <BottomPanel />
        </div>
      </div>
      {settings.EnStaBar || <StateBar onClickSetButton={()=>{settings.setEnStaBar(!settings.EnStaBar);}}/>}
      {EnSetModal && <SettingModal onClickClose={()=>{setEnSetModal(false);}}/>}
    </div>
  );
}

export default App;
