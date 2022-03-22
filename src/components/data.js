
import React from 'react';
import { FaReddit, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
export const links = [
  {
    id: 1,
    // url: '#aboutme', // used with anchor tag where id is needed
    url: 'outer-aboutme',
    text: 'about',
  },
  {
    id: 2,
    url:'inner-skill-container',
    text: 'skills',
  },
  {
    id: 3,
    url: 'outer-project-container',
    text: 'projects',
  },
  {
    id: 4,
    url: 'contact',
    text: 'contact',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com/raj.thappa.3',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/raj-thapa-50083b184/',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.reddit.com/user/Raj_Thapa123',
    icon: <FaReddit />,
  },
];
