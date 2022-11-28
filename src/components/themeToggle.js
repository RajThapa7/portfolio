import React, { useContext, useState } from "react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { ThemeContext } from "../App.js";
import "../css/theme.css";

export default function ThemeToggle() {
  const { darkMode } = useContext(ThemeContext);
  const { setDarkMode } = useContext(ThemeContext);
  
  return (
    <>
      <div className="container">
        <BsFillSunFill
          style={{ color: darkMode ? "gray" : "yellow", fontSize: "1.8rem" }}
        />
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox"  onChange={()=>setDarkMode(!darkMode)}/>
            <span className="slider round"></span>
          </label>
        </div>
        <BsFillMoonStarsFill
          style={{ color: darkMode ? "white" : "gray", fontSize: "1.8rem" }}
        />
      </div>
    </>
  );
}

