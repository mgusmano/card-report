import React, { useState } from 'react';
import CardWidget from './widgets/skillnet/CardWidget'
import MapWidget from './widgets/skillnet/MapWidget'
import CardReportFooter from './CardReportFooter'

import Horizontal from './layout/Horizontal'
import Vertical from './layout/Vertical'
import Splitter from './layout/Splitter'
//import Separator from './layout/Separator'

import CardWidgetProperties from'./widgets/skillnet/CardWidgetProperties'
import IconButton from '@material-ui/core/IconButton';
import FormatAlignCenter from '@material-ui/icons/FormatAlignCenter';

const CardReport = () => {
  const [filterdisplay, setFilterDisplay] = useState('block')
  const [propertywidth] = useState('350px')

  const onCloseClick = () => {
    console.log('onCloseClick')
    if (filterdisplay === 'block') {
      setFilterDisplay('none')
    }
    else {
      setFilterDisplay('block')
    }
  };

  return (
    <Horizontal >
      {/* column 1 */}
      <Vertical style={{flex:'1'}}>
        <div style={{display:'flex',justifyContent:'space-between',flexDirection:'row',background:'lightgray',color:'black',textAlign:'center',fontSize:'24px'}}>
          <div style={{padding:'10px 0 0 20px'}}>
            SkillNet Card Report
          </div>
          <IconButton color="primary" component="span" onClick={onCloseClick}>
            <FormatAlignCenter />
          </IconButton>
        </div>
        <Splitter/>
        <CardWidget/>
        <Splitter/>
        <MapWidget/>
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

