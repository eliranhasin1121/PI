import React from 'react';
import styled from 'styled-components';
import useMedia from '../../customHooks/UseMedia';
import Home from '../../components/Home';
import Team from '../../components/Team'
import Contact from '../../components/Contact'
import EmergingImg from '../../assets/emerging.png';
import About from '../../components/EmergingAbout';
import dolev from '../../assets/dolev.png';
import talia from '../../assets/talia.png';
import jonny from '../../assets/jonny.png';

const team = [
    {
      name:'jonny',  
      img:jonny,
    },
    {
        name:'dolev',
        img:dolev,
    },
    {
        name:'talia',
        img:talia
    }
]  

const texts = ['Raoul Wallenberg 18	 Building D,	1st Floor Ramat HaChayal,	Tel Aviv 	6971915 Israel Tel: +972 (0)3 373 2084 Fax: +972 (0)3 373 2102','SS&C Financial Services Ltd and SS&C Fund Services (Cayman) Ltd 39 Market Street Suite 3205 Camana Bay, Grand Cayman KY1-9003 Cayman Islands']

const bannerText = 'For more financial instruments powered by PI-FUNDS'

export default function Emerging({}){

    return (

        <>
		<section>
		  <Home homeIcon={EmergingImg}/>
		</section>
        <article style={{margin:0,marginBottom:0,padding:0}} id="main">
		  <div className="row gtr-200">
			<div className="col-12">
               <About/>
			</div>
		  </div>
		<OurTeamWrapper id="team" class="col-12">
		<h2 className="our-team-header">OUR TEAM</h2>
			<Team team={team}/>
		</OurTeamWrapper>
        <section id="Contact">
         <div class="row gtr-200">
            <div class="col-12">
              <Contact texts={texts} bannerText={bannerText}/>
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