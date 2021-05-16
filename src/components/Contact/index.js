import React from 'react';
import Banner from '../Banner';
import ContactRight from '../../assets/contact.png';
import { StyledContactForm , StyledFormHeader , StyledForm, Input,ContactTextWrapper,ContactContainer,Button,ButtonWrapper,TextContainer,ContactTexts  } from './StyledContact';
import UseMedia from '../../customHooks/UseMedia';
import { Text, TextWrapper } from '../About/StyledAbout';


const Contact = () =>{

    const {isMobile} = UseMedia();
    return (
        <div>
            <Banner/>
            <section>
                <div className="row">
                    <StyledContactForm style={{margin:isMobile ? 0 :'42px 0px 35px 0px'}} className="col-6 col-12-medium">
                        <StyledFormHeader style={{padding:0}}> CONTACT US</StyledFormHeader>
                        <StyledForm>
                            <Input
                                style={{border:'none',borderBottom:'2px solid black',background:'transparent',borderRadius:0}}
                                type="text" 
                                name="YOUR NAME" 
                                placeholder="YOUR NAME" />
                            
                            <Input 
                                style={{border:'none',borderBottom:'2px solid black',background:'transparent',borderRadius:0}}
                                type="email" 
                                name="EMAIL" 
                                placeholder="EMAIL" />
                            
                            <Input
                                style={{border:'none',borderBottom:'2px solid black',background:'transparent',borderRadius:0}} 
                                type="text" 
                                name="CELLPHONE" 
                                placeholder="CELLPHONE" />
                            
                            <Input 
                            style={{border:'none',borderBottom:'2px solid black',background:'transparent',borderRadius:0}}
                            type="text" 
                            name="YOUR MESSAGE" 
                            placeholder="YOUR MESSAGE" />
                            <ButtonWrapper>
                                <Button type="submit">SEND</Button>                        
                            </ButtonWrapper>
                        </StyledForm>
                        <ContactTexts className="row">
                          <TextContainer className="col-6 col-12-medium">
                             <p>Raoul Wallenberg 18	 Building D,	1st Floor
                             Ramat HaChayal,	Tel Aviv 	6971915
                             Israel
                             
                             Tel: +972 (0)3 373 2084
                             
                             Fax: +972 (0)3 373 2102</p>
                          </TextContainer>
                          <TextContainer className="col-6 col-12-medium">
                            <p>SS&C Financial Services Ltd and SS&C Fund Services (Cayman) Ltd

                            39 Market Street Suite 3205
                            
                            Camana Bay, Grand Cayman KY1-9003
                            Cayman Islands</p>
                          </TextContainer>
                        </ContactTexts>
                    </StyledContactForm>
                    <ContactContainer style={{padding:0}} className="col-6 col-12-medium">
                    <img className="image featured" src={ContactRight}></img>
                    </ContactContainer>
                </div>
            </section>
        </div>
    )
}

export default Contact;