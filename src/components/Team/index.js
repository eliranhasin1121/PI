import React from 'react';
import styled from 'styled-components';
import Talia from '../../assets/talia.png'
import Shlomi from '../../assets/shlomi.png';
import Ronen from '../../assets/ronen.png';
import { StyledOutTeamText , StyledOutTeamImage , StyledTeamMemberContainer , StyledTextContainer} from './StyledTeam';
import useMedia from '../../customHooks/UseMedia';
import texts from '../../config/translations/locales/en.json'
const Team = ({team}) =>{
    const {isMobile , isDevice} = useMedia();

    return (
        <div>
        {
            team.map((member,index) => (
                <section>
                <Row reverse={index%2  !== 0 && !isDevice} className="row">
                    <StyledTeamMemberContainer className="col-6 col-6-medium">
                    <StyledOutTeamImage isMobile={isMobile} className="image featured" src={member.img}/>
                  {isDevice &&  <StyledOutTeamText isDevice={isDevice}>
                        <span>{texts.teams[`${member.name}`].name}</span>
                        <span>{texts.teams[`${member.name}`].role}</span>   
                    </StyledOutTeamText> }                   
                    
                    </StyledTeamMemberContainer>
                    <StyledTextContainer className="col-6 col-12-medium">
                        <StyledOutTeamText isDevice={isDevice}>
                        {!isDevice && 
                            <React.Fragment>
                            <span>{texts.teams[`${member.name}`].name}</span>
                            <span>{texts.teams[`${member.name}`].role}</span>   
                            </React.Fragment>
                        }
                            <span>{texts.teams[`${member.name}`].description}</span>
                        </StyledOutTeamText>
                    </StyledTextContainer>
                </Row>
            </section>
            ))
        }
        </div>
    )
}

const Row = styled.div`
flex-direction:${({reverse}) => reverse ? 'row-reverse' : 'row'};
`

export default Team;