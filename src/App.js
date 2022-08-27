import React, {useState} from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SettingBtn from "./Component/setting_btn";
import Navi_Top from './Component/navi_top';
import Main from './page/main_page';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navi_Top/>
      <Routes>
        <Route path='/' element={<Main/>}/>
       {/* 프로필 설정 모달창 - test임 확정 x*/}
        <Route path="/modalTest" element={<SettingBtn/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;