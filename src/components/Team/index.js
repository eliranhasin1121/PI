import React from 'react';
import Talia from '../../assets/talia.png'
import Shlomi from '../../assets/shlomi.png';
import Ronen from '../../assets/ronen.png';
import { StyledOutTeamText , StyledOutTeamImage , StyledTeamMemberContainer , StyledTextContainer} from './StyledTeam';
import useMedia from '../../customHooks/UseMedia';
const Team = () =>{
    const {isMobile , isDevice} = useMedia();

    console.log('isTablet' , isDevice)
    return (
        <div>
            <section>
                <div className="row">
                    <StyledTeamMemberContainer className="col-6 col-6-medium">
                    <StyledOutTeamImage isMobile={isMobile} className="image featured" src={Ronen}/>
                        <StyledOutTeamText isDevice={isDevice}>
                            <span>RONEN BITMAN</span>
                            <span>COO</span>   
                        </StyledOutTeamText>                    
                    
                    </StyledTeamMemberContainer>
                    <StyledTextContainer className="col-6 col-12-medium">
                        <StyledOutTeamText isDevice={isDevice}>
                        {!isDevice && 
                            <React.Fragment>
                                <span>RONEN BITMAN</span>
                                <span>COO</span>
                            </React.Fragment>
                        }
                            <span>Ronen Bitman started his career in 2001 after serving in the Israeli Army, then he joined PI where he developed a risk management system for trading stocks, futures & options in TASE, Euro Stoxx & DAX, later on he served as a CTO. After establishing a firm team to handle the IT, Ronen served both passively and actively as an advisor in investing in technological companies.</span>
                        </StyledOutTeamText>
                    </StyledTextContainer>
                </div>
            </section>

            <section>
                <div className="row">
                        {!isDevice && 
                        <StyledTextContainer className="col-6 col-12-medium">
                            <StyledOutTeamText isDevice={isDevice}>
                                <React.Fragment>
                                    <span>SHLOMI COHEN (CPA)</span>
                                    <span>CFO</span>
                                </React.Fragment>
                                <span>Dolev started his career in 2013 as an Equity derivatives analyst at Brevan Howard, he then spent 4 years at JPMorgan in London as an FX options market maker (G10 & EM). He holds a Master's degree in Financial Markets from University of Paris Dauphine. Dolev Joined Pi in mid-2018.</span>
                            </StyledOutTeamText>
                        </StyledTextContainer>
                        }
                    <StyledTeamMemberContainer className="col-6 col-6-medium">
                    <StyledOutTeamImage isMobile={isMobile} className="image featured" src={Shlomi}></StyledOutTeamImage>
                    {isDevice &&  
                        <StyledOutTeamText isDevice={isDevice}>
                        <span>SHLOMI COHEN (CPA)</span>
                                    <span>CFO</span>  
                        </StyledOutTeamText>                    
                    }
                    </StyledTeamMemberContainer>

                    {isDevice && 
                        <StyledTextContainer className="col-6 col-12-medium">
                            <StyledOutTeamText isDevice={isDevice}>
                                <span>Mr. Cohen is a graduate of The College of Management Academic Studies in Israel; he graduated with a B.A. in Business Administration with a focus in Accounting in 1995. Following his degree, Mr. Cohen worked at PwC (Casselman & Casselman) in Israel between 1995 and 1999. He then joined the Finance department in Orek Ltd., a part of the Yellow Pages Group in Israel. During the years 2001- 2005, Mr. Cohen operated a private practice as a CPA, from which he provided services to the Pi Group. As of 2005, Mr. Cohen has been leading the Finance department as a controller at Pi Group. Since the start of 2015, Mr. Cohen has taken over as Pi Fund's CFO.</span>
                            </StyledOutTeamText>
                        </StyledTextContainer>
                        }

                </div>
            </section>

            <section>
                <div className="row">
                    <StyledTeamMemberContainer className="col-6 col-6-medium">
                    <StyledOutTeamImage isMobile={isMobile} className="image featured" src={Talia}></StyledOutTeamImage>
                    {isDevice &&  
                        <StyledOutTeamText isDevice={isDevice}>
                            <span>TALIE ARKIN</span>
                            <span>INVESTOR RELATIONS</span>   
                        </StyledOutTeamText>                    
                    }
                    </StyledTeamMemberContainer>
                    <StyledTextContainer className="col-6 col-12-medium">
                        <StyledOutTeamText isDevice={isDevice}>
                        {!isDevice && 
                            <React.Fragment>
                                <span>TALIE ARKIN</span>
                                <span>INVESTOR RELATIONS</span>
                            </React.Fragment>
                        }
                            <span>Talie joined Pi mid-2016, Ms. Arkin has over ten years' experience in marketing communications and investor relations, primarily in the real estate and energy sectors. Prior to joining Pi, Ms. Arkin took an active role in management and oversight of large scale development projects in the U.S., ranging from residential to retail to hotel condo complexes. Arkin acquired a Bachelor of laws degree from the College of Management in Israel and holds a Master's degree in real estate from Columbia University.</span>
                        </StyledOutTeamText>
                    </StyledTextContainer>
                </div>
            </section>

        </div>
    )
}

export default Team;