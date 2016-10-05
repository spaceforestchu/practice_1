import React, { Component } from 'react'

class ServicePreview extends Component {

  render(){
    return (
      <div style={{background: 'white', padding: 16, border: '1px solid #ddd'}}>
            <h1>{this.props.data}</h1>
      </div>
    )
  }
}


export default ServicePreview
