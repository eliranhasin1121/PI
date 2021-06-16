import React from 'react';
import styled from 'styled-components';
import homeIcon from '../../assets/pi-home.png';
import Ronen from '../../assets/ronen.png';
import arrowDown from '../../assets/scroll-down.png';
import Shlomi from '../../assets/shlomi.png';
import Talia from '../../assets/talia.png';
import About from '../../components/About';
import Home from '../../components/Home';
import JonnyKaye from '../../components/JonnyKaye';
import OurProduct from '../../components/OurProducts/OurProducts';
import Products from '../../components/Products/Products';
import Team from '../../components/Team';
import TimeLine from '../../components/TimeLine';
import useMedia from '../../customHooks/UseMedia';
import { OurProductStyled, ScrollImage, TextWrapper } from './Main.styled';



const team = [
	{
		name:'ronen',
		img:Ronen
	},
	{
		name:'shlomi',
		img:Shlomi
	},
	{
		name:'talia',
		img:Talia
	}
]
export default ({history}) => {


  const {isMobile, isDevice} = useMedia();


  return (
	<>
		
		<section>
		  <Home homeIcon={homeIcon}/>
		</section>
        <article id="main">
		  <div className="row gtr-200">
			<div className="col-12">
               <About/>
			</div>
			<section>
			  <TimeLine/>
			 </section>
			 <section>
		    	<JonnyKaye/>
			 </section>
			 <section className="col-12">
				<OurProduct history={history}/>
			 </section>
		   </div>
	{!isMobile && <section style={{marginBottom:0}} className="col-12">
			<OurProductStyled>
			<ScrollImage style={{height:60,width:60}} className="image featured" src={arrowDown}/>
			<TextWrapper>
			  <h3 style={{color:'white'}}>OUR PRODUCTS</h3>
			  <p style={{color:'white'}}>more</p>
			</TextWrapper>
			</OurProductStyled>  
		</section>}
		<section className="col-12" >
		  <Products history={history}/>
		</section>
		<OurTeamWrapper id="team" class="col-12">
		<h2 className="our-team-header">OUR TEAM</h2>
			<Team team={team}/>
		</OurTeamWrapper>
		</article> 
	  </>
  );
};

const OurTeamWrapper = styled.div`
padding-top:40px;
`