import React, { Component } from 'react'
import Footer from '../view/Footer'

class Home extends Component {
  render() {
    return (
      <div>
        <header id="header" className="transparent-header page-section dark">

          <div id="header-wrap">

            <div className="container clearfix">

              <div id="primary-menu-trigger"><i className="icon-reorder"></i></div>


              <div id="logo">
                <a href="index.html" className="standard-logo" data-dark-logo="images/logo-dark.png"><img src="images/logo.png" alt="Canvas Logo" /></a>
                <a href="index.html" className="retina-logo" data-dark-logo="images/logo-dark@2x.png"><img src="images/logo@2x.png" alt="Canvas Logo" /></a>
              </div>
              <nav id="primary-menu">

                <ul className="one-page-menu">
                  <li className="current"><a href="#" data-href="#header"><div>Home</div></a></li>
                  <li><a href="#" data-href="#section-features"><div>About</div></a></li>
                  <li><a href="#" data-href="#section-pricing"><div>Join</div></a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <section id="slider" className="dark full-screen" style={{background: "url(images/landing/landing1.jpg) center", minHeight: 450}}>

    			<div className="slider-parallax-inner">

    				<div className="container clearfix">

    					<div className="vertical-middle">

    						<div className="heading-block center nobottomborder">
    							<h1 data-animate="fadeInUp">It's your time to <strong>create</strong> Landing Pages for <strong>FREE</strong></h1>
    							<span data-animate="fadeInUp" data-delay="300">Building a Landing Page was never so Easy &amp; Interactive.</span>
    						</div>

    						<form action="#" method="post" role="form" className="landing-wide-form clearfix">
    							<div className="col_two_third nobottommargin">
    									<input type="email" className="form-control input-lg not-dark" value="" placeholder="zip code" />
    							</div>
    							<div className="col_one_third col_last nobottommargin">
    								<button className="btn btn-lg btn-danger btn-block nomargin" value="submit" type="submit">Search</button>
    							</div>
    						</form>

    					</div>

    					<a href="#" data-scrollto="#section-features" className="one-page-arrow"><i className="icon-angle-down infinite animated fadeInDown"></i></a>

    				</div>

    			</div>

    		</section>

        <section id="content">

    			<div className="content-wrap">

    				<div className="container clearfix">

    					<div id="section-features" className="heading-block title-center page-section">
    						<h2>Features Overview</h2>
    						<span>Some of the Features that are gonna blow your mind off</span>
    					</div>

    					<div className="col_one_third">
    						<div className="feature-box fbox-plain">
    							<div className="fbox-icon" data-animate="bounceIn">
    								<a href="#"><img src="images/icons/features/responsive.png" alt="Responsive Layout" /></a>
    							</div>
    							<h3>Responsive Layout</h3>
    							<p>Powerful Layout with Responsive functionality that can be adapted to any screen size. Resize browser to view.</p>
    						</div>
    					</div>

    					<div className="col_one_third">
    						<div className="feature-box fbox-plain">
    							<div className="fbox-icon" data-animate="bounceIn" data-delay="200">
    								<a href="#"><img src="images/icons/features/retina.png" alt="Retina Graphics" /></a>
    							</div>
    							<h3>Retina Graphics</h3>
    							<p>Looks beautiful &amp; ultra-sharp on Retina Screen Displays. Retina Icons, Fonts &amp; all others graphics are optimized.</p>
    						</div>
    					</div>

    					<div className="col_one_third col_last">
    						<div className="feature-box fbox-plain">
    							<div className="fbox-icon" data-animate="bounceIn" data-delay="400">
    								<a href="#"><img src="images/icons/features/performance.png" alt="Powerful Performance" /></a>
    							</div>
    							<h3>Powerful Performance</h3>
    							<p>Canvas includes tons of optimized code that are completely customizable and deliver unmatched fast performance.</p>
    						</div>
    					</div>

    					<div className="clear"></div>

    					<div className="col_one_third">
    						<div className="feature-box fbox-plain">
    							<div className="fbox-icon" data-animate="bounceIn" data-delay="600">
    								<a href="#"><img src="images/icons/features/flag.png" alt="Responsive Layout" /></a>
    							</div>
    							<h3>Endless Possibilities</h3>
    							<p>You have complete easy control on each &amp; every element that provides endless customization possibilities.</p>
    						</div>
    					</div>

    					<div className="col_one_third">
    						<div className="feature-box fbox-plain">
    							<div className="fbox-icon" data-animate="bounceIn" data-delay="800">
    								<a href="#"><img src="images/icons/features/tick.png" alt="Retina Graphics" /></a>
    							</div>
    							<h3>Light &amp; Dark Scheme</h3>
    							<p>Change your Website's Primary Scheme instantly by simply adding the dark class to the body.</p>
    						</div>
    					</div>

    					<div className="col_one_third col_last">
    						<div className="feature-box fbox-plain">
    							<div className="fbox-icon" data-animate="bounceIn" data-delay="1000">
    								<a href="#"><img src="images/icons/features/tools.png" alt="Powerful Performance" /></a>
    							</div>
    							<h3>Customizable Fonts</h3>
    							<p>Use any Font you like from Google Web Fonts, Typekit or other Web Fonts. They will blend in perfectly.</p>
    						</div>
    					</div>

    					<div className="clear"></div>

    					<div className="col_one_third">
    						<div clasNames="feature-box fbox-plain">
    							<div className="fbox-icon" data-animate="bounceIn" data-delay="1200">
    								<a href="#"><img src="images/icons/features/map.png" alt="Responsive Layout" /></a>
    							</div>
    							<h3>Responsive Layout</h3>
    							<p>Powerful Layout with Responsive functionality that can be adapted to any screen size. Resize browser to view.</p>
    						</div>
    					</div>

    					<div className="col_one_third">
    						<div className="feature-box fbox-plain">
    							<div className="fbox-icon" data-animate="bounceIn" data-delay="1400">
    								<a href="#"><img src="images/icons/features/seo.png" alt="Retina Graphics" /></a>
    							</div>
    							<h3>Retina Graphics</h3>
    							<p>Looks beautiful &amp; ultra-sharp on Retina Screen Displays. Retina Icons, Fonts &amp; all others graphics are optimized.</p>
    						</div>
    					</div>

    					<div className="col_one_third col_last">
    						<div className="feature-box fbox-plain">
    							<div className="fbox-icon" data-animate="bounceIn" data-delay="1600">
    								<a href="#"><img src="images/icons/features/support.png" alt="Powerful Performance" /></a>
    							</div>
    							<h3>Powerful Performance</h3>
    							<p>Canvas includes tons of optimized code that are completely customizable and deliver unmatched fast performance.</p>
    						</div>
    					</div>
              </div>
    			</div>

    		</section>

        <Footer />

      </div>
    )
  }
}

export default Home
