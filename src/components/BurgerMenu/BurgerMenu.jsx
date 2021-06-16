import React , {useState} from 'react';
import { StyledBurderMenuContianer , StyledBurderMenu , StyledMenuText , StyledMenuIcon , InsideBurgerIcon } from './StyledBurgerMenu'
// import homeIcon from '../../assets/logoBurderNav.png'
import useMedia from '../../customHooks/UseMedia'
import { Link } from 'react-scroll'
import homeIcon from '../../assets/pi-logo.png';
const BurgerMenu = ()=>{
    const {isMobile} = useMedia();
    const [isOpen,setIsOpen] = useState(false);
   
    return (
        <StyledBurderMenuContianer>
            <StyledBurderMenu role="navigation" isOpen={isOpen}>
                <div id="menuToggle">
                <div className='circle'></div>
                    <input type="checkbox" onClick={()=>setIsOpen(!isOpen)}/>
                        <span></span>
                        <span></span>
                        <span></span>

                    <ul id="menu">
                    <li><Link to="home" spy={true} smooth={true}>HOME</Link></li>
                    <li><Link to="team" spy={true} smooth={true}>TEAM</Link></li>
                    <li><Link to="contact" spy={true} smooth={true}>CONTACT</Link></li>
                    <InsideBurgerIcon isMobile={isMobile} className="image featured burger-icon" src={homeIcon} alt="" />
                    </ul>
                    
                </div>
            </StyledBurderMenu>
                        <StyledMenuText>Menu</StyledMenuText>
            <StyledMenuIcon isMobile={isMobile} className="image featured" src={homeIcon} alt="" />
        </StyledBurderMenuContianer>
    )

}


export default BurgerMenu;