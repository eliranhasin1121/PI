import Styled from 'styled-components'

export const StyledOutTeamText = Styled.p`
    height: ${(props) => props.isDevice ? 'auto' : '100%' };
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding : ${(props) => props.isDevice ? '10px 20px' : '45px' };
    min-width: 175px;
    text-align:${({isHE}) => isHE ? 'right' : 'left'};
`

export const StyledOutTeamImage = Styled.img`
    padding: ${(props) => props.isMobile ? '10px' : '30px' };
`

export const StyledTeamMemberContainer = Styled.div`
    display: flex;
    justify-content:center;

`

export const StyledTextContainer = Styled.div`
    padding-top: 0px;
`