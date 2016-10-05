import React , { Component } from 'react'
import { APIClient } from '../../utils'
import ServicePreview from '../view/ServicePreview'
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
          <ServicePreview data={service.timestamp} />
        </li>
      )
    })
    return (
      <section id="content">

        <div className="content-wrap">

          <div className="container clearfix">

              <ul style={{listStyleType: 'none'}}>{services}</ul>

          </div>

        </div>

      </section>
    )
  }
}

export default Services
