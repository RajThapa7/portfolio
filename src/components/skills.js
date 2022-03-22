import React, { useState, useContext, useEffect } from "react";
import Skill from "./skill.js";
import data from "./skills_data.js";
import { ThemeContext } from "../App.js";
import "../css/theme.css";
import "../css/responsive.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Skills() {
  const [index, setIndex] = useState(0);
  const { darkMode } = useContext(ThemeContext);
  const [selectedSkill, setSelectedSkill] = useState("");
  const addClass=()=>{
    document.getElementById('image').classList.add('animation');
    setTimeout(()=>{
      document.getElementById('image').classList.remove('animation');
    },500);
  }
  useEffect(() => {
    AOS.init({ easing: "linear", duration: 500, once: true});
  }, []);
  return (
    <>
      <div
        className={
          darkMode
            ? " outer-skill-container dark-outer-skill-container"
            : "outer-skill-container"
        }
      >
        <div className="semi-outer-skill-container">
          <div className="inner-skill-container">
            <div className="skill-description" data-aos="zoom-in-right">
              <h2 id={darkMode ? "dark-skills skills" : "skills"}>Skills</h2>

              <p
                style={
                  darkMode
                    ? { color: "#bfbfbf", fontWeight: "500" }
                    : { color: "#484747", fontWeight: "500" }
                }
              >
                I am self taught programmer, I have been teaching myself
                different things and most of it was on my own because none of
                the colleges teach you the latest and advanced tech.
                <br />
                <br />
                "Everyone should know how to program a computer, because it
                teaches you how to think!"
              </p>
            </div>
            <div className="skills-logo-container">
              <div
                className={
                  darkMode ? "dark-skills-logo skills-logo" : "skills-logo"
                }
                data-aos="fade-right"
              >
                {data.map((item) => {
                  return (
                    <>
                      { item.id == 0? "":<div
                        key={item.id }
                        onClick={() => {
                          setIndex(item.id);
                          setSelectedSkill(item.name);
                          addClass();
                        }}
                        className={`${
                          darkMode
                            ? "dark-logo-container logo-container"
                            : "logo-container"}  ${selectedSkill === item.name ? "selectedBorder" : ""}
                          `}
                      >
                        <img src={item.image} className="skillsLogo" />
                      </div>}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <Skill props={data[index]} />
        </div>
      </div>
    </>
  );
}
