import React from 'react'


const Card = (props) => {
  const {user} = props
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
}

export default Card