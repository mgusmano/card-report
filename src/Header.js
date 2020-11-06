import React from 'react';

const Header = (props) => {

  return (
    <div style={{display:'flex',alignItems:'center',xjustifyContent:'center',height:'50px',color:'white',background:'rgb(51,124,182)',fontSize:'24px'}}>
      <i style={{marginLeft:'20px'}} class="fa fa-bars"></i>
      <div style={{marginLeft:'20px'}}>SkillNet IT Pro</div>
    </div>
  )
}

export default Header