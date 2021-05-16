import React from 'react';
import AboutIcon from '../../assets/opp-sectionC.png';
import sectionB from '../../assets/opp-sectionB.png'
import {
    Image, StyledAbout, StyledAboutImgSection,
    StyledAboutText, StyledAboutTextSection
} from '../../components/About/StyledAbout';
import useMedia from '../../customHooks/UseMedia';

export default function About() {
    const {isMobile} = useMedia();
 

    return (
        <div>
            <section>
                <StyledAbout className="row">
                <StyledAboutTextSection className="col-6 col-12-small">
                <StyledAboutText>
                הקרן הינה קרן הזדמנויות המכוונת לנטרל סיכוני שוק ולהעניק תשואה חיובית בכל מצב שוק
                </StyledAboutText>
            </StyledAboutTextSection>
                    <StyledAboutImgSection className="col-6 col-12-small">
                        <img  class="image featured" src={sectionB}></img>
                    </StyledAboutImgSection>
                    
                   
                </StyledAbout>
            </section>

            <section>
                <StyledAbout className="row">
                <div>
                    <Image className="image featured" src={AboutIcon}></Image>
           
                </div>
                </StyledAbout>
            </section>
        </div>
    )
}