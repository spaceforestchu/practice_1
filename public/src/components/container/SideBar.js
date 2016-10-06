import React, { Component } from 'react'

class Sidebar extends Component {
  render () {
    return (
      <div>
        <div id="primary-menu-trigger"><i classNamme="icon-reorder"></i></div>
          <div id="logo" class="nobottomborder">
          <a href="index.html" class="standard-logo" data-dark-logo="images/logo-side-dark.png"><img src="images/logo-side.png" alt="Canvas Logo" /></a>
        </div>
        <nav id="primary-menu">
              <ul>
                <li><a href="index.html"><div>Home</div></a></li>
              </ul>
        </nav>
        </div>
    )
  }
}

export default Sidebar
