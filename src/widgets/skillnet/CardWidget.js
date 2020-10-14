import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from "axios";
import './CardWidget.css'
import Card from'./Card'

//http://skillnetpartnerlocationsapi.azurewebsites.net//api/PartnerLocations?partnerid=395
//http://skillnetpartnerpositionsapi.azurewebsites.net//api/PartnerPositions?partnerid=395
//https://skillnetusersapi.azurewebsites.net/api/users

const CardWidget = (props) => {
  //title:Card Widget//title:
  //x:30//x:
  //y:30//y:
  //width:1000//width:
  //height:700//height:

  const cardRef = useRef(null);
  //const [originalusers, setOriginalUsers] = useState(null)
  const [users, setUsers] = useState(null)
  //const [filteredpositions, setFilteredpositions] = useState([])
  //const [filteredlocations, setFilteredlocations] = useState([])
  //var originalusers

  const onChange = (filterdata) => {
    console.log('onChange',filterdata)
    console.log('originalusers',cardRef.current.originalusers)

    //setFilteredpositions(filterdata.filteredpositions)
    //setFilteredlocations(filterdata.filteredlocations)

    var filteredPositions = filterIt('JobName', filterdata.filteredpositions, cardRef.current.originalusers)
    var filteredLocations = filterIt('Location', filterdata.filteredlocations, filteredPositions)
    var filteredManagers = filterIt('DirectManagerID', filterdata.filteredmanagers, filteredLocations)

    setUsers(filteredManagers)

    SendIt('fromcardwidget', {
      filteredusers: filteredManagers,
      filteredpositions: filterdata.filteredpositions,
      filteredskills: filterdata.filteredskills,
      filteredlocations: filterdata.filteredlocations,
      filteredmanagers: filterdata.filteredmanagers,
    })

  };


  const onMessage = useCallback((e) => {
    if (!e.detail) {return}
    var type = e.detail.type
    var payload = e.detail.payload
    switch (type) {
      case 'fromcard':
        onChange(payload.filters)
        break;
      default:
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
      //console.log('users with Test',response.data)

      var Users = response.data.filter(user => {
        if (user.BLastName !== 'Test') {
          return user
        }
        //return location.City
      })
      console.log('users',Users)

      //setOriginalUsers(response.data)
      setUsers(Users)
      card.originalusers = Users
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


  }, [onMessage]);



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

  const SendIt = (type, payload) => {
    window.dispatchEvent(new CustomEvent('mjg',{detail:{type:type,payload:payload}}));
  }



  const filterIt = (name, filtersSelected, start) => {
    if (filtersSelected.length === 0) {
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

  return (
        <div ref={cardRef} style={{display:'flex',flex:props.flex,flexWrap:'wrap',flexDirection:'row',overflow:'auto',alignContent:'flex-start'}} xstyle={{flex:'auto',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between',display:'flex',overflow:'auto'}}>
          {users !== null &&
            users.map((user, index) => {
              return (
                <Card key={index} user={user}/>
              )
            })
          }
        </div>
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
