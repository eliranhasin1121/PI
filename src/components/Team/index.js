import React from 'react';
import styled ,{ css } from 'styled-components';
import { StyledOutTeamText , StyledOutTeamImage , StyledTeamMemberContainer , StyledTextContainer, Description} from './StyledTeam';
import useMedia from '../../customHooks/UseMedia';
import enTexts from '../../config/translations/locales/en.json'
import heTexts from '../../config/translations/locales/he.json';
const Team = ({team,isHE = false,isEmerging, isOpp}) =>{
    const {isMobile , isDevice} = useMedia();
   const texts = isHE ? heTexts : enTexts;
    return (
        <div>
        {
            team.map((member,index) => (
                <section>
                <Row reverse={index%2  !== 0 && !isDevice} className="row">
                    <StyledTeamMemberContainer isOpp={isOpp} isDevice={isDevice} className="col-6 col-6-medium">
                    <StyledOutTeamImage isMobile={isMobile} className="image featured mid"  src={member.img}/>
                  {isDevice &&  <StyledOutTeamText isHE={isHE} isDevice={isDevice}>
                        <span style={{fontWeight:400}}>{texts.teams[`${member.name}`].name}</span>
                        <span style={{fontWeight:100}}>{texts.teams[`${member.name}`].role}</span>   
                    </StyledOutTeamText> }                   
                    
                    </StyledTeamMemberContainer>
                    <StyledTextContainer  name="AA" isOpp={isOpp} isDevice={isDevice} className="col-6 col-12-medium">
                        <StyledOutTeamText  isHE={isHE} isDevice={isDevice}>
                        {!isDevice && 
                            <React.Fragment>
                            <span style={{fontWeight:400}}>{texts.teams[`${member.name}`].name}</span>
                            <span style={{fontWeight:100}}>{texts.teams[`${member.name}`].role}</span>   
                            </React.Fragment>
                        }
                            <Description isDevice={isDevice} style={{fontWeight:100}}>{texts.teams[`${member.name}`].description}</Description>
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