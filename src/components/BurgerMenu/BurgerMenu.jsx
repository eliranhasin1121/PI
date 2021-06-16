import React , {useEffect, useState} from 'react';
import { StyledBurderMenuContianer , StyledBurderMenu , StyledMenuText , StyledMenuIcon , InsideBurgerIcon } from './StyledBurgerMenu'
// import homeIcon from '../../assets/logoBurderNav.png'
import useMedia from '../../customHooks/UseMedia'
import { Link } from 'react-scroll'
import homeIcon from '../../assets/pi-logo.png';
import oppLogo from '../../assets/opp.png';
import { useLocation } from 'react-router-dom';

const BurgerMenu = ()=> {
    const {isMobile} = useMedia();
    const [isOpen,setIsOpen] = useState(false);
    const [logo,setLogo] = useState(null)
    const {pathname} = useLocation();

    console.log({pathname})


    useEffect(() => {
        if(pathname === '/pi-opportunities'){
            setLogo(oppLogo);
        }else{
            setLogo(homeIcon);
        }
    },[pathname])
   
    console.log(pathname === '/pi-opportunities')
    const isHE = pathname === '/pi-opportunities';
    return (
        <StyledBurderMenuContianer isOpp={pathname === '/pi-opportunities'}>
            <StyledBurderMenu isOpp={pathname === '/pi-opportunities'} role="navigation" isOpen={isOpen}>
                <div id="menuToggle">
                <div className='circle'></div>
                    <input type="checkbox" onClick={()=>setIsOpen(!isOpen)}/>
                        <span></span>
                        <span></span>
                        <span></span>

                    <ul id="menu">
                    <li><Link to="home" spy={true} smooth={true}>{isHE ? 'בית' : 'HOME'}</Link></li>
                    <li><Link to="team" spy={true} smooth={true}>{isHE ? 'צוות' : 'TEAM'}</Link></li>
                    <li><Link to="contact" spy={true} smooth={true}>{isHE ? 'צור קשר' : 'CONTACT'}</Link></li>
                    <InsideBurgerIcon isMobile={isMobile} className="image featured burger-icon" src={logo} alt="" />
                    </ul>
                    
                </div>
            </StyledBurderMenu>
                        <StyledMenuText>Menu</StyledMenuText>
            <StyledMenuIcon isMobile={isMobile} className="image featured" src={logo} alt="" />
        </StyledBurderMenuContianer>
    )

}


export default BurgerMenu;