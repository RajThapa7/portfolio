import React, { useState, useContext } from "react";
import { IoMdRocket } from "react-icons/io";
import { ThemeContext } from "../App.js";
import "../css/theme.css";
import "../css/index.css";
import '../css/responsive.css';
import {Link} from 'react-scroll'


export default function ScrollToTop() {
  const { darkMode } = useContext(ThemeContext);
  const [visible, setVisible] = useState(false);
  const scrollBtn = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };
  // const top = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };
  window.addEventListener("scroll", scrollBtn);
  return (
    <>
      <Link to="nav-center" spy={true} smooth={true} offset={0} duration={600}  className={darkMode ? "dark-icon icon" : "icon"}
        style={{ display: visible ? "inline" : "none" }}>
      <IoMdRocket  />

      </Link>
      {/* <button
        onClick={top}
        className={darkMode ? "dark-icon icon" : "icon"}
        style={{ display: visible ? "inline" : "none" }}
      >
        <IoMdRocket  />
      </button> */}
    </>
  );
}
