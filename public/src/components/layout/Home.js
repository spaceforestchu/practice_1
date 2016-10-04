import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Home extends Component {
  render() {
    return (
      <div id="wrapper" classNameName="clearfix">
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
      </div>
    )
  }
}

export default Home
