import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button } from 'antd';
import { Icon } from '@ant-design/compatible';
import { MainWrapper } from './Main.styled';
import { changeLanguage, getActiveLanguage } from '../../config/translations/utils';
import { Text, FlexDivCenter } from '../../components/Typography/Typography';
import { loginAction } from '../../data/modules/auth/auth.actions';
import Home from '../../components/Home';
import About from '../../components/About';
import AboutIcon from '../../assets/About.png'
import TimeLine from '../../components/TimeLine';
import JonnyKaye from '../../components/JonnyKaye';
import OurProduct from '../../components/OurProducts/OurProducts'

export default () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { activeUser } = useSelector(store => store.auth);

  function onToggleLanguage() {
    return getActiveLanguage() === 'en'
      ? changeLanguage('he')
      : changeLanguage('en');
  }

  async function onLogin() {
    try {
      dispatch(loginAction());
    } catch (err) {
      console.log(err);
    }
  }

  return (
      <div id="page-wrapper">

				<section>
					<Home/>
				</section>
        
				<section id="main">

						<div className="row gtr-200">
							<div className="col-12">
                    <About/>
							</div>

				<section>
				   	<TimeLine/>
				</section>
				<div className="col-12">
				 <JonnyKaye/>
				</div>
				<div className="col-12">
					<OurProduct/>
				</div>
				</div>
				{/* <section class="box blog">
					<div>
						<div class="row">
							<div class="col-6 col-12-medium">

							</div>
							<div class="col-6 col-12-medium">
								<div class="sidebar">


										<ul class="divided">
											<li>
												<article class="box post-summary">
													<h3><a href="#">A Subheading</a></h3>
													<ul class="meta">
														<li class="icon fa-clock">6 hours ago</li>
														<li class="icon fa-comments"><a href="#">34</a></li>
													</ul>
												</article>
											</li>
											<li>
												<article class="box post-summary">
													<h3><a href="#">Another Subheading</a></h3>
													<ul class="meta">
														<li class="icon fa-clock">9 hours ago</li>
														<li class="icon fa-comments"><a href="#">27</a></li>
													</ul>
												</article>
											</li>
											<li>
												<article class="box post-summary">
													<h3><a href="#">And Another</a></h3>
													<ul class="meta">
														<li class="icon fa-clock">Yesterday</li>
														<li class="icon fa-comments"><a href="#">184</a></li>
													</ul>
												</article>
											</li>
											<li>
												<article class="box post-summary">
													<h3><a href="#">And Another</a></h3>
													<ul class="meta">
														<li class="icon fa-clock">2 days ago</li>
														<li class="icon fa-comments"><a href="#">286</a></li>
													</ul>
												</article>
											</li>
											<li>
												<article class="box post-summary">
													<h3><a href="#">And One More</a></h3>
													<ul class="meta">
														<li class="icon fa-clock">3 days ago</li>
														<li class="icon fa-comments"><a href="#">8,086</a></li>
													</ul>
												</article>
											</li>
										</ul>
										<a href="#" class="button alt">Archives</a>

								</div>
							</div>
						</div>
					</div>
				</section> */}

				</section>


				{/* <footer id="footer">
					<div class="container">
						<div class="row gtr-200">
							<div class="col-12">


									<section>
										<h2 class="major"><span>What's this about?</span></h2>
										<p>
											This is <strong>TXT</strong>, yet another free responsive site template designed by
											<a href="http://twitter.com/ajlkn">AJ</a> for <a href="http://html5up.net">HTML5 UP</a>. It's released under the
											<a href="http://html5up.net/license/">Creative Commons Attribution</a> license so feel free to use it for
											whatever you're working on (personal or commercial), just be sure to give us credit for the design.
											That's basically it :)
										</p>
									</section>

							</div>
							<div class="col-12">

									<section>
										<h2 class="major"><span>Get in touch</span></h2>
										<ul class="contact">
											<li><a class="icon brands fa-facebook-f" href="#"><span class="label">Facebook</span></a></li>
											<li><a class="icon brands fa-twitter" href="#"><span class="label">Twitter</span></a></li>
											<li><a class="icon brands fa-instagram" href="#"><span class="label">Instagram</span></a></li>
											<li><a class="icon brands fa-dribbble" href="#"><span class="label">Dribbble</span></a></li>
											<li><a class="icon brands fa-linkedin-in" href="#"><span class="label">LinkedIn</span></a></li>
										</ul>
									</section>

							</div>
						</div>

							<div id="copyright">
								<ul class="menu">
									<li>&copy; Untitled. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
								</ul>
							</div>

					</div>
				</footer> */}

		</div>


  );
};