import React, { useRef } from 'react';
import AboutIcon from '../../assets/grass-img.png'
import { StyledAbout,  StyledAboutImgSection , 
    StyledAboutTextSection , StyledAboutText , SyledPhilosophy,Image,TextWrapper,Text,MainText } from '../../components/About/StyledAbout';
    import sectionB from '../../assets/emerging-sectionB.png'
    import useMedia from '../../customHooks/UseMedia';
import useResize from '../../customHooks/UseResize';

export default function About() {
    const {isMobile} = useMedia();
 

    return (
        <div>
            <section>
                <StyledAbout className="row">
                    <StyledAboutImgSection className="col-6 col-12-small">
                        <img  class="image featured" src={AboutIcon}></img>
                    </StyledAboutImgSection>
                    
                    <StyledAboutTextSection className="col-6 col-12-small">
                        <StyledAboutText>
                        We invest in early-stage ventures in Israel. We focus on identifying and partnering with the very best and most promising entrepreneurs and innovators with a view to building disruptive, world-changing companies. 
                        Drawing upon our entrepreneurship experience and extensive network of business contacts, and the ability to support our portfolio companies with follow-up funding
                        </StyledAboutText>
                    </StyledAboutTextSection>
                </StyledAbout>
            </section>

            <section>
                <StyledAbout className="row">
                <div>
                    <Image className="image featured" src={sectionB}></Image>
           
                </div>
                </StyledAbout>
            </section>
        </div>
    )
}