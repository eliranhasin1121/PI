import React, { useRef } from 'react';
import styled from 'styled-components';
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
            <StyledAbout style={{backgroundColor:'rgba(211,211,211,0.4)'}} className="row">
<StyledAboutImgSection className="col-6 col-12-small">
<ImageWrapper className="image featured" src={sectionB}></ImageWrapper>

</StyledAboutImgSection>

<div className="col-6 col-12-small">
    <MainText>OUR PHILOSOPHY</MainText>
    <Text>
        We view risk-management as a fundamental tool in structuring each trade as well as our entire portfolio rather than merely an overlay to the portfolio. A conservative approach to risk assessment and management is at the core of the fund’s activities.
        <br/>
        <br/>
        The perpetual development of screening and pricing models allows the investment team to continually take advantage of market inefficiencies.
    </Text>
</div>
</StyledAbout>
            </section>
        </div>
    )
}

const StyledAboutTextWrapper = styled(StyledAboutText)`
font-size:26px;
text-align:left;
`

const ImageWrapper = styled(Image)`
height:100%;
`