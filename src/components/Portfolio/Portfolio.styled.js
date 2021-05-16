import styled from 'styled-components';

export const CompanyWrapper = styled.div`
display:flex;
flex-direction:column;
padding:15px;
align-items:center;
justify-content:center;
`

export const Logo = styled.img`
height:${({height}) => height}px;
width:${({width}) => width}px;
`
export const Name = styled.span`
font-size:22px;
font-weight:500;
`

export const Row = styled.div`
padding:50px 20px;
`