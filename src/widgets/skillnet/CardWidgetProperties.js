import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import './CardWidget.css'

import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


const CardWidgetProperties = (props) => {
  //title:Card Report//title:
  //x:30//x:
  //y:30//y:
  //width:1000//width:
  //height:700//height:

  const [positions, setPositions] = useState(null)
  const [filteredpositions, setFilteredPositions] = useState(null)
  const [locations, setLocations] = useState(null)
  const [filteredlocations, setFilteredLocations] = useState(null)
  const [buttonlabel, setButtonLabel] = useState('No Filters Selected')

  const {propertywidth, onChange} = props
  const refApplyButton = useRef(null);
  const refPositions = useRef(null);
  const refLocations = useRef(null);

  useEffect(() => {
    console.log('useEffect')

    axios
    .get('http://skillnetpartnerpositionsapi.azurewebsites.net//api/PartnerPositions?partnerid=395', {
      auth: {username: 'skillnet',password: 'demo'}
    })
    .then((response) => {
      var arrayPositions = response.data.map(item => {
        return {
          JobID: item.JobID,
          JobName: item.JobName
        }
      })
      console.log('positions',arrayPositions)
      setPositions(arrayPositions)
    })
    .catch((error) => {
      console.log(error)
    })

    axios
    .get('http://skillnetpartnerlocationsapi.azurewebsites.net//api/PartnerLocations?partnerid=395', {
      auth: {username: 'skillnet',password: 'demo'}
    })
    .then((response) => {
      var arrayLocations = response.data.map(item => {
        return {
          PartnerLocationID: item.PartnerLocationID,
          LocationName: item.LocationName
        }
      })
      console.log('locations',arrayLocations)
      setLocations(arrayLocations)
    })
    .catch((error) => {
      console.log(error)
    })

  }, []);

  const onApplyClick = (event) => {
    if (buttonlabel === 'No Filters Selected') {return}
    setButtonLabel('Filters Are Applied')
    onChange({
      filteredlocations: filteredlocations,
      filteredpositions: filteredpositions
    })
  };

  const positionsChanged = (event, value, reason) => {
    console.log(event)
    console.log(value)
    setFilteredPositions(value)
    console.log(reason)
    setButtonLabel('Apply All Filters')
  };

  const locationsChanged = (event, value, reason) => {
    console.log(event)
    console.log(value)
    setFilteredLocations(value)
    console.log(reason)
    setButtonLabel('Apply All Filters')
  };

  return (
    <>
      <Button
        ref={refApplyButton}
        style={{width:propertywidth}}
        variant="contained"
        onClick={onApplyClick}
      >
        {buttonlabel}
      </Button>

      {positions !== null &&
        <Autocomplete
          ref={refPositions}
          onChange={positionsChanged}
          style={{width:propertywidth,marginTop:'20px'}}
          multiple
          disableCloseOnSelect={false}
          options={positions}
          getOptionLabel={(position) => position.JobName}
          defaultValue={[]}
          renderOption={(position, { selected }) => (
            <React.Fragment>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {position.JobName}
            </React.Fragment>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Positions"
              placeholder=""
            />
          )}
        />
      }

      {locations !== null &&
        <Autocomplete
          ref={refLocations}
          onChange={locationsChanged}
          style={{width:propertywidth,marginTop:'20px'}}
          multiple
          disableCloseOnSelect={false}
          options={locations}
          getOptionLabel={(location) => location.LocationName}
          defaultValue={[]}
          renderOption={(locations, { selected }) => (
            <React.Fragment>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {locations.LocationName}
            </React.Fragment>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Locations"
              placeholder=""
            />
          )}
        />
      }
    </>
  )
}

export default CardWidgetProperties
