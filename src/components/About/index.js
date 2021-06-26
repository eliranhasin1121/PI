import React, { useRef } from 'react';
import AboutIcon from '../../assets/about-logo.png'
import {Row,Col} from 'antd';
import PhilosophyIcon from '../../assets/Philosophy.png';
import { StyledAbout,  StyledAboutImgSection , 
    StyledAboutTextSection , StyledAboutText , SyledPhilosophy,Image,TextWrapper,Text,MainText } from './StyledAbout';
    import sectionB from '../../assets/sectionB.png'
    import useMedia from '../../customHooks/UseMedia';
import useResize from '../../customHooks/UseResize';

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
                        <StyledAboutText>
                        Pi is an absolute return macro volatility hedge fund focused primarily on emerging market currencies and sovereign debt.
                        </StyledAboutText>
                    </StyledAboutTextSection>
                </StyledAbout>
            </section>

            <section>
                <StyledAbout style={{backgroundColor:'rgba(211,211,211,0.4)'}} className="row">
                <div  className="col-6 col-12-small">
                             <Image className="image featured" style={{margin:isMobile ? 0 : '0px 0 2em 0'}} src={sectionB}></Image>
                        </div>
                        <div className="col-6 col-12-small">
                           <TextWrapper>
                             <MainText>Ahron Cohen</MainText>
                             <Text>
                             Mr. Cohen is the co-founder of PI Group, which was founded in 1999. Mr. Cohen is leading the business development of the group and represents the Fund with Institutional investors in Israel.  
                             Mr. Cohen has over 23 years' extensive experience in financial markets, mainly in private capital investments, Institutional investments and M&A in the public sector.
                             Prior to founding PI Group, Mr. Cohen managed the stock options desk at Mizrahi Tefahot Bank Ltd. Between 1997 to 1999 Mr. Cohen was a senior Vice President at Clal finance Ltd, where he oversaw the proprietary and derivatives trading desks.
                             </Text>
                          </TextWrapper>
                        </div>
                      
           
                </StyledAbout>
            </section>
        </div>
    )
}

// <SyledPhilosophy ref={imgRef} isMobile={isMobile}>
// <TextWrapper>
// <MainText>Ahron Cohen</MainText>
// <Text>
// Mr. Cohen is the co-founder of PI Group, which was founded in 1999. Mr. Cohen is leading the business development of the group and represents the Fund with Institutional investors in Israel.  
// Mr. Cohen has over 23 years' extensive experience in financial markets, mainly in private capital investments, Institutional investments and M&A in the public sector.
// Prior to founding PI Group, Mr. Cohen managed the stock options desk at Mizrahi Tefahot Bank Ltd. Between 1997 to 1999 Mr. Cohen was a senior Vice President at Clal finance Ltd, where he oversaw the proprietary and derivatives trading desks.
// </Text>
// </TextWrapper>
// </SyledPhilosophy>


export default About;
