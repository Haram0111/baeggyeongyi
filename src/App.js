<<<<<<< HEAD
import styled from "styled-components";
import {Navbar, Container, Row , Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faAlignJustify, faBell } from "@fortawesome/free-solid-svg-icons";
import logo from './logo.svg';
import React, {useState} from 'react'
import Alarm_data from "./Data/alarm";
import Feed from "./Component/postingFeed";
=======
import React from 'react';
>>>>>>> ffa62d0a1edfbd2d5334819b0d2ea830f98dd47a
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SettingBtn from "./Component/setting_btn";
import Navi_Top from './Component/navi_top';
import Main from './page/main_page';

<<<<<<< HEAD
const StyledNav = styled.div`
  height: 150px;
  width: 100%;
  background-color: blue;
  `;

const StyledAdv = styled.div`
  float: left;
  margin: 10px 0 0 5%;
  height: 100px;
  width: 20%;
  background-color: #61dafb;
  `;

const StyledContanier = styled.div`
  float: left;
  margin: 10px 0 0 10px;
  height: 500px;
  width: 50%;
  background-color: red;
  `;

const StyledSidebar = styled.div`
  float: right;
  margin: 10px 0 0 0;
  height: 1000px;
  width: 20%;
  background-color: grey;
  z-index: 2;
  `;

const StyledHotPosting = styled.div`
  margin: 20px auto 0;
  height: 150px;
  width: 91.3%;
  background-color: black;
  z-index: 2;
  color: white;
  `;

const StyledPageMove = styled.button`
  margin: 10px 0 0;
  height: 50px;
  width: 30%;
  background-color: white;
  border-radius: 15px;
  font-size: 20px;
  `;

const StyledAlarm = styled.div`
  margin: 10px auto 0;
  height: 600px;
  width: 90%;
  background-color: white;
  border-radius: 15px;
  `;
=======
>>>>>>> ffa62d0a1edfbd2d5334819b0d2ea830f98dd47a

function App() {
  return (
<<<<<<< HEAD
    <div className="App">      
      <StyledNav>
        <img
        alt="pkselect"
        src={logo}
        width="50"
        height="50"
        className="d-inline-block align-top"
      />{' '}
        백경이
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize: "30px", color: "white"}}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faBell} style={{fontSize: "30px", color: "white"}}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faAlignJustify} style={{fontSize: "30px", color: "white"}} onClick={()=>{setMenuShow(!menuShow); console.log(menuShow)}}></FontAwesomeIcon>
      </StyledNav>
      <StyledAdv>
        <p>광고바</p>
      </StyledAdv>
      <StyledContanier>
        <Feed></Feed>
      </StyledContanier>
      {
        menuShow ? 
        <StyledSidebar>
          <StyledHotPosting>핫게 글</StyledHotPosting>
          <>
            <StyledPageMove>1</StyledPageMove>{' '}
            <StyledPageMove>2</StyledPageMove>{' '}
            <StyledPageMove>3</StyledPageMove>{' '}
          </>
          <StyledAlarm>
            {
              alarm && alarm.map((a,i)=>{
                return(
                  <div key={i}>{a.text}</div>
                )
              })
            }
          </StyledAlarm>
        </StyledSidebar> : null
      }
=======
    <BrowserRouter>
    <div className="App">
      <Navi_Top/>
      <Routes>
        <Route path='/' element={<Main/>}/>

       {/* 프로필 설정 모달창 - test임 확정 x*/}
        <Route path="/modalTest" element={<SettingBtn/>}/>
      </Routes>
>>>>>>> ffa62d0a1edfbd2d5334819b0d2ea830f98dd47a
    </div>
    </BrowserRouter>
  );
}

export default App;