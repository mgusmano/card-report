import React, { useState, useEffect } from 'react';
import axios from "axios";
import './CardWidget.css'

import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { SettingsSystemDaydreamTwoTone } from '@material-ui/icons';
import TreeItem from '@material-ui/lab/TreeItem';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


//const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
//const checkedIcon = <CheckBoxIcon fontSize="small" />;

const DropDown = (props) => {
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const { who, onChanged, options, name, multiple} = props

  return (
    <Autocomplete
      //ref={refSegments}
      onChange={onChanged}
      style={{width:'100%',marginTop:'20px'}}
      multiple={multiple}
      disableCloseOnSelect={true}
      options={options}
      getOptionLabel={options => typeof options === 'string' ? options : options[name]}
      //defaultValue={[]}
      renderOption={(options, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {options[name]}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label={who}
          placeholder=""
        />
      )}
    />
  )
}




const CardWidgetProperties = (props) => {
  //title:Card Report//title:
  //x:30//x:
  //y:30//y:
  //width:1000//width:
  //height:700//height:

  const [treedata, setTreeData] = useState(null)

  const [positions, setPositions] = useState([])
  const [filteredpositions, setFilteredPositions] = useState([])
  const [locations, setLocations] = useState([])
  const [filteredlocations, setFilteredLocations] = useState([])
  const [buttonlabel, setButtonLabel] = useState('No Filters Selected')

  const [competencygroups, setCompetencyGroups] = useState([])
  const [competencies, setCompetencies] = useState([])
  const [skills, setSkills] = useState([])
  const [filteredskills, setFilteredSkills] = useState([])

  const [managers, setManagers] = useState([])
  const [filteredmanagers, setFilteredManagers] = useState([])
  const [fitpercents, setFitpercents] = useState(null)
  const [filteredfitpercent, setFilteredfitpercent] = useState('')

  const [subjectmatterexperts, setSubjectmatterexperts] = useState(null)
  const [filteredsubjectmatterexperts, setFilteredsubjectmatterexperts] = useState([])
  //const [subjectmatterexpert, setSubjectmatterexpert] = useState('')



  const [segments, setSegments] = useState(null)
  const [filteredsegments, setFilteredSegments] = useState([])
  //const refSegments = useRef(null);
  const segmentsChanged = (event, value, reason) => {
    var filtersSegments = value.map(segment => {
      return segment.SegmentName
    })
    console.log('segmentsChanged',filtersSegments)
    setFilteredSegments(filtersSegments)
    setButtonLabel('Apply All Filters')
  };

  const [functions, setFunctions] = useState(null)
  const [filteredfunctions, setFilteredFunctions] = useState([])
  //const refSegments = useRef(null);
  const functionsChanged = (event, value, reason) => {
    var filtersFunctions = value.map(funct => {
      return funct.FunctionName
    })
    console.log('functionsChanged',filtersFunctions)
    setFilteredFunctions(filtersFunctions)
    setButtonLabel('Apply All Filters')
  };

  const [subfunctions, setSubfunctions] = useState(null)
  const [filteredsubfunctions, setFilteredSubfunctions] = useState([])
  //const refSegments = useRef(null);
  const subfunctionsChanged = (event, value, reason) => {
    var filtersSubfunctions = value.map(subfunct => {
      return subfunct.SubfunctionName
    })
    console.log('subfunctionsChanged',filtersSubfunctions)
    setFilteredSubfunctions(filtersSubfunctions)
    setButtonLabel('Apply All Filters')
  };





  const {propertywidth} = props
  // const refApplyButton = useRef(null);
  // const refPositions = useRef(null);
  // const refLocations = useRef(null);
  // const refManagers = useRef(null);
  // const refSkills = useRef(null);
  // const refFitpercents = useRef(null);
  // const refSubjectmatterexperts = useRef(null);

  const { PartnerID, PartnerName, PersonID } = props.Partner;

  //var PartnerID = 395;  var PartnerName = 'CNA'; var PersonID = 275399;
  //var PartnerID = 426;  var PartnerName = 'General Mills'; var PersonID = 277356;

  useEffect(() => {
    console.log('useEffect CardWidgetProperties')

    if (PartnerName === 'General Mills') {
      axios
      .get('https://skillnetusersapi.azurewebsites.net/api/segments/', {
        auth: {username: 'skillnet',password: 'demo'}
      })
      .then((response) => {
        var arraySegments = response.data.map(item => {
          return {
            SegmentID: item.CustomAttributeID,
            SegmentName: item.CustomAttributeValue
          }
        })
        console.log('segments',arraySegments)
        setSegments(arraySegments)
      })
      .catch((error) => {
        console.log(error)
      })

      axios
      .get('https://skillnetusersapi.azurewebsites.net/api/functions/', {
        auth: {username: 'skillnet',password: 'demo'}
      })
      .then((response) => {
        var arrayFunctions = response.data.map(item => {
          return {
            FunctionID: item.CustomAttributeID,
            FunctionName: item.CustomAttributeValue
          }
        })
        console.log('functions',arrayFunctions)
        setFunctions(arrayFunctions)
      })
      .catch((error) => {
        console.log(error)
      })

      axios
      .get('https://skillnetusersapi.azurewebsites.net/api/subfunctions/', {
        auth: {username: 'skillnet',password: 'demo'}
      })
      .then((response) => {
        var arraySubfunctions = response.data.map(item => {
          return {
            SubfunctionID: item.CustomAttributeID,
            SubfunctionName: item.CustomAttributeValue
          }
        })
        console.log('functions',arraySubfunctions)
        setSubfunctions(arraySubfunctions)
      })
      .catch((error) => {
        console.log(error)
      })
    }


    //CompetencyGroups
    axios
    .get('https://skillnetusersapi.azurewebsites.net/api/competencygroup?partnerid=' + PartnerID, {
      auth: {username: 'skillnet',password: 'demo'}
    })
    .then((response) => {
      console.log('CompetencyGroups-raw',response.data)
      var arrayCompetencyGroups = response.data.map(item => {
        return {
          CompetencyGroupID: item.CompetencyGroupID,
          CompetencyGroupName: item.CompetencyGroupName,
          CompetencyGroupIcon: item.CompetencyGroupIcon,
          CompetencyGroupDisplayOrder: item.CompetencyGroupDisplayOrder
        }
      })


      function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const bandA = a.CompetencyGroupDisplayOrder;
        const bandB = b.CompetencyGroupDisplayOrder;

        let comparison = 0;
        if (bandA > bandB) {
          comparison = 1;
        } else if (bandA < bandB) {
          comparison = -1;
        }
        return comparison;
      }

      arrayCompetencyGroups.sort(compare);

      console.log('CompetencyGroups',arrayCompetencyGroups)
      setCompetencyGroups(arrayCompetencyGroups)
    })
    .catch((error) => {
      console.log(error)
    })

    //Competencies and Skills
    var arrayCompetencies = []
    axios
    .get('https://skillnetusersapi.azurewebsites.net/api/skills?personid=' + PersonID, {
      auth: {username: 'skillnet',password: 'demo'}
    })
    .then((response) => {
      console.log('competencies-raw',response.data)
      arrayCompetencies = response.data.map(item => {
        return {
          CompetencyID: item.SkillID,
          CompetencyName: item.SkillName,
          CompetencyGroupID: item.GroupID,
        }
      })
      console.log('competencies',arrayCompetencies)
      setCompetencies(arrayCompetencies)

      var f= 'https://skillnetusersapi.azurewebsites.net/api/skills?groupid=33931&parentskillid='
      var arrayAxios = []
      arrayCompetencies.forEach(competency => {
        arrayAxios.push( axios.get(f+competency.CompetencyID,{auth: {username: 'skillnet',password: 'demo'}}))
      })
      Promise.all(arrayAxios)
        .then(function (results) {

          var tree = []
          arrayCompetencies.forEach((competency, index) => {

            //console.log(results)

            var children = []
            results[index].data.forEach(result => {
              var c = {
                id: result.SkillID.toString(),
                name: result.SkillName
              }
              children.push(c)
            })

            var o = {
              id: competency.CompetencyID.toString(),
              name: competency.CompetencyName,
              children: children
            }
            tree.push(o)
          })
          console.log(tree)

          var data = {
            id: 'root',
            name: 'Skills',
            children: tree
          }

          setTreeData(data)

    // const acct = results[0];
    // console.log(acct)
    // const perm = results[1];
    // console.log(perm)
        });

    })
    .catch((error) => {
      console.log(error)
    })

    //    .get('https://skillnetusersapi.azurewebsites.net/api/skills?groupid=33931&personid=' + PersonID, {
    //  .get('https://skillnetusersapi.azurewebsites.net/api/skills?groupid=33931&parentskillid=39806', {
    //Skills
    axios
    .get('https://skillnetusersapi.azurewebsites.net/api/skills?groupid=33931&parentskillid=39851', {
      auth: {username: 'skillnet',password: 'demo'}
    })
    .then((response) => {
      console.log('skills-raw',response.data)
      var arraySkills = response.data.map(item => {
        return {
          SkillID: item.SkillID,
          SkillName: item.SkillName,
          ParentSkillID: item.ParentSkillID,
        }
      })
      console.log('skills',arraySkills)
      setSkills(arraySkills)




    //   axios.get('http://apple.com'))
    //   axios.all([
    //     axios.get('http://google.com'),
    //     axios.get('http://apple.com')
    // ]).then(axios.spread((googleRes, appleRes) => {
    //     // do something with both responses
    // });




    })
    .catch((error) => {
      console.log('skills=error')
      console.log(error)
    })


    // axios
    // .get('https://skillnetusersapi.azurewebsites.net/api/skills?personid=' + PersonID, {
    //   auth: {username: 'skillnet',password: 'demo'}
    // })
    // .then((response) => {
    //   console.log('skills2',response.data)
    //   setSkills(response.data)
    // })
    // .catch((error) => {
    //   console.log(error)
    // })





    http://skillnetusersapi.azurewebsites.net//api/skills?groupid=33931

    axios
    .get('https://skillnetusersapi.azurewebsites.net/api/managers?personid=' + PersonID, {
      auth: {username: 'skillnet',password: 'demo'}
    })
    .then((response) => {
      var arrayManagers = response.data.map(item => {
        return {
          ManagerID: item.ManagerID,
          ManagerName: item.ManagerName //+ ' (' + item.ManagerID + ')'
        }
      })
      console.log('managers',arrayManagers)
      setManagers(arrayManagers)
    })
    .catch((error) => {
      console.log(error)
    })


    axios
    .get('https://skillnetpartnerpositionsapi.azurewebsites.net/api/PartnerPositions?partnerid=' + PartnerID, {
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
    .get('https://skillnetpartnerlocationsapi.azurewebsites.net//api/PartnerLocations?partnerid=' + PartnerID, {
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
      { FitpercentName:'40% and above', FitpercentValue: 40 },
      { FitpercentName:'45% and above', FitpercentValue: 45 },
      { FitpercentName:'50% and above', FitpercentValue: 50 },
      { FitpercentName:'55% and above', FitpercentValue: 55 },
      { FitpercentName:'60% and above', FitpercentValue: 60 },
      { FitpercentName:'65% and above', FitpercentValue: 65 },
      { FitpercentName:'70% and above', FitpercentValue: 70 },
      { FitpercentName:'75% and above', FitpercentValue: 75 },
      { FitpercentName:'80% and above', FitpercentValue: 80 },
      { FitpercentName:'85% and above', FitpercentValue: 85 },
      { FitpercentName:'90% and above', FitpercentValue: 90 },
      { FitpercentName:'95% and above', FitpercentValue: 95 },
    ]
    setFitpercents(arrayFitpercents)

    if (PartnerName === 'CNA') {
      var arraySubjectmatterexperts = [
        { Name:'Gold',   value: 'Gold' },
        { Name:'Silver', value: 'Silver' },
        { Name:'Bronze', value: 'Bronze' },
      ]
      setSubjectmatterexperts(arraySubjectmatterexperts)
    }


  }, [PartnerID, PartnerName]);


  const SendIt = (type, payload) => {
    window.dispatchEvent(new CustomEvent('mjg',{detail:{type:type,payload:payload}}));
  }



  const onApplyClick = (event) => {
    if (buttonlabel === 'No Filters Selected') {return}

    console.log('a')
    const filters = {}
    if (filteredpositions.length > 0) {
      filters.JobName = JobName => filteredpositions.includes(JobName)
    }
    if (filteredlocations.length > 0) {
      filters.Location = Location => filteredlocations.includes(Location)
    }
    if (filteredmanagers.length > 0) {
      filters.DirectManagerID = DirectManagerID => filteredmanagers.includes(DirectManagerID)
    }
    if (filteredfitpercent !== '') {
      if (PartnerName === 'General Mills') {
        filters.SelfRating = SelfRating => (SelfRating >= filteredfitpercent) ? true : false
      }
      else {
        filters.ManagerRating = ManagerRating => (ManagerRating >= filteredfitpercent) ? true : false
      }
    }
    if (filteredsubjectmatterexperts.length > 0) {
      filters.sme = sme => filteredsubjectmatterexperts.includes(sme)
    }
    if (filteredsegments.length > 0) {
      filters.Segment = Segment => filteredsegments.includes(Segment)
    }
    if (filteredfunctions.length > 0) {
      filters.Function = Function => filteredfunctions.includes(Function)
    }
    if (filteredsubfunctions.length > 0) {
      filters.SubFunction = SubFunction => filteredsubfunctions.includes(SubFunction)
    }



    console.log('filters',filters)

    SendIt('fromcard2', {filters: filters})





    // //const filtered = filterArray(cardRef.current.originalusers, filters);
    // //setUsers(filtered)





    // SendIt('fromcard', {filters: {
    //   filteredusers: filtered,
    //   filteredpositions: filteredpositions,
    //   filteredskills: filteredskills,
    //   filteredlocations: filteredlocations,
    //   filteredmanagers: filteredmanagers,
    //   filteredfitpercent: filteredfitpercent,
    //   filteredsubjectmatterexperts: filteredsubjectmatterexperts
    // }})

    setButtonLabel('Filters Are Applied')




  };

  const positionsChanged = (event, value, reason) => {
    var filtersJobs = value.map(position => {
      return position.JobName
    })
    console.log('positionsChanged',filtersJobs.toString())
    setFilteredPositions(filtersJobs)
    setButtonLabel('Apply All Filters')
  };

  const skillsChanged = (event, value, reason) => {
    var filtersSkills = value.map(skill => {
      return skill.SkillName
    })
    console.log('skillsChanged',filtersSkills)
    setFilteredSkills(filtersSkills)
    setButtonLabel('Apply All Filters')
  };

  const locationsChanged = (event, value, reason) => {
    var filtersLocations = value.map(location => {
      return location.LocationName
    })
    console.log('locationsChanged',filtersLocations)
    setFilteredLocations(filtersLocations)
    setButtonLabel('Apply All Filters')
  };

  const managersChanged = (event, value, reason) => {
    var filtersManager = value.map(manager => {
      return manager.ManagerID
    })
    console.log('managersChanged',filtersManager)
    setFilteredManagers(filtersManager)
    setButtonLabel('Apply All Filters')
  };

  const fitpercentsChanged = (event, value, reason) => {
    var fitpercents = value.map(fitpercent => {
      return fitpercent.FitpercentValue
    })
    console.log(value)
    if (value == null) {
      setFilteredfitpercent('')
    }
    else {
      setFilteredfitpercent(fitpercents[0])
    }
    console.log('fitpercentsChanged',fitpercents[0])
    setButtonLabel('Apply All Filters')
  };

  const subjectmatterexpertsChanged = (event, value, reason) => {
    var filtersSubjectmatterexperts = value.map(subjectmatterexpert => {
      return subjectmatterexpert.Name
    })
    console.log('subjectmatterexpertsChanged',filtersSubjectmatterexperts)
    setFilteredsubjectmatterexperts(filtersSubjectmatterexperts)
    setButtonLabel('Apply All Filters')
  };


  const labelIt = (node) => {
    console.log(node)
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <Checkbox

id={`checkbox-${node.id}`}
//checked={isChecked}
onChange={(e, checked) => console.log('you checked it!', checked)}
onClick={e => (e.stopPropagation())}


        color="primary"
      />
      <Typography variant="caption">{node.name}</Typography>
    </div>
    )
  };

  const label = (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Checkbox




        color="primary"
      />
      <Typography variant="caption"></Typography>
    </div>
  );

  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={labelIt(nodes)}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  );

  return (
    <div style={{width:propertywidth,padding:'10px'}}>
      <Button
        // ref={refApplyButton}
        style={{width:'100%'}}
        variant="contained"
        onClick={onApplyClick}
      >
        {buttonlabel}
      </Button>

{positions !== null &&
<DropDown multiple={true} who="Positions" onChanged={positionsChanged} options={positions} name="JobName"/>
}

{null !== null &&
<DropDown multiple={true} who="Skills" onChanged={skillsChanged} options={skills} name="SkillName"/>
}

{locations !== null &&
<DropDown multiple={true} who="Locations" onChanged={locationsChanged} options={locations} name="LocationName"/>
}

{managers !== null &&
<DropDown multiple={true} who="Managers" onChanged={managersChanged} options={managers} name="ManagerName"/>
}

{fitpercents !== null &&
<DropDown multiple={true} who="Fit Percent" onChanged={fitpercentsChanged} options={fitpercents} name="FitpercentName"/>
}

      {/* {fitpercents !== null &&
        <Autocomplete
          ref={refFitpercents}
          onChange={fitpercentsChanged}
          style={{width:'100%',marginTop:'20px'}}
          multiple={false}
          disableCloseOnSelect={true}
          options={fitpercents}
          getOptionLabel={fitpercents => typeof fitpercents === 'string' ? fitpercents : fitpercents.Name}
          //defaultValue={[]}
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
      } */}


{subjectmatterexperts !== null &&
<DropDown multiple={true} who="Subject Matter Experts" onChanged={subjectmatterexpertsChanged} options={subjectmatterexperts} name="Name"/>
}

{segments !== null &&
<DropDown multiple={true} who="Segments" onChanged={segmentsChanged} options={segments} name="SegmentName"/>
}

{functions !== null &&
<DropDown multiple={true} who="Functions" onChanged={functionsChanged} options={functions} name="FunctionName"/>
}
{subfunctions !== null &&
<DropDown multiple={true} who="Sub Functions" onChanged={subfunctionsChanged} options={subfunctions} name="SubfunctionName"/>
}


{treedata !== null &&
<TreeView
  multiSelect
  style={{marginTop:'15px'}}
  defaultCollapseIcon={<ExpandMoreIcon />}
  defaultExpanded={['root']}
  defaultExpandIcon={<ChevronRightIcon />}
>
  {renderTree(treedata)}
</TreeView>
}


    </div>
  )
}

export default CardWidgetProperties
