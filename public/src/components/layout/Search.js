import React, { Component } from 'react'
import { APIClient } from '../../utils'
import Sidebar from '../container/Sidebar'
import Services from '../container/Services'
import Footer from '../view/Footer'

class Search extends Component {

  componentWillMount() {
    //console.log('Params = ' + JSON.stringify(this.props.params))

    APIClient.get('/api/service', this.props.params, (err, response) => {
      if (err) {
        alert(err)
        return
      }

      console.log(JSON.stringify(response))
    })

  }

  render(){
    return (
      <div>
        <Sidebar />
        <Services />
        <Footer />
      </div>
    )
  }
}


export default Search
