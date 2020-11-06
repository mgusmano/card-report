import React from 'react';
import logoImg from "./images/SkillNetBall.jpeg";
import { Logo } from "./components/AuthForms";
import SKILLNETBALL from './images/SkillNetBall.jpeg';

const Top = (props) => {

  return (
    <div style={{display:'flex',alignItems:'center',xjustifyContent:'center',height:'60px',background:'white',color:'rgb(51,124,182)',fontSize:'24px'}}>
      <img src={SKILLNETBALL} style={{marginLeft:'80px',width:'50px'}} alt="SKILLNETBALL" />
      <div style={{marginLeft:'20px'}}></div>
    </div>
  )
}

export default Top