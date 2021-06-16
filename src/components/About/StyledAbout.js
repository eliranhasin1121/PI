import styled from 'styled-components';

export const StyledAbout = styled.div`
    height: 740px;
    position:relative;
    background-color:white;
    height:100%;
`


export const StyledAboutImgSection = styled.div`
    display: flex;
    align-items: center;
`

export const Image = styled.img`
`

export const StyledAboutTextSection = styled.div`
    display: flex;
    align-items: center;
`


export const StyledAboutText = styled.p`
    font-size: 40px;
    color: #000000;
    line-height: 1;
    text-align: center;
`

export const SyledPhilosophy = styled.div`
position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  background-color:white;
  opacity:0.7;
  height:100%;
  width:${({isMobile}) => isMobile ? '100%' : '25%'};
`

export const TextWrapper = styled.div`
padding:0 30px;
`

export const Text = styled.span`
color:black;
`

export const MainText = styled.div`
padding:0 0px 12px 0px;
font-size:22px;
color:black;
font-weight:500;
text-align:center;
`
