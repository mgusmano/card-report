import React, { useState } from 'react';

import Pie from './charts/pie/Pie'

import GMI from './images/GMI.png';
import CNA from './images/CNA.png';
import logoImg from './images/logo.png';


import CardWidget from './widgets/skillnet/CardWidget'
import MapWidget from './widgets/skillnet/MapWidget'
//import ChartWidget from './widgets/skillnet/ChartWidget'
import CardReportFooter from './CardReportFooter'

import Horizontal from './layout/Horizontal'
import Vertical from './layout/Vertical'
import Splitter from './layout/Splitter'
import Separator from './layout/Separator'

import CardWidgetProperties from'./widgets/skillnet/CardWidgetProperties'
//import IconButton from '@material-ui/core/IconButton';

import Tv from '@material-ui/icons/Tv';
import Map from '@material-ui/icons/Map';
import AllInclusive from '@material-ui/icons/AllInclusive';

//import Star from '@material-ui/icons/Star';

import Menu from '@material-ui/icons/Menu';

//import ButtonGroup from '@material-ui/core/ButtonGroup';
//import Button from '@material-ui/core/Button';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const CardReport = (props) => {
  const [filterdisplay, setFilterDisplay] = useState('block')
  const [propertywidth] = useState('350px')

  const [cardflex, setCardflex] = useState(1)
  const [mapflex, setMapflex] = useState(0)

  const [alignment, setAlignment] = React.useState('Card');

  var PartnerID; var PartnerName; var PersonID;
    //var PartnerID = 395;  var PartnerName = 'CNA'; var PersonID = 275399;
    //var PartnerID = 434;  var PartnerName = 'General Mills'; var PersonID = 275399; //sandbox
    //var PartnerID = 426;  var PartnerName = 'General Mills'; var PersonID = 277356;
    console.log(props)
  switch(props.PartnerID) {
    case '434':
      PartnerID = 434
      PartnerName = 'General Mills';
      PersonID = 275399;
      break;
    case '426':
      PartnerID = 426
      PartnerName = 'General Mills';
      PersonID = 277356;
      break;
    case '395':
      PartnerID = 395
      PartnerName = 'CNA';
      PersonID = 275399;
      break;
    default:
      return (
        <div>No partnerid or incorrect partnerid specified</div>
      )

      // code block
  }


  console.log('PartnerID',PartnerID)
  console.log('PartnerName',PartnerName)
  console.log('PersonID',PersonID)



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




        <div style={{height:'75px',display:'flex',justifyContent:'space-between',flexDirection:'row',background:'lightgray',color:'black',textAlign:'center',fontSize:'24px'}}>

          <div style={{padding:'5px 0 0 20px',fontSize:'12px'}}>
              <img src={logoImg} alt="SKILLNET" style={{width:'90px'}} />
              <span style={{xmarginLeft:'-2px'}}><i>Card Report</i></span>
          </div>

          {PartnerName === 'CNA' &&
          <div style={{padding:'5px 0 0 0',fontSize:'12px'}}>
          <img src={CNA} style={{marginTop:'10px'}} alt="CNA" style={{width:'90px'}} />
          </div>
          }

          {PartnerName === 'General Mills' &&
          <div style={{padding:'15px 0 0 0',fontSize:'12px'}}>
              <img src={GMI} style={{marginTop:'10px'}} alt="GMI" style={{width:'90px'}} />
          </div>
          }

          <div>
            <ToggleButtonGroup
              style={{padding:'15px 0 0 0',border:'none',marginRight:'20px'}}
              size="small"
              //value={alignment}
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
              <ToggleButton value="Close" cxolor="primary" style={{width:'100px'}} onClick={onCloseClick}>
                <Menu />&nbsp;Filters
              </ToggleButton>
            </ToggleButtonGroup>

          </div>

        </div>

        <Separator/>
        <CardWidget flex={cardflex} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID} />
        <Splitter/>
        <MapWidget flex={mapflex} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID}/>
        <Splitter/>
        <CardReportFooter/>
      </Vertical>
      <Splitter/>
      {/* column 2 */}
      <Vertical style={{display:filterdisplay,width:propertywidth}}>
        <CardWidgetProperties propertywidth={propertywidth} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID}/>
      </Vertical>
    </Horizontal>
  )
}

export default CardReport

// {/* <div style={{flex:'auto', display:'flex', flexDirection:'row'}}>
//       <CardWidget/>
// </div> */}

