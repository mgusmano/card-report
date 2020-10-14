import React, { useState, useEffect, useCallback } from 'react';
import Marker from './Marker';
import GoogleMap from './GoogleMap';
import axios from "axios";
//const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MapWidget = (props) => {
  const [filteredlocations, setFilteredlocations] = useState(null)
  var originallocations = null
  const [currid, setCurrId] = useState(null)

  const onMessage = useCallback((e) => {
    if (!e.detail) {return}
    var type = e.detail.type
    var payload = e.detail.payload
    switch (type) {
      case 'fromcardwidget':
        onChange(payload)
        break;
      default:
        break;
    }
  }, [])

  useEffect(() => {

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
      originallocations = arrayLocations
      //setLocations(arrayLocations)
      //setFilteredlocations(arrayLocations)
    })

    window.addEventListener('mjg', onMessage);
    return function cleanup() {
      window.removeEventListener('mjg', onMessage);
    };

  }, [])

  const onChange = (payload) => {
    console.log('MapWidget.onChange',payload)
    if (payload.filteredpositions.length === 0 &&
        payload.filteredskills.length === 0 &&
        payload.filteredlocations.length === 0 &&
        payload.filteredmanagers.length === 0) {
      //setFilteredlocations(originallocations)
      setFilteredlocations([])
    }
    else {
      var thelocations = []
      payload.filteredusers.map(user => {
        var userlocation = user.Location
        //console.log(userlocation)
        if (userlocation !== undefined)
          if (userlocation !== '') {
            thelocations.push(userlocation)
        }
      })
      //console.log(thelocations)

      function findObjectByKey(array, key, value) {
        for (var i = 0; i < array.length; i++) {
          if (array[i][key] === value) {
            return array[i];
          }
        }
        return null;
      }

      var hist = {};
      thelocations.map( function (a) {
        //console.log(a)
        if (a in hist) hist[a] ++; else hist[a] = 1;
      } );
      //console.log(hist);
      //console.log(originallocations)

      var finallocations = []
      for (const [key, value] of Object.entries(hist)) {
        //console.log(`${key}: ${value}`);
        var result = findObjectByKey(originallocations, 'LocationName', key);
        result.num = value
        //console.log(result)
        finallocations.push(result)
      }

      //console.log('finallocations',finallocations)
      setFilteredlocations(finallocations)
    }

  };

  const defaultProps = {
    center: {lat: 39.099728,lng: -94.578568},
    zoom: 4.5
  };

  const handleApiLoaded = (map, maps) => {
    //new maps.Marker({position: {lat: 30.267153,lng:-97.743057}, map, title: "Austin, TX",});
  };

  const _onBoundsChange = (center, zoom, bounds, marginBounds) => {
    console.log('_onBoundsChange')
    // if (this.props.onBoundsChange) {
    //   this.props.onBoundsChange({center, zoom, bounds, marginBounds});
    // } else {
    //   this.props.onCenterChange(center);
    //   this.props.onZoomChange(zoom);
    // }
  }

  const _onChildClick = (key, childProps) => {
    console.log('_onChildClick')
    // const markerId = childProps.marker.get('id');
    // const index = this.props.markers.findIndex(m => m.get('id') === markerId);
    // if (this.props.onChildClick) {
    //   this.props.onChildClick(index);
    // }
  }

  const _onChildMouseEnter = (key, childProps) => {
    console.log('_onChildMouseEnter')
    console.log(childProps)
    setCurrId(childProps.id)
    // const markerId = childProps.marker.get('id');
    // console.log(markerId)
    // const index = this.props.markers.findIndex(m => m.get('id') === markerId);
    // if (this.props.onMarkerHover) {
    //   this.props.onMarkerHover(index);
    // }
  }

  const _onChildMouseLeave = (/* key, childProps */) => {
    console.log('_onChildMouseLeave')
    setCurrId(0)
    // if (this.props.onMarkerHover) {
    //   this.props.onMarkerHover(-1);
    // }
  }

  const _onBalloonCloseClick = () => {
    console.log('_onBalloonCloseClick')
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
    <div style={{display:'flex',flex:props.flex,flexWrap:'wrap',flexDirection:'row',overflow:'auto',alignContent:'flex-start'}}
    xstyle={{flex:'auto',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between',display:'flex',overflow:'auto'}}>
      <GoogleMap
        onChange={_onBoundsChange}
        onChildClick={_onChildClick}
        onChildMouseEnter={_onChildMouseEnter}
        onChildMouseLeave={_onChildMouseLeave}
        margin={[K_MARGIN_TOP, K_MARGIN_RIGHT, K_MARGIN_BOTTOM, K_MARGIN_LEFT]}
        hoverDistance={K_HOVER_DISTANCE}
        // distanceToMouse={_distanceToMouse}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        {filteredlocations !== null &&
        filteredlocations.map((location, index) => (
          <Marker
            num={location.num}
            key={index}
            show={location.PartnerLocationID === currid}
            id={location.PartnerLocationID}
            text={location.LocationName}
            lat={location.Latitude}
            lng={location.Longitude}
          />
        ))}
      </GoogleMap>
    </div>
  )
}

export default MapWidget