import React from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import oppLogo from '../../assets/opprtunities-logo.png';
import PiNovelLOGO from '../../assets/pi-logo.png';
export default function Navbar({}){
    const location = useLocation();
    const isHE  = !!location.pathname.includes('pi-opportunities');

    return(
        <Nav isHE={isHE} className="web-nav-bar" id="nav">
        <StyledPiNovelIcon src={location.pathname.includes('pi-opportunities') ? oppLogo : PiNovelLOGO}></StyledPiNovelIcon>
        <ul>
            <li><a style={{color: isHE ? 'white' : 'black'}} className="nav-item scrolly" href="#main">{isHE ? 'ראשי' : 'ABOUT'}</a></li>
            <li><a style={{color: isHE ? 'white' : 'black'}} className="nav-item" href="#team">{isHE ? 'צוות' : 'TEAM'}</a></li>
            <li><a style={{color: isHE ? 'white' : 'black'}} className="nav-item" href="no-sidebar.html">{isHE ? 'צור קשר' : 'CONTACT'}</a></li>
        </ul>
    </Nav>
    )
}


export const StyledPiNovelIcon = styled.img`
    z-index: 1001;
    position: fixed;
    top: 18px;
    left: 6px;
`
 const Nav = styled.nav`
background-color:${({isHE}) => isHE ? 'black' : '#D8D8D8'};
opacity:${({isHE}) => isHE ? 1 : 0.7};

`