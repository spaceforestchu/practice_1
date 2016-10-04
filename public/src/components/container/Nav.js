import React, { Component } from 'react'


class Nav extends Component {
  render() {

    const search = (this.props.showSearch == true ) ? <li> <div style={{padding: 12}}> <input type="email" className="form-control not-dark" placeholder="Zip Code" /> </div> </li> : null

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
                  {search}
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Nav
