import logo from './logo.svg';
import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass, faAlignJustify } from "@fortawesome/free-solid-svg-icons";
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
  return (
    <div className="App">
      <StyledNav>
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize: "30px"}} onClick={{}}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faBell} style={{fontSize: "30px"}}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faAlignJustify} style={{fontSize: "30px"}}></FontAwesomeIcon>
      </StyledNav>
      <StyledAdv>
        <p>광고바</p>
      </StyledAdv>
      <StyledContanier>
        Contanier
      </StyledContanier>
      
    </div>
  );
}

export default App;