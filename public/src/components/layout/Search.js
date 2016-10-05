import React, { Component } from 'react'

class Search extends Component {

  componentWillMount() {
    console.log('Params = ' + JSON.stringify(this.props.params))
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
