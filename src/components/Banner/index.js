import React from 'react';
import styled from 'styled-components';
import PiNovelLogo from '../../assets/banner-logo.png';
import { StyledPiLogo } from './StyledBanner';

const Banner = () =>{
    return (
        <Section id="banner" style={{padding:0}}>
        <Content className="content" style={{background:'#000000'}}>
            <BannerTextWrapper className="col-6 col-12-medium">
                <BannerText>For more financial instruments powered by PI-FUNDS</BannerText>
                <StyledPiLogo className="image featured" src={PiNovelLogo}></StyledPiLogo>
            </BannerTextWrapper>
            <a style={{color:'linear-gradient(180deg, #5C677D 0%, #7D8597 48%, #979DAC 100%)'}} href="#main" class="button scrolly">CLICK HERE</a>
        </Content>
    </Section>
    )
}

export default Banner;

const BannerText = styled.h3`
background: -webkit-linear-gradient(180deg, #133E7D 0%, #1D52A4 48%, #2567C8 100%);
width:fit-content;
background-color:black;
font-size:36px;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

`
const Section  = styled.section`
background-color:#000000;
padding:0;
`

const BannerTextWrapper = styled.div`
display: flex;
justify-content: center;
padding-bottom: 30px;
`

const Content = styled.div`
background-color:#000000;
`

const Button = styled.a`
background-image: -webkit-linear-gradient(180deg, #5C677D 0%, #7D8597 48%, #979DAC 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`