import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from "axios";
import './CardWidget.css'
import Horizontal from '../../layout/Horizontal'
import Vertical from '../../layout/Vertical'
import Splitter from '../../layout/Splitter'

import CardWidgetProperties from'./CardWidgetProperties'
import Card from'./Card'
import IconButton from '@material-ui/core/IconButton';
import FormatAlignCenter from '@material-ui/icons/FormatAlignCenter';
import MapWidget from './MapWidget'

//import jsonQuery from 'json-query'

//http://skillnetpartnerlocationsapi.azurewebsites.net//api/PartnerLocations?partnerid=395
//http://skillnetpartnerpositionsapi.azurewebsites.net//api/PartnerPositions?partnerid=395
//https://skillnetusersapi.azurewebsites.net/api/users

const CardWidget = (props) => {
  //title:Card Report//title:
  //x:30//x:
  //y:30//y:
  //width:1000//width:
  //height:700//height:

  const cardRef = useRef(null);
  //const [originalusers, setOriginalUsers] = useState(null)
  const [users, setUsers] = useState(null)
  const [propertywidth] = useState('350px')
  const [filterdisplay, setFilterDisplay] = useState('block')
  const [filteredpositions, setFilteredpositions] = useState([])
  const [filteredlocations, setFilteredlocations] = useState([])
  var originalusers

  const onMessage = useCallback((e) => {
    if (!e.detail) {return}
    var type = e.detail.type
    var payload = e.detail.payload
    switch (type) {
      case 'fromcard':
        onChange(payload.filters)
        break;
    }
  }, [])

  useEffect(() => {
    console.log('useEffect CardWidget')
    const card = cardRef.current

    axios
    .get('https://skillnetusersapi.azurewebsites.net/api/users', {
      auth: {username: 'skillnet',password: 'demo'}
    })
    .then((response) => {
      console.log('users',response.data)
      //setOriginalUsers(response.data)
      setUsers(response.data)
      card.originalusers = response.data
    })
    .catch((error) => {
      console.log(error)
    })


    // card.addEventListener('mjg', onMessage)
    // return () => {
    //   card.removeEventListener('mjg', onMessage)
    // }

    window.addEventListener('mjg', onMessage);
    return function cleanup() {
      window.removeEventListener('mjg', onMessage);
    };


  }, [cardRef]);



  // const onMessage2 = (e) => {
  //   if (!e.detail) {return}
  //   var type = e.detail.type
  //   var payload = e.detail.payload
  //   switch (type) {
  //     case 'fromcard':
  //       onChange(payload.filters)
  //       break;
  //   }
  // }


  const onChange = (filterdata) => {
    console.log('onChange',filterdata)
    console.log('originalusers',cardRef.current.originalusers)

    setFilteredpositions(filterdata.filteredpositions)
    setFilteredlocations(filterdata.filteredlocations)

    var filteredPositions = filterIt('JobName', filterdata.filteredpositions, cardRef.current.originalusers)
    var filteredLocations = filterIt('Location', filterdata.filteredlocations, filteredPositions)
    setUsers(filteredLocations)
  };

  const filterIt = (name, filtersSelected, start) => {
    if (filtersSelected.length == 0) {
      return start
    }
    var filteredResult = start.filter(obj => {
      var found = false;
        for (var i = 0; i < filtersSelected.length; i++) {
          if (obj[name] === filtersSelected[i]) {
            found = true;
            break;
          }
        }
        return found
    })
    return filteredResult
  };

  const onCloseClick = () => {
    console.log('onCloseClick')
    if (filterdisplay == 'block') {
      setFilterDisplay('none')
    }
    else {
      setFilterDisplay('block')
    }
  };

  return (
    <Horizontal ref={cardRef} >
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
        <div style={{display:'flex',flex:'1',flexWrap:'wrap',flexDirection:'row',overflow:'auto',alignContent:'flex-start'}} xstyle={{flex:'auto',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between',display:'flex',overflow:'auto'}}>
          {users !== null &&
            users.map((user, index) => {
              return (
                <Card key={index} user={user}/>
              )
            })
          }
        </div>
        <Splitter/>
        <MapWidget/>
        <Splitter/>
        <div style={{xflex:'1',background:'white',color:'black',textAlign:'center',fontSize:'11px',padding:'20px'}}>
        Jobs: {filteredpositions.join()} &nbsp;&nbsp;&nbsp; Locations: {filteredlocations.join()}
        </div>
      </Vertical>
      <Splitter/>
      {/* column 2 */}
      <Vertical style={{display:filterdisplay,width:propertywidth}}>
          <CardWidgetProperties propertywidth={propertywidth} onChange={onChange}/>
      </Vertical>
    </Horizontal>
  )

}

export default CardWidget


// <Vertical>
// <Horizontal style={{display:'flex',flex:'2',maxHeight:'100px'}}>
//   <div style={{height:'60px',padding:'10px'}}>filters here...</div>
// </Horizontal>
// <Splitter/>


// {/*

// <Horizontal>
// <div style={{display:'flex',flex:'auto',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between', overflow:'auto'}}>
  // {users !== null &&
  //   users.map((user) => {
  //     //var pic = `url(${user.Avatar})`
  //     console.log(user)
  //     return (
  //       <div key={user.PersonID} style={{display:'flex',flexDirection:'column',margin:'10px 10px 10px 10px',padding:'10px',width:'250px',height:'100px',border:'1px solid lightgray',boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>

  //         <div style={{display:'flex',flexDirection:'row',alignContent:'flex-end',justifyContent:'space-between'}}>
  //           {/* <div className="imgAll imgBig" style={{height:'70px',width:'70px',backgroundImage: 'url(./fonts/5.jpg)'}}></div> */}
  //           <div className="imgAll imgBig" style={{height:'70px',width:'70px',backgroundImage: `url(${user.Avatar})`}}></div>

  //           <div style={{display:'flex',flexDirection:'column',alignContent:'flex-end'}}>
  //             <div style={{fontSize:'11px',fontWeight:'bold',marginTop:'1px',textAlign:'right'}}>{user.BFirstName} {user.BLastName}</div>
  //             <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>{user.JobName}</div>
  //             <div style={{fontSize:'11px',marginTop:'10px',textAlign:'right'}}></div>
  //             <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>CNA</div>
  //             <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>{user.Location}</div>
  //           </div>
  //         </div>


  //         <div style={{marginTop:'10px',display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
  //           <div style={{fontSize:'11px'}}>{user.Email}</div>
  //         </div>


  //         <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
  //           <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>Profile</div>
  //         </div>
  //       </div>
  //     )
  //   })
  // }
// </div>
// </Horizontal>

// </Vertical> */}
// )

//          renderer: v => <strong>{Number(parseFloat(v).toFixed(2)).toLocaleString('en')}</strong>},