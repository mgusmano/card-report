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

  const [positions, setPositions] = useState([])
  const [filteredpositions, setFilteredPositions] = useState([])
  const [locations, setLocations] = useState([])
  const [filteredlocations, setFilteredLocations] = useState([])
  const [buttonlabel, setButtonLabel] = useState('No Filters Selected')

  const [managers, setManagers] = useState([])
  const [filteredmanagers, setFilteredManagers] = useState([])
  const [skills, setSkills] = useState([])
  const [filteredskills, setFilteredSkills] = useState([])


  const [fitpercents, setFitpercents] = useState(null)
  const [filteredfitpercent, setFilteredfitpercent] = useState('')

  const {propertywidth} = props
  const refApplyButton = useRef(null);
  const refPositions = useRef(null);
  const refLocations = useRef(null);
  const refManagers = useRef(null);
  const refSkills = useRef(null);
  const refFitpercents = useRef(null);

  useEffect(() => {
    console.log('useEffect CardWidgetProperties')

    axios
    .get('https://skillnetusersapi.azurewebsites.net/api/managers?personid=275399', {
      auth: {username: 'skillnet',password: 'demo'}
    })
    .then((response) => {
      console.log('managers',response.data)
      setManagers(response.data)
    })
    .catch((error) => {
      console.log(error)
    })

    axios
    .get('https://skillnetusersapi.azurewebsites.net/api/skills?personid=275399', {
      auth: {username: 'skillnet',password: 'demo'}
    })
    .then((response) => {
      console.log('skills',response.data)
      setSkills(response.data)
    })
    .catch((error) => {
      console.log(error)
    })

    axios
    .get('https://skillnetpartnerpositionsapi.azurewebsites.net//api/PartnerPositions?partnerid=395', {
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
    .get('https://skillnetpartnerlocationsapi.azurewebsites.net//api/PartnerLocations?partnerid=395', {
      auth: {username: 'skillnet',password: 'demo'}
    })
    .then((response) => {
      var arrayLocations = response.data.map(item => {
        var n = item.LocationName.indexOf(',');
        var city = item.LocationName.substring(0,n)
        //console.log(city)
        return {
          PartnerLocationID: item.PartnerLocationID,
          LocationName: item.LocationName,
          City: city
        }
      })
      console.log('locations',arrayLocations)
      setLocations(arrayLocations)
    })
    .catch((error) => {
      console.log(error)
    })

    var arrayFitpercents = [
      { Name:'40% and above', value: 40 },
      { Name:'45% and above', value: 45 },
      { Name:'50% and above', value: 50 },
      { Name:'55% and above', value: 55 },
      { Name:'60% and above', value: 60 },
      { Name:'65% and above', value: 65 },
      { Name:'70% and above', value: 70 },
      { Name:'75% and above', value: 75 },
      { Name:'80% and above', value: 80 },
      { Name:'85% and above', value: 85 },
      { Name:'90% and above', value: 90 },
      { Name:'95% and above', value: 95 },
    ]
    setFitpercents(arrayFitpercents)
  }, []);


  const SendIt = (type, payload) => {
    window.dispatchEvent(new CustomEvent('mjg',{detail:{type:type,payload:payload}}));
  }

  const onApplyClick = (event) => {
    if (buttonlabel === 'No Filters Selected') {return}
    setButtonLabel('Filters Are Applied')
    // onChange({
    //   filteredlocations: filteredlocations,
    //   filteredpositions: filteredpositions
    // })

    SendIt('fromcard', {filters: {
      filteredpositions: filteredpositions,
      filteredskills: filteredskills,
      filteredlocations: filteredlocations,
      filteredmanagers: filteredmanagers,
      filteredfitpercent: filteredfitpercent
    }})

    //window.dispatchEvent(new CustomEvent('mjg',{detail:{type:'fromcard',payload:payload}}));

  };

  const positionsChanged = (event, value, reason) => {
    //console.log(event)
    console.log('positionsChanged',value)

    var filtersJobs = value.map(position => {
      return position.JobName
    })
    console.log(filtersJobs)

    setFilteredPositions(filtersJobs)
    //console.log(reason)
    setButtonLabel('Apply All Filters')
  };

  const skillsChanged = (event, value, reason) => {
    console.log('skillsChanged',value)
    var filtersSkill = value.map(skill => {
      return skill.SkillName
    })
    console.log(filtersSkill)
    setFilteredSkills(filtersSkill)
    setButtonLabel('Apply All Filters')
  };

  const locationsChanged = (event, value, reason) => {

    console.log('locationsChanged',value)

    var filtersLocation = value.map(location => {
      return location.LocationName
      //return location.City
    })
    console.log(filtersLocation)

    setFilteredLocations(filtersLocation)
    //console.log(reason)
    setButtonLabel('Apply All Filters')

    // console.log(event)
    // console.log(value)
    // setFilteredLocations(value)
    // console.log(reason)
    // setButtonLabel('Apply All Filters')
  };

  const managersChanged = (event, value, reason) => {
    console.log('managersChanged',value)
    var filtersManager = value.map(manager => {
      return manager.ManagerID
    })
    console.log(filtersManager)
    setFilteredManagers(filtersManager)
    //console.log(reason)
    setButtonLabel('Apply All Filters')
  };

  const fitpercentsChanged = (event, value, reason) => {
    console.log('fitpercentsChanged',value)
    setFilteredfitpercent(value.value)
    setButtonLabel('Apply All Filters')
  };



  return (
    <div style={{width:propertywidth,padding:'10px'}}>
      <Button
        ref={refApplyButton}
        style={{width:'100%'}}
        variant="contained"
        onClick={onApplyClick}
      >
        {buttonlabel}
      </Button>

      {positions !== null &&
        <Autocomplete
          ref={refPositions}
          onChange={positionsChanged}
          style={{width:'100%',marginTop:'20px'}}
          multiple
          disableCloseOnSelect={true}
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

      {skills !== null &&
        <Autocomplete
          ref={refSkills}
          onChange={skillsChanged}
          style={{width:'100%',marginTop:'20px'}}
          multiple
          disableCloseOnSelect={true}
          options={skills}
          getOptionLabel={(skill) => skill.SkillName}
          defaultValue={[]}
          renderOption={(skills, { selected }) => (
            <React.Fragment>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {skills.SkillName}
            </React.Fragment>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Skills"
              placeholder=""
            />
          )}
        />
      }

      {locations !== null &&
        <Autocomplete
          ref={refLocations}
          onChange={locationsChanged}
          style={{width:'100%',marginTop:'20px'}}
          multiple
          disableCloseOnSelect={true}
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

      {managers !== null &&
        <Autocomplete
          ref={refManagers}
          onChange={managersChanged}
          style={{width:'100%',marginTop:'20px'}}
          multiple
          disableCloseOnSelect={true}
          options={managers}
          getOptionLabel={(manager) => manager.ManagerName}
          defaultValue={[]}
          renderOption={(managers, { selected }) => (
            <React.Fragment>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {managers.ManagerName}
            </React.Fragment>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Managers"
              placeholder=""
            />
          )}
        />
      }

      {fitpercents !== null &&
        <Autocomplete
          ref={refFitpercents}
          onChange={fitpercentsChanged}
          style={{width:'100%',marginTop:'20px'}}

          disableCloseOnSelect={true}
          options={fitpercents}
          getOptionLabel={(fitpercents) => {
            //console.log(fitpercents.Name)
            //if (fitpercent.length > 0) {
              return fitpercents.Name
            //}
            //else {
            //  return 'select fit percent'
            //}
          }}
          defaultValue={[]}
          renderOption={(fitpercents, { selected }) => (
            <React.Fragment>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {fitpercents.Name}
            </React.Fragment>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Fit Percent"
              placeholder=""
            />
          )}
        />
      }

    </div>
  )
}

export default CardWidgetProperties
