import React from 'react';
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import footerLogo from '../../assets/footer-logo.png';
import arrowDown from '../../assets/scroll-down.png';
import About from '../../components/About';
import Home from '../../components/Home';
import JonnyKaye from '../../components/JonnyKaye';
import OurProduct from '../../components/OurProducts/OurProducts';
import Products from '../../components/Products/Products';
import Team from '../../components/Team';
import TimeLine from '../../components/TimeLine';
import { changeLanguage, getActiveLanguage } from '../../config/translations/utils';
import useMedia from '../../customHooks/UseMedia';
import { loginAction } from '../../data/modules/auth/auth.actions';
import { OurProductStyled, ScrollImage, TextWrapper } from './Main.styled';


export default () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { activeUser } = useSelector(store => store.auth);

  const {isMobile} = useMedia();

  function onToggleLanguage() {
    return getActiveLanguage() === 'en'
      ? changeLanguage('he')
      : changeLanguage('en');
  }

  async function onLogin() {
    try {
      dispatch(loginAction());
    } catch (err) {
      console.log(err);
    }
  }

  return (
      <div id="page-wrapper">
		<section>
		  <Home/>
		</section>
        <section id="main">
		  <div className="row gtr-200">
			<div className="col-12">
               <About/>
			</div>
			<section>
			  <TimeLine/>
			 </section>
			 <section>
		    	<JonnyKaye/>
			 </section>
			 <section className="col-12">
				<OurProduct/>
			 </section>
		   </div>
	{!isMobile && <section style={{marginBottom:0}} className="col-12">
			<OurProductStyled>
			<ScrollImage style={{height:60,width:60}} className="image featured" src={arrowDown}/>
			<TextWrapper>
			  <h3 style={{color:'white'}}>OUR PRODUCTS</h3>
			  <p style={{color:'white'}}>more</p>
			</TextWrapper>
			</OurProductStyled>  
		</section>}
		<section className="col-12" >
		  <Products/>
		</section>
		<div class="col-12">
		<h2 className="our-team-header">OUR TEAM</h2>
			<Team/>
		</div>
		</section> 
		<footer>
		 <div className="row" style={{background:'#000000',padding:'0px 20px'}}>
		  <div className="col-2-small">
		    <img className="image featured" style={{width:42,height:67}} src={footerLogo}/>
		  </div>
		  <div className="col-3" style={{ paddingTop:55}}>
		    <Text>©PI FUNDS | POWERED BY NERAFOX</Text>
		  </div>
		   <LinkItemWrapper className="col-1">
		  <Text>HOME</Text>
		 </LinkItemWrapper>
		 <LinkItemWrapper className="col-1">
		 <Text>ABOUT</Text>
		</LinkItemWrapper>
		<LinkItemWrapper className="col-1">
		<Text>TEAM</Text>
	   </LinkItemWrapper>
	   <LinkItemWrapper className="col-1">
	   <Text >PRODUCTS</Text>
	  </LinkItemWrapper>
	  <LinkItemWrapper className="col-3">
	    <Text >TERMS OF USE | ACCESSIBILITY | A   A   A</Text> 
	  </LinkItemWrapper>
		 </div>
		
	  </footer>
	  </div>
  );
};

const LinkItemWrapper = styled.div`
padding-top:55px;
`

const Text = styled.span`
font-size:12px;
color:#ffffff;
`