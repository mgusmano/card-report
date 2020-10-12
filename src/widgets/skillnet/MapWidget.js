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


  return (
    <div style={{display:'flex',flex:'1',flexWrap:'wrap',flexDirection:'row',overflow:'auto',alignContent:'flex-start'}} xstyle={{flex:'auto',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between',display:'flex',overflow:'auto'}}>

    <GoogleMapReact
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
        locations.map((location) => (
          <Marker
            key={location.PartnerLocationID}
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