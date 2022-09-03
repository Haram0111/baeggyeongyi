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
        {/* 메인페이지 */}
        <Route path='/' element={<Main/>}/>
        {/* 1개 feed 보여주는 곳*/}
        <Route path='/:id' element={<Main/>}/>
        {/* UserPage*/}
        <Route path='/user/:id' element={<Main/>}/>
        {/* ChattingPage*/}
        <Route path='/chatting/:id' element={<Main/>}/>
       {/* 프로필 설정 모달창 - test임 확정 x*/}
        <Route path="/modalTest" element={<SettingBtn/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;