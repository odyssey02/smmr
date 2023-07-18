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
  const [AppSettings, setAppsettings] = useState({  // App Settings(앱 전역세팅)
    EnStaBar: true,
  });

  return (
    <div className="App">
      {AppSettings.EnStaBar && <StateBar onClickSetButton={()=>{setEnSetModal(true);}}/>}
      <div className="App-Content">
        <ContentList onClickClear={()=>{setCenterContent(false);}} onClickContent={setCenterContent}/>
        <div className="Outer-Space">
          <CenterSpace title={centerContent}/>
          <BottomPanel />
        </div>
      </div>
      {AppSettings.EnStaBar || <StateBar onClickSetButton={()=>{setEnSetModal(true);}}/>}
      {EnSetModal && <SettingModal setList={AppSettings} changeSetList={setAppsettings} onClickClose={()=>{setEnSetModal(false);}}/>}
    </div>
  );
}

export default App;
