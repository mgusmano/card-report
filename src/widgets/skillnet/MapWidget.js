import React from 'react'
import GoogleMapReact from 'google-map-react';
import Horizontal from '../../layout/Horizontal'

const MapWidget = (props) => {

  const defaultProps = {
    center: {lat: 39.099728,lng: -94.578568},
    zoom: 4.5
  };

  const handleApiLoaded = (map, maps) => {
    new maps.Marker({position: {lat: 30.267153,lng:-97.743057}, map, title: "Austin, TX",});
  };


  return (
    <div style={{display:'flex',flex:'1',flexWrap:'wrap',flexDirection:'row',overflow:'auto',alignContent:'flex-start'}} xstyle={{flex:'auto',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between',display:'flex',overflow:'auto'}}>

    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyDv9gi5-vgfA99lixssMPEKrcTHrQLNKDw' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
    />
    </div>
  )

}

export default MapWidget