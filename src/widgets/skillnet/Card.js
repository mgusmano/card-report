import React, { useState, useEffect } from 'react'

import Star from '@material-ui/icons/Star';


const Card = (props) => {
  const {user, Partner} = props
  const {PartnerName,ratingsources} = Partner
  const [color, setColor] = useState('gold')
  const [display, setDisplay] = useState('none')
  const [ratinglabel, setRatinglabel] = useState('')

  if (user.Avatar === "https://azureportal.skillnet.net/") {
    user.Avatar = 'a.png'
  }



  // if (PartnerName === 'General Mills') {
  //   user.Rating = user.SelfRating
  // }
  // else {
  //   user.Rating = user.ManagerRating
  // }

  useEffect(() => {

    if (ratingsources === '1000') {
      user.Rating = user.SelfRating
      setRatinglabel('Self Rating')
    }
    else {
      user.Rating = user.ManagerRating
      setRatinglabel('Manager Rating')
    }

    //console.log('useEffect Card')

    // if (user.Avatar === "https://azureportal.skillnet.net/") {
    //   user.Avatar = 'a.png'
    // }

    // if (PartnerName == 'General Mills') {
    //   user.Rating = user.SelfRating
    //   console.log(user.Rating)
    // }
    // else {
    //   user.Rating = user.ManagerRating
    // }

    if (PartnerName === 'CNA') {
      var f = user.sme
      switch (f) {
        case 'Gold':
          setColor('#FFD700')
          setDisplay('block')
          break;
        case 'Silver':
          setColor('#C0C0C0')
          setDisplay('block')
          break;
        case 'Bronze':
          setColor('#cd7f32')
          setDisplay('block')
          break;
        default:
          setColor('white')
          setDisplay('block')
          break;
      }
    }
    //console.log(user.BFirstName.charAt(0))
  }, []);

  let show = false;
  let idshow;
  if (show) {
    idshow = <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>ID: {user.PersonID} - ManagerID: {user.DirectManagerID}</div>
  } else {
    idshow = <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>&nbsp;</div>
  }
//  }, [user.Avatar, user.BFirstName]);
  return (
    <div key={user.PersonID} style={{display:'flex',flexDirection:'column',margin:'10px 10px 10px 10px',padding:'10px',width:'300px',xheight:'150px',border:'1px solid lightgray',boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>

    <div style={{display:'flex',flexDirection:'row',alignContent:'flex-start',justifyContent:'space-between'}}>
    <div style={{display:'flex',alignItems:'flex-start',}}>
      <Star style={{color:color,display:display}}/>
      <div>
        <div className="imgAll imgBig" style={{height:'70px',width:'70px',backgroundImage: `url(${user.Avatar})`}}></div>
        <div style={{width:'100%',fontSize:'11px',marginTop:'1px',textAlign:'left'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Profile</div>
      </div>
    </div>
      <div style={{display:'flex',flexDirection:'column',alignContent:'flex-end'}}>
        <div style={{fontSize:'11px',fontWeight:'bold',marginTop:'1px',textAlign:'right'}}>{user.BFirstName} {user.BLastName}</div>
        <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>&nbsp;{user.JobName}</div>
        <div style={{fontSize:'11px',marginTop:'10px',textAlign:'right'}}></div>
        <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>&nbsp;{PartnerName}</div>
        <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>Location: {user.Location}</div>

        {PartnerName === 'General Mills' &&
        <>
        <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>Segment: {user.Segment}</div>
        <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>Function: {user.Function}</div>
        <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>SubFunction: {user.SubFunction}</div>
        </>
        }



      </div>

    </div>

    <div style={{marginTop:'10px',display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
      <div style={{fontSize:'11px',marginTop:'1px',textAlign:'left'}}></div>
    </div>

    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <div style={{fontSize:'11px'}}>{user.Email}</div>
      {idshow}
      <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>{ratinglabel}: {user.Rating}</div>
    </div>

  </div>

  )
}

export default Card