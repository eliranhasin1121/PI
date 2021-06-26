import React from 'react';
import Banner from '../Banner';
import { StyledContactForm , StyledFormHeader , StyledForm, Input,ContactTextWrapper,ContactContainer,Button,ButtonWrapper,TextContainer,ContactTexts,TextContact  } from './StyledContact';
import UseMedia from '../../customHooks/UseMedia';

const Contact = ({isHE = false,bannerText,texts = [],contactImg}) =>{

    const {isMobile} = UseMedia();
    return (
        <div>
            <Banner isHE={isHE} bannerText={bannerText}/>
            <section>
                <div className="row" >
                    <StyledContactForm isHE={isHE} isMobile={isMobile} className="col-6 col-12-medium">
                        <StyledFormHeader style={{padding:0}}>{ isHE ? 'צור קשר': 'CONTACT US'}</StyledFormHeader>
                        <StyledForm>
                            <Input
                                style={{border:'none',borderBottom:'2px solid black',background:'transparent',borderRadius:0}}
                                type="text" 
                                name="YOUR NAME" 
                                placeholder={isHE ? 'שם מלא' : "YOUR NAME"} />
                            
                            <Input 
                                style={{border:'none',borderBottom:'2px solid black',background:'transparent',borderRadius:0}}
                                type="email" 
                                name="EMAIL" 
                                placeholder={isHE ?'כתובת אימייל' : "EMAIL"} />
                            
                            <Input
                                style={{border:'none',borderBottom:'2px solid black',background:'transparent',borderRadius:0}} 
                                type="text" 
                                name="CELLPHONE" 
                                placeholder={isHE ? 'מספר טלפון' : "CELLPHONE"} />
                            
                            <Input 
                            style={{border:'none',borderBottom:'2px solid black',background:'transparent',borderRadius:0}}
                            type="text" 
                            name="YOUR MESSAGE" 
                            placeholder={isHE ? 'הודעה':"YOUR MESSAGE"} />
                            <ButtonWrapper>
                                <Button type="submit">{isHE ? 'שלח' :'SEND'}</Button>                        
                            </ButtonWrapper>
                        </StyledForm>
                        <ContactTexts className="row">
                        {texts.map((text,index) => (
                            <TextContainer key={index} className={`col-${12/texts.length} col-12-medium`}>
                            <TextContact>{text}</TextContact>
                         </TextContainer>
                        ))}
                        </ContactTexts>
                    </StyledContactForm>
                    <ContactContainer style={{padding:0}} className="col-6 col-12-medium">
                    <img className="image featured" style={{margin:0}} src={contactImg}></img>
                    </ContactContainer>
                </div>
            </section>
        </div>
    )
}

export default Contact;