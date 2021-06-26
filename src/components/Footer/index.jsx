import React from 'react';
import styled from 'styled-components'
import footerLogo from '../../assets/footer-logo.png';
import useMedia from '../../customHooks/UseMedia';

export default function Footer(){

    const {isMobile} = useMedia();


    return(
        <FooterContainer>
		 <FooterContentContainer className="row">

		 {!isMobile ? ( 
             <>
          <LinkItemWrapper style={{margin: '35px 0px 0px 35px'}} className="col-2-small">
		    <Logo className="image featured"  src={footerLogo}/>
		  </LinkItemWrapper>
		  <LinkItemWrapper className="col-3">
		    <Text as={'span'}>©PI FUNDS | POWERED BY NERAFOX</Text>
		  </LinkItemWrapper>
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
	    <Text as={'span'} >TERMS OF USE | ACCESSIBILITY | A   A   A</Text> 
	  </LinkItemWrapper>
      </>
      ) : 
      (
    <>
    <LinkItemWrapper  className="col-2">
    <Logo className="image featured" src={footerLogo}/>
    </LinkItemWrapper>
    <LinkItemWrapper  className="col-10">
        <Text as={'span'}>©PI FUNDS | POWERED BY NERAFOX</Text>
    </LinkItemWrapper>
    </>
      )
    
    }
    </FooterContentContainer>
	  </FooterContainer>
    )
}

const FooterContentContainer = styled.div`
background-color:#000000;
padding:20px;
`

const LinkItemWrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:15px 0 0 25px;
`

const Text = styled.a`
font-size:12px;
color:#ffffff;
`

const Logo = styled.img`
width:42px;
height:67px;
`


export const FooterContainer = styled.footer``