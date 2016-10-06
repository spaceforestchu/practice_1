import React, { Component } from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

class Map extends Component {

  constructor(){
    super()
    this.state = {
      map: null,
      markers: [
        {
          defaultAnimation: 2,
          position: {
            lat: 40.7421065, lng: -73.9869371
          }
        }
      ]
    }
  }

  mapClicked(event){
    console.log("Map Clicked: " + JSON.stringify(event.latLng))
  }

  mapMoved(){
    var latLng = this.state.map.getCenter().toJSON()
    console.log('Map Moved: ' + JSON.stringify(latLng));
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


  //  const markers = <Marker clickable={true} label="TEST" title="TEST TILE" {...marker} />

    const markers = this.state.markers.map((marker, i) => {
      return (
        <Marker clickable={true} label="TEST" title="TEST TILE" {...marker} />
      )
    })
    return (
      <GoogleMapLoader
        containerElement = { mapContainer }
        googleMapElement = {
          <GoogleMap
            ref={mapRef}
            onDragend={this.mapMoved.bind(this)}
            onClick={this.mapClicked.bind(this)}
           defaultZoom={zoom}
           defaultCenter={center}
           options={{streetViewControl: false, mapTypeControl: false}}>
           {markers}
          </GoogleMap>
        } />
    )
  }
}

export default Map
