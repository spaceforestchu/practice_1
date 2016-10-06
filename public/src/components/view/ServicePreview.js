import React, { Component } from 'react'
import styles from './styles'

class ServicePreview extends Component {

  render(){

    const style = styles.ServicePreview
    const service = this.props.service
    return (
      <div style={style.container}>
            <span style={style.span}>${service.price}</span>
            <h3 style={style.h3}>{service.title}</h3>
            <hr style={style.hr}/>
            <p> {service.description}</p>
            <a href="#" className="button button-border button-border-thin button-aqua"><i className="icon-inbox"></i>View</a>
      </div>
    )
  }
}



export default ServicePreview
