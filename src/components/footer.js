import React,{useEffect} from 'react';
import rt from '../images/RT.png';
import "../css/responsive.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
export default function Footer() {
  useEffect(()=>{
    AOS.init({easing: 'linear',
  duration: 500,once: true});
  },[]);
  return (
  <>
  <div className="footer">
<div className="inner-footer">
<div class="txt1">Copyright &#169; 2021 | Raj Thapa<br/>  Chunikhel, Kathmandu, Nepal
</div>
<div class="txt2" >Made by<br/>
        <img src={rt} alt="" className="footerImage"/>
        </div> 
</div>
  </div>
  </>
    );
}
