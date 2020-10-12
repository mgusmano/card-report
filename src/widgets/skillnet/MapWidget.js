import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import Horizontal from '../../layout/Horizontal'
import Marker from './Marker';
import axios from "axios";
const AnyReactComponent = ({ text }) => <div>{text}</div>;




const MapWidget = (props) => {

  const [places, setPlaces] = useState([])
  const [locations, setLocations] = useState(null)

  const fetchPlaces = async () => {
    fetch('places.json')
    .then((response) => response.json())
    .then((data) => setPlaces(data.results))
  }

  useEffect(() => {
    fetchPlaces();

    axios
    .get('https://skillnetpartnerlocationsapi.azurewebsites.net//api/PartnerLocations?partnerid=395', {
      auth: {username: 'skillnet',password: 'demo'}
    })
    .then((response) => {
      var arrayLocations = response.data.map(item => {
        return {
          PartnerLocationID: item.PartnerLocationID,
          LocationName: item.LocationName,
          Latitude: item.Latitude,
          Longitude: item.Longitude
        }
      })
      console.log('locations',arrayLocations)
      setLocations(arrayLocations)
    })



  }, [])




  const defaultProps = {
    center: {lat: 39.099728,lng: -94.578568},
    zoom: 4.5
  };

  const handleApiLoaded = (map, maps) => {
    //new maps.Marker({position: {lat: 30.267153,lng:-97.743057}, map, title: "Austin, TX",});
  };

  const _onBoundsChange = (center, zoom, bounds, marginBounds) => {
    console.log('a')
    // if (this.props.onBoundsChange) {
    //   this.props.onBoundsChange({center, zoom, bounds, marginBounds});
    // } else {
    //   this.props.onCenterChange(center);
    //   this.props.onZoomChange(zoom);
    // }
  }

  const _onChildClick = (key, childProps) => {
    console.log('b')
    // const markerId = childProps.marker.get('id');
    // const index = this.props.markers.findIndex(m => m.get('id') === markerId);
    // if (this.props.onChildClick) {
    //   this.props.onChildClick(index);
    // }
  }

  const _onChildMouseEnter = (key, childProps) => {
    // console.log('_onChildMouseEnter')
    // const markerId = childProps.marker.get('id');
    // console.log(markerId)
    // const index = this.props.markers.findIndex(m => m.get('id') === markerId);
    // if (this.props.onMarkerHover) {
    //   this.props.onMarkerHover(index);
    // }
  }

  const _onChildMouseLeave = (/* key, childProps */) => {
    console.log('_onChildMouseLeave')
    // if (this.props.onMarkerHover) {
    //   this.props.onMarkerHover(-1);
    // }
  }

  const _onBalloonCloseClick = () => {
    console.log('e')
    // if (this.props.onChildClick) {
    //   this.props.onChildClick(-1);
    // }
  }

  // const _distanceToMouse = () => {
  //   console.log('f')

  // }

  const K_MARGIN_TOP = 30;
  const K_MARGIN_RIGHT = 30;
  const K_MARGIN_BOTTOM = 30;
  const K_MARGIN_LEFT = 30;

  const K_HOVER_DISTANCE = 30;


  return (
    <div style={{display:'flex',flex:'1',flexWrap:'wrap',flexDirection:'row',overflow:'auto',alignContent:'flex-start'}} xstyle={{flex:'auto',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between',display:'flex',overflow:'auto'}}>

    <GoogleMapReact


onBoundsChange={_onBoundsChange}
onChildClick={_onChildClick}
onChildMouseEnter={_onChildMouseEnter}
onChildMouseLeave={_onChildMouseLeave}
margin={[K_MARGIN_TOP, K_MARGIN_RIGHT, K_MARGIN_BOTTOM, K_MARGIN_LEFT]}
hoverDistance={K_HOVER_DISTANCE}
// distanceToMouse={_distanceToMouse}



      bootstrapURLKeys={{ key: 'AIzaSyDv9gi5-vgfA99lixssMPEKrcTHrQLNKDw' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        {/* {places !== null &&
        places.map((place) => (
          <Marker
            key={place.id}
            text={place.name}
            lat={place.geometry.location.lat}
            lng={place.geometry.location.lng}
          />
        ))} */}

        {locations !== null &&
        locations.map((location, index) => (
          <Marker
            key={index}
            text={location.LocationName}
            lat={location.Latitude}
            lng={location.Longitude}
          />

          // <AnyReactComponent
          //   key={location.PartnerLocationID}
          //   text={location.LocationName}
          //   lat={location.Latitude}
          //   lng={location.Longitude}
          // />


        ))}
      </GoogleMapReact>
    </div>
  )

}

export default MapWidget