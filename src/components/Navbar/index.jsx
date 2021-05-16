import React from 'react';
import PiNovelLOGO from '../../assets/pi-logo.png'
import styled from 'styled-components';

export default function Navbar({}){

    return(
        <nav className="web-nav-bar" id="nav">
        <StyledPiNovelIcon src={PiNovelLOGO}></StyledPiNovelIcon>
        <ul>
            <li><a className="nav-item scrolly" href="#main">ABOUT</a></li>
            <li><a className="nav-item" href="#team">TEAM</a></li>
            <li><a className="nav-item" href="no-sidebar.html">CONTACT</a></li>
        </ul>
    </nav>
    )
}


export const StyledPiNovelIcon = styled.img`
    z-index: 1001;
    position: fixed;
    top: 18px;
    left: 6px;
`