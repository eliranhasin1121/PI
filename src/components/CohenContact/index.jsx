import React from 'react';
import Banner from '../Banner';
import ContactRight from '../../assets/contact.png';
import { StyledContactForm , StyledFormHeader , StyledForm, Input,ContactTextWrapper,ContactContainer,Button,ButtonWrapper,TextContainer,ContactTexts,TextContact  } from '../Contact/StyledContact';
import UseMedia from '../../customHooks/UseMedia';

const Contact = ({isHE = false,bannerText,texts = []}) =>{

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
                                placeholder={isHE ? 'שם מלא' : "YOUR NAME"}
                                required
                                />
                            
                            <Input 
                                style={{border:'none',borderBottom:'2px solid black',background:'transparent',borderRadius:0}}
                                type="email" 
                                name="EMAIL" 
                                placeholder={isHE ?'כתובת אימייל' : "EMAIL"} 
                                required
                                />

                                <Input 
                                style={{border:'none',borderBottom:'2px solid black',background:'transparent',borderRadius:0}}
                                type="email" 
                                name="EMAIL" 
                                placeholder="POSITION" 
                                required
                                />
                            
                            <Input
                                style={{border:'none',borderBottom:'2px solid black',background:'transparent',borderRadius:0}} 
                                type="text" 
                                name="CELLPHONE" 
                                placeholder={isHE ? 'מספר טלפון' : "PHONE"} />
                                <Input 
                                style={{border:'none',borderBottom:'2px solid black',background:'transparent',borderRadius:0}}
                                type="email" 
                                name="EMAIL" 
                                placeholder="COMPANY NAME" 
                                required
                                />
                                <Input 
                                style={{border:'none',borderBottom:'2px solid black',background:'transparent',borderRadius:0}}
                                type="email" 
                                name="EMAIL" 
                                placeholder="WEBSITE URL" 

                                />
                                <Input 
                                style={{border:'none',borderBottom:'2px solid black',background:'transparent',borderRadius:0}}
                                type="email" 
                                name="EMAIL" 
                                placeholder="INDUSTRY" 
                                />

                                <Input 
                                style={{border:'none',borderBottom:'2px solid black',background:'transparent',borderRadius:0}}
                                type="email" 
                                name="EMAIL" 
                                placeholder="BRIFE DESCRIPTION (255 characters max)"
                                maxLength={255} 
                                required
                                />
                                <Input 
                                style={{border:'none',borderBottom:'2px solid black',background:'transparent',borderRadius:0}}
                                type="email" 
                                name="EMAIL" 
                                placeholder="HOW DID YOU HEAR ABOUT US?" 
                                />
                                <Input 
                                style={{border:'none',borderBottom:'2px solid black',background:'transparent',borderRadius:0}}
                                type="email" 
                                name="EMAIL" 
                                placeholder="INDUSTRY" 
                                />
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
                    <img className="image featured" style={{margin:0}} src={ContactRight}></img>
                    </ContactContainer>
                </div>
            </section>
        </div>
    )
}

export default Contact;