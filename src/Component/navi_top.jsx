import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faAlignJustify, faBell } from "@fortawesome/free-solid-svg-icons";
import logo from '../logo.svg';
import Navi_Slider from "./navi_slider";
import { useState } from "react";


function Navi_Top() {
    const [menuShow, setMenuShow] = useState(false);

    const StyledNav = styled.div`
    height: 80px;
    width: 100%;
    background-color: #0F296F;
    `;
    return(
        <>
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
                <FontAwesomeIcon icon={faAlignJustify} style={{fontSize: "30px", color: "white"}}
                onClick={()=>{setMenuShow(!menuShow)}}></FontAwesomeIcon>
        </StyledNav>
        <Navi_Slider menuShow={menuShow}/>
        </>
    );
}

export default Navi_Top;