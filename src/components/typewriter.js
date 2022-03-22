import React,{useState,useContext, useEffect} from 'react';
import Typewriter from 'typewriter-effect';
import { FaDownload } from 'react-icons/fa';
import testPdf from '../Resume_RajThapa.pdf';
import background from '../images/background.png';
import ThemeToggle from "./themeToggle.js";
import linkedin from "../images/linkedin.png";
import facebook from "../images/facebook.svg";
import github from "../images/github.svg";
import reddit from "../images/reddit.png";
import { ThemeContext } from '../App.js';
import { useSpring, animated } from 'react-spring'
import "../css/theme.css";
import '../css/index.css';
import '../css/responsive.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Typewriterr() {
  const {darkMode} = useContext(ThemeContext);
useEffect(()=>{
  AOS.init({easing: 'linear',
duration: 500, once: true});
},[]);
  return(
<>
<div className={darkMode?" outer-typewriter dark-outer-typewriter":"outer-typewriter"}>
  <div className="inner-typewriter">
    <div className="typewriter1" data-aos='fade-right'>

<div>Hi! I'm <br/><span className={darkMode?"dark-name name":"name"}>Raj Thapa</span></div>
    <div className="typewriter">
<div className="the">The</div>
<Typewriter
  onInit={(typewriter) => {
    typewriter
    .changeDelay(300)
    .changeDeleteSpeed('natural')
    .typeString(' Designer')
    .pauseFor(2500)
    .deleteAll()
      .typeString(" Developer")
      .pauseFor(2500)
      .deleteAll()
      .typeString(" Creator")
      .pauseFor(2500)
      .deleteAll()
      .start();
    }}
    options={{
      loop: true,
    }}/>
  </div>
  <p>Welcome to my Website</p>
  <div>
    <a href="https://www.facebook.com/raj.thappa.3" target="_blank">
            <img src={facebook} alt="" className="typewriter-logo" />
          </a>
          <a href="https://github.com/RajThapa7" target="_blank">
            <img src={github} alt="" className="typewriter-logo" />
          </a>
          <a href="https://www.linkedin.com/in/raj-thapa-50083b184/" target="_blank">
            <img src={linkedin} alt="" className="typewriter-logo" />
          </a>
          <a href="https://www.reddit.com/user/Raj_Thapa123" target="_blank">
            <img src={reddit} alt="" className="typewriter-logo" />
          </a>
  </div>
  <button className={darkMode?"dark-btn btn":"btn"}><a href={testPdf} download="Resume_RajThapa.pdf"><FaDownload/>&nbsp;&nbsp;Download CV</a></button>
  </div>
  <div className="typewriter-image-container">
    <img src={background} className="typewriter-image" data-aos='fade-left'/>
  </div>

      </div>
    </div>
</>

  );
}
