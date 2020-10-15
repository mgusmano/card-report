import React, { useState, useEffect, useRef, useCallback } from 'react'

import Star from '@material-ui/icons/Star';


const Card = (props) => {
  const {user, PartnerName} = props
  const [color, setColor] = useState('gold')
  const [display, setDisplay] = useState('none')

  useEffect(() => {
    //console.log('useEffect Card')

    if (user.Avatar == "https://azureportal.skillnet.net/") {
      user.Avatar = 'a.png'
    }

    var f = user.BFirstName.charAt(0)
    switch (f) {
      case 'B':
        setColor('#C0C0C0')
        setDisplay('block')
        break;
      case 'A':
        setColor('#FFD700')
        setDisplay('block')
        break;
      case 'C':
        setColor('#cd7f32')
        setDisplay('block')
        break;
      default:
        setColor('white')
        setDisplay('block')
        break;
    }

    //console.log(user.BFirstName.charAt(0))



  }, []);


  return (
    <div key={user.PersonID} style={{display:'flex',flexDirection:'column',margin:'10px 10px 10px 10px',padding:'10px',width:'250px',height:'100px',border:'1px solid lightgray',boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>

    <div style={{display:'flex',flexDirection:'row',alignContent:'flex-start',justifyContent:'space-between'}}>
    <div style={{display:'flex',alignItems:'flex-start',}}>
    <Star style={{color:color,display:display}}/>
      <div className="imgAll imgBig" style={{height:'70px',width:'70px',backgroundImage: `url(${user.Avatar})`}}></div>
      </div>
      <div style={{display:'flex',flexDirection:'column',alignContent:'flex-end'}}>
        <div style={{fontSize:'11px',fontWeight:'bold',marginTop:'1px',textAlign:'right'}}>{user.BFirstName} {user.BLastName}</div>
        <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>{user.JobName}</div>
        <div style={{fontSize:'11px',marginTop:'10px',textAlign:'right'}}></div>
        <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>{PartnerName}</div>
        <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>{user.Location}</div>

      </div>

    </div>

    <div style={{marginTop:'10px',display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
      <div style={{fontSize:'11px'}}>{user.Email}</div>
    </div>

    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
    <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>ID: {user.PersonID} - ManagerID: {user.DirectManagerID}</div>
  <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>Profile ({user.ManagerRating})</div>
    </div>

  </div>

  )
}

export default Card