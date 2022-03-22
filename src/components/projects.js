import React, { useContext, useState, useEffect } from "react";
import Modal from "./modal.js";
import "../css/index.css";
import scholarcat from "../images/scholarcat.png";
import github from "../images/github.png";
import weather from "../images/weatherApp.png";
import pasal from "../images/pasal.png";
import html from "../images/html.png";
import css from "../images/css.png";
import react from "../images/react.png";
import js from "../images/js.jpg";
import wordpress from "../images/wordpress.png";
import "../css/responsive.css";
import { ThemeContext } from "../App.js";
import "../css/theme.css";
import data from "./modalData";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Projects() {
  const { darkMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [item, setItem] = useState(data);
  useEffect(() => {
    AOS.init({ easing: "linear", duration: 500,once: true });
  }, []);
  const pasalClick = () => {
    setIsOpen(true);
    setIndex(0);
  };
  const blogClick = () => {
    setIsOpen(true);
    setIndex(1);
  };
  const weatherClick = () => {
    setIsOpen(true);
    setIndex(2);
  };
  return (
    <>
      {isOpen ? (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} props={item[index]} />
      ) : (
        ""
      )}
      <div
        className={
          darkMode
            ? "outer-project-container dark-outer-project-container"
            : "outer-project-container"
        }
      >
        <h2
          id="projects"
          className={
            darkMode ? "dark-project-title project-title" : "project-title"
          }
          data-aos="zoom-in-down"
        >
          {" "}
          &lt;Projects/&gt;
        </h2>

        <div className="inner-project-container">
          <div className="ecommerce">
            <a href="https://pasal.netlify.app/" target="_blank">
              <p
                className={
                  darkMode
                    ? "dark-project-header project-header"
                    : "project-header"
                }
                data-aos="zoom-in-up"
              >
                Pasal
              </p>
            </a>
            <div className="inner-ecommerce">
              <div
                className={
                  darkMode
                    ? "dark-project-description project-description"
                    : "project-description"
                }
                data-aos="fade-right"
              >
                <div className="project-logo">
                  <img
                    src={react}
                    alt=""
                    className={
                      darkMode
                        ? "dark-project-logo-image project-logo-image"
                        : "project-logo-image"
                    }
                  />
                  <img
                    src={html}
                    className={
                      darkMode
                        ? "dark-project-logo-image project-logo-image"
                        : "project-logo-image"
                    }
                  />
                  <img
                    src={css}
                    alt=""
                    className={
                      darkMode
                        ? "dark-project-logo-image project-logo-image"
                        : "project-logo-image"
                    }
                  />
                  <img
                    src={js}
                    alt=""
                    className={
                      darkMode
                        ? "dark-project-logo-image project-logo-image"
                        : "project-logo-image"
                    }
                  />
                </div>
                <ul>
                  <li>Made using React</li>
                  <li>Easy Order</li>
                  <li>Search products</li>
                  <li>Item cart, Checkout and more</li>
                  <li>Responsive Design</li>
                  <li>Interactive UI</li>
                </ul>
              </div>
              <div className="project-image-container">
                <img
                  src={pasal}
                  className="project-image"
                  onClick={() => pasalClick()}
                  data-aos="fade-left"
                />
              </div>
            </div>
          </div>
          <div className="scholarcat">
            <a href="https://thescholarcat.com/" target="_blank">
              <p
                className={
                  darkMode
                    ? "dark-project-header project-header"
                    : "project-header"
                }
                data-aos="zoom-in-down"
              >
                Blog Site
              </p>
            </a>
            <div className="inner-scholarcat">
              <div className="project-image-container" data-aos="fade-right">
                <img
                  src={scholarcat}
                  className="project-image"
                  onClick={() => blogClick()}
                />
              </div>
              <div
                className={
                  darkMode
                    ? "dark-project-description project-description"
                    : "project-description"
                }
                data-aos="fade-left"
              >
                <div className="project-logo">
                  <img
                    src={html}
                    className={
                      darkMode
                        ? "dark-project-logo-image project-logo-image"
                        : "project-logo-image"
                    }
                  />
                  <img
                    src={css}
                    alt=""
                    className={
                      darkMode
                        ? "dark-project-logo-image project-logo-image"
                        : "project-logo-image"
                    }
                  />
                  <img
                    src={js}
                    alt=""
                    className={
                      darkMode
                        ? "dark-project-logo-image project-logo-image"
                        : "project-logo-image"
                    }
                  />
                  <img
                    src={wordpress}
                    alt=""
                    className={
                      darkMode
                        ? "dark-project-logo-image project-logo-image"
                        : "project-logo-image"
                    }
                  />
                </div>
                <ul>
                  <li>Responsive Design</li>
                  <li>SEO optimized</li>
                  <li>Post blogs, articles</li>
                  <li>Wordpress as CMS</li>
                  <li>Great UI/UX design</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="weather">
            <a href="https://myweather123.netlify.app/" target="_blank">
              <p
                className={
                  darkMode
                    ? "dark-project-header project-header"
                    : "project-header"
                }
                data-aos="zoom-in-up"
              >
                Weather app
              </p>
            </a>
            <div className="inner-weather">
              <div
                className={
                  darkMode
                    ? "dark-project-description project-description"
                    : "project-description"
                }
                data-aos="fade-right"
              >
                <div className="project-logo">
                  <img
                    src={js}
                    alt=""
                    className={
                      darkMode
                        ? "dark-project-logo-image project-logo-image"
                        : "project-logo-image"
                    }
                  />
                  <img
                    src={html}
                    className={
                      darkMode
                        ? "dark-project-logo-image project-logo-image"
                        : "project-logo-image"
                    }
                  />
                  <img
                    src={css}
                    alt=""
                    className={
                      darkMode
                        ? "dark-project-logo-image project-logo-image"
                        : "project-logo-image"
                    }
                  />
                </div>
                <ul>
                  <li>Real time weather update</li>
                  <li>Used Fetch API</li>
                  <li> Shows Sunrise and Sunset time</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div className="project-image-container" data-aos="fade-left">
                <img
                  src={weather}
                  className="project-image"
                  onClick={() => weatherClick()}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="github">
          <p
            className={
              darkMode
                ? "dark-github-description github-description"
                : "github-description"
            }
            data-aos="fade-down"
          >
            Checkout my other projects on
          </p>
          <a href="https://github.com/RajThapa7" target="_blank">
            <div data-aos="fade-up">
              <img src={github} alt="" className="github-image" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
