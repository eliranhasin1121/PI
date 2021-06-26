import React from 'react';
import { useHistory, useLocation } from 'react-router';
import styled from 'styled-components';
import oppLogo from '../../assets/opprtunities-logo.png';
import PiNovelLOGO from '../../assets/pi-logo.png';
import {Link} from 'react-scroll';
export default function Navbar({}){
    const location = useLocation();
    const {pathname} = useLocation();
    const isHE  = !!location.pathname.includes('pi-opportunities');
    const history = useHistory();

    if(pathname.includes('cohen')){
        return null;
    }

    return(
        <Nav isHE={isHE} className="web-nav-bar" id="nav">
        <StyledPiNovelIcon onClick={() => history.push('/')} src={location.pathname.includes('pi-opportunities') ? oppLogo : PiNovelLOGO}></StyledPiNovelIcon>
        <ul>
            <li aria-label='About Section'><Link style={{color: isHE ? 'white' : 'black'}} className="nav-item" to={'main'} spy={true} smooth={true}>{isHE ? 'ראשי' : 'ABOUT'}</Link></li>
            <li aria-label='Team Section'><Link style={{color: isHE ? 'white' : 'black'}} className="nav-item" to={'team'} spy={true} smooth={true}>{isHE ? 'צוות' : 'TEAM'}</Link></li>
            <li aria-label='Contact Section'><Link style={{color: isHE ? 'white' : 'black'}} className="nav-item" to={'contact'} spy={true} smooth={true}>{isHE ? 'צור קשר' : 'CONTACT'}</Link></li>
        </ul>
    </Nav>
    )
}


export const StyledPiNovelIcon = styled.img`
    z-index: 1001;
    position: fixed;
    top: 18px;
    left: 34px;
`
 const Nav = styled.nav`
background-color:${({isHE}) => isHE ? 'black' : '#D8D8D8'};
opacity:${({isHE}) => isHE ? 1 : 0.7};

`