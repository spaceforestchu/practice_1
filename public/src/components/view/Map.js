import React, { Component } from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

class Map extends Component {

  constructor(){
    super()
    this.state = {
      map: null
    }
  }

  render(){
    const mapContainer = <div style={{height: '100%', width: '100%'}}></div>
    const center = {lat: 40.7421065, lng: -73.9869371}
    const zoom = 16
    const mapRef = (map) => {
      if (this.state.map != null)
        return

        this.setState({map: map})
    }
    return (
      <GoogleMapLoader
        containerElement = { mapContainer }
        googleMapElement = {
          <GoogleMap
            ref={mapRef}
           defaultZoom={zoom}
           defaultCenter={center}
           options={{streetViewControl: false, mapTypeControl: false}}>

          </GoogleMap>
        } />
    )
  }
}

export default Map
