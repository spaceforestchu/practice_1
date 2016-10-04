import React, { Component } from 'react'
import ReactDOM from 'react-dom'

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

        <section id="slider" className="slider-parallax dark full-screen" style={{background: "url(images/landing/landing1.jpg) center"}}>

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
      </div>
    )
  }
}

export default Home
