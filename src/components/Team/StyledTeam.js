import Styled, { css } from 'styled-components'

export const StyledOutTeamText = Styled.p`
    height: ${(props) => props.isDevice ? 'auto' : '100%' };
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding : ${(props) => props.isDevice ? '10px 0px' : '45px' };
    min-width: 175px;
    text-align:${({isHE}) => isHE ? 'right' : 'left'};
`

export const StyledOutTeamImage = Styled.img`
    padding: ${(props) => props.isMobile ? '10px' : '30px' };
`

export const StyledTeamMemberContainer = Styled.div`
    display: flex;
    justify-content:center;

    ${({isDevice}) => isDevice &&  css`
        margin-left:50px;
    `}

    ${({isDevice,isOpp}) => isDevice && isOpp && css`
        flex-direction:row-reverse;
        justify-content: flex-end;
    `}

`

export const StyledTextContainer = Styled.div`
    padding-top: 0px;
`

export const Description  = Styled.span`
${({isDevice}) => isDevice && css`
padding:0px 20px;
`}
`