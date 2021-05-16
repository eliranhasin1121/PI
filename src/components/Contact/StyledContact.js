import Styled from 'styled-components';

export const StyledFormHeader = Styled.h2`
    text-align: center;
`

export const StyledContactForm = Styled.div`
    margin: auto;
    background-color: #D8D8D8;
    padding:${({isMobile}) => isMobile ? '30px 20px' : '70px 40px'};
`

export const StyledForm = Styled.form`
    width: 70%;
    margin: auto;

    input{
        background-color: transparent;
        border:none;
        border-bottom:1px solid black;
    }
`

export const Input = Styled.input`
background-color: transparent;
        border:none;
        border-bottom:1px solid black;
        margin-bottom:10px;
`

export const ContactTextWrapper = Styled.div`
position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  background-color:white;
  opacity: 0.1;
    height: 90%;
    width: 138%;
`

export const ContactContainer = Styled.div`
  position:relative;
    color:white;

`

export const ButtonWrapper = Styled.div`
padding-top:20px;
display: flex;
justify-content: center;
`
export const Button = Styled.button`
background:transparent;
width:144px;
height:46px;
border:1px solid #979797;
color:black;
font-size:18px;
border-radius:8px;
`

export const TextContainer = Styled.div``

export const ContactTexts = Styled.div`

padding:40px;
`