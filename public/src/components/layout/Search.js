import React, { Component } from 'react'
import APIClient from '../../utils/APIClient'

class Search extends Component {

  componentWillMount() {
    console.log('Params = ' + JSON.stringify(this.props.params))

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
        This is the seach layout
      </div>
    )
  }
}


export default Search
