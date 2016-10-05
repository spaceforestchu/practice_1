import React, { Component } from 'react'
import { APIClient } from '../../utils'
import Sidebar from '../container/Sidebar'
import Services from '../container/Services'
import Footer from '../view/Footer'

class Search extends Component {

  render(){
    return (
      <div>
        <Sidebar />
        <Services params={this.props.params}/>
        <Footer />
      </div>
    )
  }
}


export default Search
