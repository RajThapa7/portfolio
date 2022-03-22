import React,{useContext, useEffect} from "react";
import Person from "../images/aboutme.png";
import "../css/responsive.css";
import { ThemeContext } from '../App.js';
import "../css/theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Aboutme() {
  const {darkMode} = useContext(ThemeContext);
  useEffect(()=>{
    AOS.init({easing: 'linear',
  duration: 500,once: true});
  },[]);
  return (
    <>
      <div className={darkMode?"outer-aboutme dark-outer-aboutme":'outer-aboutme'}>
        <div className="inner-container">

          <div className="img-container">
            <img src={Person} alt="no image" className="img" data-aos='fade-right' />
          </div>
          <div className={darkMode?"dark-content-aboutme content-aboutme":"content-aboutme"} data-aos='fade-left'>
            <h2 id="aboutme" style={darkMode?{color:'#9da0e2'}:{color:'rgb(39, 45, 130)'}} >About Me</h2>
            I'm a Web Developer from Kathmandu, Nepal. I am currently studying
            bachelor's in Computer Science at Amrit Science College (ASCOL).
            I love Coding, Designing and solving problems.
            <br /><br/>
            My hobbies are playing sports like football, table tennis,
            basketball. I also enjoy watching movies and sports. <br /><br/>
            If i were to describe myself in three words, it would be 'Enthusiastic', 'Easygoing' and 'Reliable'
            <br /><br/>
            <blockquote class="quotes">
              Push harder than yesterday if you want a different tommorow
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
}
