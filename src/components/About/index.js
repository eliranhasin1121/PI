import React from 'react';
import styled from 'styled-components';
import AboutIcon from '../../assets/about-logo.png';
import sectionB from '../../assets/sectionB.png';
import useMedia from '../../customHooks/UseMedia';
import { Image, MainText, StyledAbout, StyledAboutImgSection, StyledAboutText, StyledAboutTextSection, Text } from './StyledAbout';

const About = () => {
    const {isMobile} = useMedia();
    return (
        <div>
            <section>
                <StyledAbout className="row">
                    <StyledAboutImgSection className="col-6 col-12-small">
                        <Image style={{width:'65%',justifyContent:'center'}}  className="image featured mid" src={AboutIcon}></Image>
                    </StyledAboutImgSection>
                    
                    <StyledAboutTextSection className="col-6 col-12-small">
                        <StyledAboutText isMobile={isMobile}>
                        Pi is an absolute return macro volatility hedge fund focused primarily on emerging market currencies and sovereign debt.
                        </StyledAboutText>
                    </StyledAboutTextSection>
                </StyledAbout>
            </section>

        {!isMobile && <AharonWrapper>
    
                            <Image className="image featured" src={sectionB}></Image>
    
    <TextWrapper>
        <MainTextWrapper>Ahron Cohen</MainTextWrapper>
        <Text>
        Mr. Cohen is the co-founder of PI Group, which was founded in 1999. Mr. Cohen is leading the business development of the group and represents the Fund with Institutional investors in Israel.  
        Mr. Cohen has over 23 years' extensive experience in financial markets, mainly in private capital investments, Institutional investments and M&A in the public sector.
        Prior to founding PI Group, Mr. Cohen managed the stock options desk at Mizrahi Tefahot Bank Ltd. Between 1997 to 1999 Mr. Cohen was a senior Vice President at Clal finance Ltd, where he oversaw the proprietary and derivatives trading desks.
        </Text>
    </TextWrapper>
                    
    
        </AharonWrapper>}
        {isMobile &&
         <MobileAharonWrapper>
        <MainTextWrapper>Ahron Cohen</MainTextWrapper>
        <Text>
                     Mr. Cohen is the co-founder of PI Group, which was founded in 1999. Mr. Cohen is leading the business development of the group and represents the Fund with Institutional investors in Israel.  
        Mr. Cohen has over 23 years' extensive experience in financial markets, mainly in private capital investments, Institutional investments and M&A in the public sector.
        Prior to founding PI Group, Mr. Cohen managed the stock options desk at Mizrahi Tefahot Bank Ltd. Between 1997 to 1999 Mr. Cohen was a senior Vice President at Clal finance Ltd, where he oversaw the proprietary and derivatives trading desks.
        </Text>
        </MobileAharonWrapper>
            }
        </div>
    )
}


const AharonWrapper = styled(StyledAbout)`
padding:50px 0px;
`

const TextWrapper = styled.div`
    width: 60%;
    background-color: #D8D8D8;
    opacity: 0.6;
    position: relative;
    width: 30%;
    position: relative;
    top: -815px;
    margin-right: 15%;
    height: 751px;
    left: 65%;
`


const MainTextWrapper = styled(MainText)`

padding-top:20px;

`
export default About;

const MobileAharonWrapper = styled.div`
background-color: #D8D8D8;
padding:20px;
`
