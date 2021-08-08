import React from 'react';
import AboutIcon from '../../assets/grass-img.png';
import {
    StyledAbout, StyledAboutImgSection,
    StyledAboutText, StyledAboutTextSection
} from '../../components/About/StyledAbout';
import useMedia from '../../customHooks/UseMedia';

export default function About() {
    const {isMobile} = useMedia();
 

    return (
        <div>
            <section>
                <StyledAbout className="row">
                    <StyledAboutImgSection className="col-6 col-12-small">
                        <img  class="image featured mid" src={AboutIcon}></img>
                    </StyledAboutImgSection>
                    
                    <StyledAboutTextSection className="col-6 col-12-small">
                        <StyledAboutText style={{fontSize:28, padding:20}}>
                        We invest in early-stage ventures in Israel.<br/> We focus on identifying and partnering<br/> with the very best and most promising <br/>entrepreneurs and innovators with a view <br/>to building disruptive, world-changing<br/> companies.<br/>
                        Drawing upon our entrepreneurship <br/> experience and extensive network of<br/> business contacts, and the ability to<br/> support our portfolio companies with<br/> follow-up funding
                        </StyledAboutText>
                    </StyledAboutTextSection>
                </StyledAbout>
            </section>

            {/* <section>
                <StyledAbout className="row">
                <div>
                    <Image className="image featured" src={sectionB}></Image>
           
                </div>
                </StyledAbout>
            </section> */}
        </div>
    )
}