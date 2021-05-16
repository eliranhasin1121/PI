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

export default function Emerging({}){

    return (

        <>
		<section>
		  <Home homeIcon={EmergingImg}/>
		</section>
        <article style={{margin:0,marginBottom:0}} id="main">
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
              <Contact/>
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