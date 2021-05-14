import React from 'react';
import styled from 'styled-components';
import jonnyKaye from '../../assets/jonnyKaye.png'
import { Image, MainText, StyledAbout, SyledPhilosophy, Text, TextWrapper } from '../About/StyledAbout';
import useMedia from '../../customHooks/UseMedia'
export default function JonnyKaye(){

    const {isMobile} = useMedia()

    console.log({isMobile});
    return(
        <section>
                <JonnyKayeContainer  className="row">
                <div>
                    <Image className="image featured" src={jonnyKaye}/>
                    <JonnyKayeWrapper isMobile={isMobile}>
                      <TextWrapper>
                      <MainText>Jonathan Kaye</MainText>
                      <Text>
                      Mr. Kaye has over 29 years of extensive experience in trading and managing proprietary FX and bond derivative books in the United States, Europe and Emerging Markets. In 1999, Mr. Kaye co-founded Pi Financial Instruments, one of the largest proprietary derivatives houses in Israel. Since that time he has been in charge of the group's risk management and proprietary trading of global bonds and FX derivatives book. In March 2006, Mr. Kaye launched Pi Fund specializing in trading hedged global sovereign fixed income and FX instruments.
                      Mr. Kaye started his career in 1992 trading listed options for Susquehana Investment Group, a Chicago based securities firm. From 1997 to 1999 Mr. Kaye was head of the proprietary derivatives desk at Ilanot-Batucha, a leading Israeli securities firm. He was awarded a BA Cum Laude and MBA both from Harvard University in 1992 and 1997, respectively. He also served as the captain of the National Champion (1991) Harvard squash team and earned a spot on the All-Ivy League team in 1989-90, 1990-91 and 1991-92.
                      </Text>
                      </TextWrapper>
                    </JonnyKayeWrapper>
                </div>
                </JonnyKayeContainer>
            </section>
    )
}

const JonnyKayeWrapper = styled(SyledPhilosophy)`
padding:20px;
width:${({isMobile}) => isMobile ? '100%' : '40%'};
`

const JonnyKayeContainer = styled(StyledAbout)`
height:100%;
`