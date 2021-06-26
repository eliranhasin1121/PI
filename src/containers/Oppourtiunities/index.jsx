import React from 'react';
import styled from 'styled-components';
import Home from '../../components/Home';
import OppHome from '../../assets/opp-home.png';
import About from '../../components/OppAbout';
import Contact from '../../components/Contact';
import Team from '../../components/Team';
import aharon from '../../assets/aharon.png';
import jerry from '../../assets/jerry.png';
import idan from '../../assets/idan.png';
import contactOpp from '../../assets/contact-opp.png';

export default function opportunities({}){

const team = [
    {
        name:'aharon',
        img:aharon
    },
    {
        name:'idan',
        img:idan
    },
    {
        name:'jerry',
        img:jerry
    }
]

const texts = [<span>ראול ולנברג 18 בניין D קומה 1 רמת החייל, תל אביב-יפו 6971915 ישראל <br/>Tel: +972 (0)3 373 2084 Fax: +972 (0)3 373 2102</span>]
const bannerText = 'לעוד מוצרים מבית היוצר של פאי פיננסים';
    return(
        <>
		<section>
		  <Home homeIcon={OppHome}/>
		</section>
        <article style={{margin:0,marginBottom:0,padding:0}} id="main">
		  <div className="row gtr-200">
			<div className="col-12">
               <About/>
			</div>
		  </div>
		<OurTeamWrapper id="team" class="col-12">
		<h2 className="our-team-header">הצוות שלנו</h2>
			<Team isHE team={team}/>
		</OurTeamWrapper>
        <section id="contact">
         <div class="row gtr-200">
            <div class="col-12">
              <Contact isHE bannerText={bannerText} contactImg={contactOpp} texts={texts}/>
            </div>
         </div>
       </section>
		</article> 
	  </>
    )
}


const OurTeamWrapper = styled.div`
padding-top:40px;
`