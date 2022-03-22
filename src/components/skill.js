import React,{useContext,useEffect} from 'react';
import "../css/responsive.css";
import { ThemeContext } from '../App.js';
import "../css/theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const myStyle={
  display:'grid',
  gridTemplateColumns:'auto auto',
  width:'auto',
  backgroundColor:'white',
  padding:'0.35rem 1rem',
  borderRadius:'0.25rem',
  marginBottom:'1rem',
  boxShadow: '1px 1px 5px 2px #5fade5'

}
const myDarkStyle={
  display:'grid',
  gridTemplateColumns:'auto auto',
  width:'auto',
  backgroundColor:'#1f1f1f',
  padding:'0.35rem 1rem',
  borderRadius:'0.25rem',
  marginBottom:'1rem',
  boxShadow: '#2f81bc 1px 1px 5px 2px',
  color:'#bfbfbf'
}
export default function Skill({props}) {
  const {darkMode} = useContext(ThemeContext);
  useEffect(()=>{
    AOS.init({easing: 'linear',
  duration: 500,once: true});
  },[]);
  return (
    <div className="skill-container" data-aos='zoom-in-left'>
      <div className={darkMode?"dark-skill-container1 skill-container1":"skill-container1"}>
<div className='imageAndTitle'>

      <div className={darkMode?"dark-skill-image-container skill-image-container":"skill-image-container"}>

    {props.id == 0?"":<img src={props.image} className="image" id="image"/>}
      </div>
    <h2 style={{textTransform : "capitalize"}} className={darkMode?"dark-skillName skillName":"skillName"}>{props.name}</h2>
</div>
    <p className={darkMode?"dark-description description":"description"}>{props.description}</p>
    <p className={darkMode?"dark-description description":"description"}>{props.description1}</p>

<div style={darkMode? myDarkStyle: myStyle}>

    <div style={{textAlign:'left'}}>No. of Projects</div>
    <div style={{textAlign:'right'}}>
      {props.number}
    </div>
</div>
<div style={darkMode? myDarkStyle: myStyle}>
    <div style={{textAlign:'left'}}>Learning (years)</div>
    <div style={{textAlign:'right'}}>{props.years}</div>

</div>
      </div>
    
</div>
  );
};
