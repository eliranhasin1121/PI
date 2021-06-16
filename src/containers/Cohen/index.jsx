import React from 'react';
import styled from 'styled-components';
import useMedia from '../../customHooks/UseMedia';
import Home from '../../components/Home';
import Team from '../../components/Team'
import Contact from '../../components/CohenContact'
import Portfolio from '../../components/Portfolio';
import cohen from '../../assets/cohen-background.png'
import About from '../../components/CohenAbout';




const texts = ['Raoul Wallenberg 18	 Building D,	1st Floor Ramat HaChayal,	Tel Aviv 	6971915 Israel Tel: +972 (0)3 373 2084 Fax: +972 (0)3 373 2102']

const bannerText = 'For more financial instruments powered by PI-FUNDS'

export default function Cohen({}){

    return (

        <>
		<section>
		  <Home homeIcon={cohen}/>
		</section>
        <article style={{margin:0,marginBottom:0,padding:0}} id="main">
		  <div className="row gtr-200">
			<div className="col-12">
               <About/>
			</div>
		  </div>
		<OurTeamWrapper id="team" class="col-12">
		<h2 className="our-team-header">OUR PORTFOLIO</h2>
			<Portfolio/>
		</OurTeamWrapper>
        <section id="Contact">
         <div class="row gtr-200">
            <div class="col-12">
              <Contact  texts={texts} bannerText={bannerText}/>
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