import React, { useState, useEffect } from 'react';
import Horizontal from '../../layout/Horizontal'
import Vertical from '../../layout/Vertical'
import Splitter from '../../layout/Splitter'
import Separator from '../../layout/Separator'

import ChartWidget from '../../widgets/skillnet/ChartWidget'

const Summary = (props) => {
  //const { name, value } = props;
  return (
    <div style={{height:'100px',border:'1px solid gray',background:'white',margin:'20px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>
      <div style={{fontSize:'14px'}}>{props.name}</div>
      <div style={{fontSize:'30px',fontWeight:'bold'}}>{props.value}</div>
    </div>
  )
}


const CovidReport = () => {
    //var PartnerID = 395;  var PartnerName = 'CNA'; var PersonID = 275399;
    var PartnerID = 434;  var PartnerName = 'General Mills'; var PersonID = 275399;
    //var PartnerID = 426;  var PartnerName = 'General Mills'; var PersonID = 277356;
    console.log('PartnerID',PartnerID)
    console.log('PartnerName',PartnerName)
    console.log('PersonID',PersonID)

    const [totalassignments, setTotalassignments] = useState(0)
    const [totalauthorized, setTotalAuthorized] = useState(0)
    const [totalnotauthorized, setTotalnotauthorized] = useState(0)
    const [authorizedpercent, setAuthorizedpercent] = useState(0)

    useEffect(() => {
      console.log('useEffect CovidReport')
      setTotalassignments(7892)
      setTotalAuthorized(2340)
      setTotalnotauthorized(5552)
      setAuthorizedpercent(29.65)

    }, []);

    ///  {/* <Horizontal style={{background:'gray'}}> */}
  return (


        <Vertical style={{flex:'1',background:'lightgray'}}>
          <div style={{display:'flex',padding:'10px 0 10px 20px',justifyContent:'space-between',flexDirection:'row',background:'rgb(94,100,179)',color:'white',textAlign:'center',fontSize:'24px'}}>
            CNA Covid Reporting
          </div>

          <div style={{display:'flex',flexDirection:'row'}}>
            <div style={{flex:'1'}}><Summary name='Total Assignments' value={totalassignments.toLocaleString()}/></div>
            <div style={{flex:'1'}}><Summary name='Total Authorized' value={totalauthorized.toLocaleString()}/></div>
            <div style={{flex:'1'}}><Summary name='Total Not Authorized' value={totalnotauthorized.toLocaleString()}/></div>
            <div style={{flex:'1'}}><Summary name='Authorized Percent' value={authorizedpercent+'%'}/></div>
          </div>

          <div style={{display:'flex',flexDirection:'row', height:'400px'}}>
          <ChartWidget flex={1} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID} name = 'doughnut2d'/>
          <ChartWidget flex={1} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID} name = 'stackedcolumn2d'/>
          </div>

          <div style={{display:'flex',flexDirection:'row', height:'400px'}}>
          <ChartWidget flex={1} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID} name = 'bar2d'/>

          </div>


        </Vertical>


  )
}

export default CovidReport


      //   {/* <Splitter/> */}
      //   {/* column 2 */}
      //   {/* <Vertical style={{display:filterdisplay,width:propertywidth}}>
      //     <CardWidgetProperties propertywidth={propertywidth} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID}/>
      //   </Vertical> */}
      // {/* </Horizontal> */}

