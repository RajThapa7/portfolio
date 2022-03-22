import React, { useState, useRef, useEffect, useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from '../images/logo.png';
import '../css/index.css';
import ThemeToggle from "./themeToggle.js";
import { ThemeContext } from '../App.js';
import "../css/theme.css";
import '../css/responsive.css';
import {Link} from 'react-scroll'


const Navbar = () => {
  const {darkMode} = useContext(ThemeContext);
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <nav className={darkMode?"dark-navbar":""}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo}  className='logo' alt='logo' />
          <ThemeToggle/>
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className={darkMode?'dark-links links':'links'} ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url} spy={true} smooth={true} offset={-10} duration={600}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className={darkMode?'dark-social-icons social-icons':'social-icons'}>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url} target='_blank'>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;