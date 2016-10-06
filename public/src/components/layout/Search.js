import React, { Component } from 'react'
import { APIClient } from '../../utils'
import Sidebar from '../container/Sidebar'
import Services from '../container/Services'
import {Footer, Map} from '../view'

class Search extends Component {

  render(){
    return (
      <div>
          <header id="header" classNamme="no-sticky">
        

                <Map />


          </header>

          <section id="content">
            <div className="content-wrap">
              <div className="container clearfix">
                <Services params={this.props.params} />
              </div>
            </div>
          </section>
        <Footer />
      </div>
    )
  }
}


export default Search
