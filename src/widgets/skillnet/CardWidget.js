import React, { useState, useEffect } from 'react';
import axios from "axios";
import './CardWidget.css'
import Horizontal from '../../layout/Horizontal'
import Vertical from '../../layout/Vertical'
import Splitter from '../../layout/Splitter'

import CardWidgetProperties from'./CardWidgetProperties'

//http://skillnetpartnerlocationsapi.azurewebsites.net//api/PartnerLocations?partnerid=395
//http://skillnetpartnerpositionsapi.azurewebsites.net//api/PartnerPositions?partnerid=395
//https://skillnetusersapi.azurewebsites.net/api/users

const CardWidget = (props) => {
  //title:Card Report//title:
  //x:30//x:
  //y:30//y:
  //width:1000//width:
  //height:700//height:

  const [originalusers, setOriginalUsers] = useState(null)
  const [users, setUsers] = useState(null)
  const [propertywidth] = useState('250px')

  const onChange = (filterdata, value) => {
    console.log(filterdata)

    var filteredPositions = []
    var filteredLocations = []

    if (filterdata.filteredpositions !== null) {
      var filtersJobs = filterdata.filteredpositions.map(position => {
        return position.JobName
      })
      console.log(filtersJobs)
      filteredPositions = filterIt('JobName', filtersJobs, originalusers)
    }
    else {
      filteredPositions = originalusers
    }

    if (filterdata.filteredlocations !== null) {
      var filtersLocations = filterdata.filteredlocations.map(location => {
        return location.LocationName
      })
      filtersLocations = ['Chicago']
      console.log(filtersLocations)
      filteredLocations = filterIt('Location', filtersLocations, filteredPositions)
    }
    else {
      filteredLocations = filteredPositions
    }

    setUsers(filteredLocations)
  };

  const filterIt = (name, filtersSelected, start) => {
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


  useEffect(() => {
    console.log('useEffect')

    axios
    .get('https://skillnetusersapi.azurewebsites.net/api/users', {
      auth: {username: 'skillnet',password: 'demo'}
    })
    .then((response) => {
      console.log('users',response.data)
      setOriginalUsers(response.data)
      setUsers(response.data)
    })
    .catch((error) => {
      console.log(error)
    })

  }, []);

  return (
    <Horizontal>
      {/* column 1 */}
      <Vertical style={{flex:'auto'}}>
        <div style={{background:'white',color:'black',textAlign:'center',fontSize:'20px',padding:'20px'}}>Card Report</div>

        <div style={{display:'flex',flexDirection:'row'}}>
          {/* <CardWidgetProperties propertywidth={propertywidth} onChange={onChange}/> */}
        </div>

      <Splitter/>
      <div style={{flex:'auto',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between',display:'flex',overflow:'auto'}}>
        {users !== null &&
          users.map((user) => {
            return (
              <div key={user.PersonID} style={{display:'flex',flexDirection:'column',margin:'10px 10px 10px 10px',padding:'10px',width:'250px',height:'100px',border:'1px solid lightgray',boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>

                <div style={{display:'flex',flexDirection:'row',alignContent:'flex-end',justifyContent:'space-between'}}>

                  <div className="imgAll imgBig" style={{height:'70px',width:'70px',backgroundImage: `url(${user.Avatar})`}}></div>

                  <div style={{display:'flex',flexDirection:'column',alignContent:'flex-end'}}>
                    <div style={{fontSize:'11px',fontWeight:'bold',marginTop:'1px',textAlign:'right'}}>{user.BFirstName} {user.BLastName}</div>
                    <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>{user.JobName}</div>
                    <div style={{fontSize:'11px',marginTop:'10px',textAlign:'right'}}></div>
                    <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>CNA</div>
                    <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>{user.Location}</div>
                  </div>

                </div>

                <div style={{marginTop:'10px',display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
                  <div style={{fontSize:'11px'}}>{user.Email}</div>
                </div>

                <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
                  <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>Profile</div>
                </div>

              </div>
            )
          })
        }

        </div>
      <Splitter/>
      <div style={{background:'white',color:'black',textAlign:'center',fontSize:'11px',padding:'20px'}}>Report Footer</div>
    </Vertical>
      <Splitter/>
      {/* column 2 */}
      <Vertical style={{width:propertywidth,height:'100%',margin:'10px'}}>
        <div style={{flex:'1',overflow:'hidden'}}>
          <CardWidgetProperties propertywidth={propertywidth} onChange={onChange}/>
        </div>
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
