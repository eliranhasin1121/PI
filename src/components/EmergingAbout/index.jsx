import React, { useRef } from 'react';
import AboutIcon from '../../assets/emerging-about.png'
import PhilosophyIcon from '../../assets/Philosophy.png';
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
                        PI EM is an absolute return macro volatility hedge fund focused primarily on emerging market currencies and sovereign debt.
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