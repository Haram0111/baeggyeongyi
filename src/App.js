import styled from "styled-components";
import {Navbar, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faAlignJustify, faBell } from "@fortawesome/free-solid-svg-icons";
import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';

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

function App() {
  const [menuShow, setMenuShow] = useState(false);

  return (
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
        Contanier
      </StyledContanier>
      {
        menuShow ? <div>보여줘 너의 미래!!
          대충 메뉴있는 곳
        </div> : null
      }
    </div>
  );
}

export default App;