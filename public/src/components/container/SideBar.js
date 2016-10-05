import React, { Component } from 'react'

class Sidebar extends Component {
  render () {
    return (
      <header id="header" classNamme="no-sticky">
  			<div id="header-wrap">
  				<div class="container clearfix">

  					<div id="primary-menu-trigger"><i classNamme="icon-reorder"></i></div>
  					<div id="logo" class="nobottomborder">
  						<a href="index.html" class="standard-logo" data-dark-logo="images/logo-side-dark.png"><img src="images/logo-side.png" alt="Canvas Logo" /></a>
  						<a href="index.html" class="retina-logo" data-dark-logo="images/logo-side-dark@2x.png"><img src="images/logo-side@2x.png" alt="Canvas Logo" /></a>
  					</div>

  					<nav id="primary-menu">

  						<ul>
  							<li><a href="index.html"><div>Home</div></a></li>
  						</ul>

  					</nav>


  				</div>

  			</div>

  		</header>
    )
  }
}

export default Sidebar
