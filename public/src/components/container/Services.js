import React , { Component } from 'react'
import { APIClient } from '../../utils'
import { Footer, ServicePreview} from '../view/index'
class Services extends Component {

  constructor(){
      super()
      this.state = {
        services: []
      }
  }

  componentWillMount() {
    //console.log('Params = ' + JSON.stringify(this.props.params))

    APIClient.get('/api/service', this.props.params, (err, response) => {
      if (err) {
        alert(err)
        return
      }

      console.log(JSON.stringify(response))

      this.setState({
        services: response.results
      })
    })

  }

  render (){

    const services = this.state.services.map((service, i) => {
      return (
        <li key={service.id}>
          <ServicePreview service={service} />
        </li>
      )
    })
    return (
          <ul style={{listStyleType: 'none'}}>{services}</ul>
    )
  }
}

export default Services
