import React from 'react';
import styled, { css } from 'styled-components'
import footerLogo from '../../assets/footer-logo.png';
import footerCohen from '../../assets/footer-cohen.png'
import useMedia from '../../customHooks/UseMedia';
import { useLocation } from 'react-router';

export default function Footer({history}){

    const {isMobile} = useMedia();
	const {pathname} = useLocation();

	const isCohen = pathname.includes('cohen')
	const isHE = pathname.includes('opportunities');

    return(
		<>
        <FooterContainer >
		 <FooterContentContainer isMobile={isMobile}>

		 {!isMobile ? ( 
             <>
		<InternalRow  className="col-6">
          <LinkItemWrapper style={{margin: '35px 0px 0px 0px'}} className="col-2-small">
		    <Logo style={{height:isCohen && 30}} className="image featured"   src={isCohen ? footerCohen : footerLogo}/>
		  </LinkItemWrapper>
		  <LinkItemWrapper className="col-3">
		    <Text as={'span'}>{isCohen ? '©Cohen Kaye Ltd | POWERED BY NERAFOX' : '©PI FUNDS | POWERED BY NERAFOX'}</Text>
		  </LinkItemWrapper>
		  </InternalRow>
		  <InternalRow className="col-6">
		   <LinkItemWrapper className="col-1">
		  <Text>{isHE ?'ראשי': 'HOME'}</Text>
		 </LinkItemWrapper>
		 <LinkItemWrapper className="col-1">
		 <Text>{isHE ? 'צוות':'ABOUT'}</Text>
		</LinkItemWrapper>
		<LinkItemWrapper className="col-1">
		<Text>{isHE ? 'צור קשר': 'TEAM'}</Text>
	   </LinkItemWrapper>
	   
	   {!isHE && <LinkItemWrapper className="col-1">
	   <Text >PRODUCTS</Text>
	  </LinkItemWrapper>}
	   </InternalRow>
	  <LinkItemWrapper className="col-3">
	    <Text as={'span'} >{isHE ? 'א א א | נגישות': 'TERMS OF USE | ACCESSIBILITY | A   A   A'}</Text> 
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
	  {isHE &&   
	<FooterText>
		<span>
		המידע באתר אינו מהווה הצעה להשקעה בקרן או הזמנה לקבלת הצעות להשקעה בקרן, אינו מהווה בסיס לקבלת החלטות השקעה, ואינו מהווה המלצה ו/או חוות דעת ואינו תחליף לשיקול דעת של משקיע פוטנציאלי. כמו כן האמור כאן אינו מהווה תחליף לייעוץ מקצועי בידי בעל רישיון המתחשב בצרכי הלקוח וכן אינו מהווה תחליף לייעוץ מס. האמור באתר זה אינו מהווה הצעה של ניירות ערך. ניירות הערך של הקרנות השונות אינם רשומים ולא ירשמו למסחר והם מוצעים למשקיעים בדרך של הצעה פרטית למספר מוגבל של ניצעים כקבוע בחוק ני"ע. התקשרות בהסכם השקעה הינה לפי שיקול דעתו המוחלט של השותף הכללי.
		</span>
	</FooterText>
}
	  </>

    )
}

const FooterContentContainer = styled.div`
background-color:#000000;
padding:20px;
display:flex;
justify-content:space-between;
${({isMobile}) => isMobile && css`
padding-top:50px;
`}
`

const InternalRow = styled.div`
display:flex;
`
const LinkItemWrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:15px 0 0 25px;
height:20px;
`

const Text = styled.a`
font-size:12px;
color:#ffffff;
`

const Logo = styled.img`
width:42px;
height:67px;
`

const FooterText = styled.p`
	direction: rtl;
    background: rgb(216, 216, 216);
    padding: 25px;
	margin-bottom : 0px;
	color:white;
`


export const FooterContainer = styled.footer``