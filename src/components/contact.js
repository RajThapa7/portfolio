import React, { useState, useContext, useEffect } from "react";
import linkedin from "../images/linkedin.png";
import facebook from "../images/facebook.svg";
import github from "../images/github.svg";
import reddit from "../images/reddit.png";
import { FiMail } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import { ThemeContext } from "../App.js";
import "../css/theme.css";
import '../css/responsive.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const darkStyle = {
  border: "1px solid rgb(87, 87, 87)",
  backgroundColor: "#1f1f1f",
  color: '#bfbfbf'
};
const noStyle = {};
export default function Contact() {
  const { darkMode } = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);
  useEffect(()=>{
    AOS.init({easing: 'linear',
  duration: 500,once: true});
  },[]);
  return (
    <>
      <div
        className={
          darkMode
            ? "outer-contact-container dark-outer-contact-container"
            : "outer-contact-container"
        }
      >
        <div className="contact-logo" data-aos="zoom-in-right">
          <p className={darkMode ? "dark-subHeading subHeading" : "subHeading"}>
            Connect with me
          </p>

          <div>
            <FiMail
              className={darkMode ? "dark-mailicon mailicon" : "mailicon"}
            />
            <span
              className={
                darkMode ? "dark-connectText connectText" : "connectText"
              }
            >
              &nbsp;jyangoraj@gmail.com
            </span>
          </div>
          <div style={{ padding: "0.5rem 0rem 1.2rem 0rem" }}>
            <MdLocationPin
              className={darkMode ? "dark-locicon locicon" : "locicon"}
            />
            <span
              className={
                darkMode ? "dark-connectText connectText" : "connectText"
              }
            >
              &nbsp;Chunikhel, Kathmandu, Nepal
            </span>
          </div>

          <a href="https://www.facebook.com/raj.thappa.3" target="_blank">
            <img src={facebook} alt="" className="linkedin" />
          </a>
          <a href="https://github.com/RajThapa7" target="_blank">
            <img src={github} alt="" className="linkedin" />
          </a>
          <a href="https://www.linkedin.com/in/raj-thapa-50083b184/" target="_blank">
            <img src={linkedin} alt="" className="linkedin" />
          </a>
          <a href="https://github.com/RajThapa7"target="_blank" >
            <img src={reddit} alt="" className="linkedin" />
          </a>
        </div>
        <div className="email-contact" id="contact" data-aos="zoom-in-left">
          <p className={darkMode ? "dark-subHeading subHeading" : "subHeading"}>
            Send me a message!
          </p>
          <form
            action="https://formsubmit.co/jyangoraj@gmail.com"
            method="POST"
            onSubmit={() => setIsOpen(true)}
          >
            {/* {isOpen ? <Alert /> : ""} */}
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="First Name"
              style={darkMode ? darkStyle : noStyle}
              required
            />{" "}
            <input
              type="text"
              name="lname"
              id="lname"
              style={darkMode ? darkStyle : noStyle}
              placeholder="Last Name"
            />
            <br />
            <p className="emailChecker">
              *Please enter a correct email address
            </p>
            <input
              type="email"
              name="email"
              id="emailAD"
              placeholder="Email"
              style={darkMode ? darkStyle : noStyle}
              pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
            />
            <br />
            <textarea
              name="message"
              id="message"
              cols="20"
              rows="5"
              style={darkMode ? darkStyle : noStyle}
              placeholder="leave a message"
              required
            />
            <br />
            <button
              className={darkMode ? "dark-btn btn btn-1" : "btn btn-1"}
              type="submit"
            >
              send message
            </button>
            <input type="hidden" name="_next" value="http://localhost:3000" />
            <input type="hidden" name="_captcha" value="false" />
          </form>
        </div>
      </div>
    </>
  );
}
