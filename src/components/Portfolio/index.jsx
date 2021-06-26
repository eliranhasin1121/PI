import React from 'react';
import {CompanyWrapper } from './Portfolio.styled'
import Cybersecurity from '../../assets/Cyberpion.png';
import rentigo from '../../assets/Rentigo.png';
import safaway from '../../assets/Safarway.png';
import superSingle from '../../assets/Super-signal.png';
import replay from '../../assets/download.png';
import intel from '../../assets/intel.png';
import larium from '../../assets/Larium-logo.png';
import { Logo, Name,Row } from './Portfolio.styled';

const portfolio = [
    {
       name:'cyberpion',
       description: () => <span>Cybersecurity</span>,
       logo: Cybersecurity,
       sizes:{height:47.63,width:195}
    },
    {
        name:'Rentigo',
        description: () => <span>Real East</span>,
        logo:rentigo,
       sizes:{height:67,width:195}

    },
    {
        name:'Safeway',
        description:() => <span>Tourism</span>,
        logo:safaway,
       sizes:{height:67,width:195}
    },
    {
        name:'Super single',
        description:() => <span>Fintech</span>,
        logo:superSingle,
       sizes:{height:90,width:90}
    },
    {
        name:'Replay technology',
        description:() => <span >Computer vision <br/> <span style={{display:'flex'}}><span style={{paddingRight:7}}>acquired by</span> <img src={intel} style={{height:32,width:48,position:'relative'}} className="featured mid"/></span></span>,
        logo:replay,
        sizes:{height:70,width:200}

    },
    {
        name:'Larium',
        description: ()=> <span>Fintech</span>,
        logo:larium,
       sizes:{height:76,width:113}
    }
]

export default function Portfolio({}){

    return(
        <section>
          <Row className="row">
            {portfolio.map((company,index) => (
                <div className={"col-3 col-12-medium"}>
                  <CompanyWrapper width={company.sizes.width}>
                  <Logo height={company.sizes.height} style={{width:company.sizes.width}} src={company.logo} className="image featured mid"/>
                     <Name>{company.name}</Name>
                     {company.description()}
                  </CompanyWrapper>
                </div>
                
            ))}
          </Row>
        </section>
    )
}