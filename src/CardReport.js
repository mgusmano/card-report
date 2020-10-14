import React, { useState } from 'react';
import CardWidget from './widgets/skillnet/CardWidget'
import MapWidget from './widgets/skillnet/MapWidget'
import CardReportFooter from './CardReportFooter'

import Horizontal from './layout/Horizontal'
import Vertical from './layout/Vertical'
import Splitter from './layout/Splitter'
//import Separator from './layout/Separator'

import CardWidgetProperties from'./widgets/skillnet/CardWidgetProperties'
//import IconButton from '@material-ui/core/IconButton';



import Tv from '@material-ui/icons/Tv';
import Map from '@material-ui/icons/Map';
import AllInclusive from '@material-ui/icons/AllInclusive';

import Star from '@material-ui/icons/Star';

import Menu from '@material-ui/icons/Menu';




//import ButtonGroup from '@material-ui/core/ButtonGroup';
//import Button from '@material-ui/core/Button';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const CardReport = () => {
  const [filterdisplay, setFilterDisplay] = useState('block')
  const [propertywidth] = useState('350px')

  const [cardflex, setCardflex] = useState(1)
  const [mapflex, setMapflex] = useState(0)

  const [alignment, setAlignment] = React.useState('Card');


  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    switch(newAlignment) {
      case 'Card':
        setCardflex(1)
        setMapflex(0)
        break;
      case 'Map':
        setCardflex(0)
        setMapflex(1)
        break;
      case 'Both':
        setCardflex(1)
        setMapflex(1)
        break;
      default:
        // code block
    }
  };



  const onCloseClick = () => {
    console.log('onCloseClick')
    if (filterdisplay === 'block') {
      setFilterDisplay('none')
    }
    else {
      setFilterDisplay('block')
    }
  };
  //https://material-ui.com/components/material-icons/

  return (
    <Horizontal >
      {/* column 1 */}
      <Vertical style={{flex:'1'}}>
        <div style={{display:'flex',justifyContent:'space-between',flexDirection:'row',background:'lightgray',color:'black',textAlign:'center',fontSize:'24px'}}>
          <div style={{padding:'10px 0 0 20px'}}>
            SkillNet Card Report
          </div>

          <div>

            <ToggleButtonGroup
              style={{padding:'5px',border:'none',marginRight:'20px'}}
              size="small"
              value={alignment}
              exclusive
              onChange={handleAlignment}
            >
              <ToggleButton value="Card" style={{width:'100px'}}>
                <Tv />&nbsp;Card
              </ToggleButton>
              <ToggleButton value="Map" style={{width:'100px'}}>
                <Map />&nbsp;Map
              </ToggleButton>
              <ToggleButton value="Both" style={{width:'100px'}}>
                <AllInclusive />&nbsp;Both
              </ToggleButton>
            </ToggleButtonGroup>

            <ToggleButtonGroup
              style={{padding:'5px',marginRight:'20px'}}
              size="small"
              value={alignment}
              exclusive
              onChange={handleAlignment}
            >
              <ToggleButton cxolor="primary" style={{width:'100px'}} onClick={onCloseClick}>
                <Menu />&nbsp;Filters
              </ToggleButton>
            </ToggleButtonGroup>

          </div>

        </div>
        <Splitter/>
        <CardWidget flex={cardflex}/>
        <Splitter/>
        <MapWidget flex={mapflex}/>
        <Splitter/>
        <CardReportFooter/>
      </Vertical>
      <Splitter/>
      {/* column 2 */}
      <Vertical style={{display:filterdisplay,width:propertywidth}}>
        <CardWidgetProperties propertywidth={propertywidth}/>
      </Vertical>
    </Horizontal>
  )
}

export default CardReport

// {/* <div style={{flex:'auto', display:'flex', flexDirection:'row'}}>
//       <CardWidget/>
// </div> */}

