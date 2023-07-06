import React from 'react';
import { FaGithub, FaDev, FaLinkedin } from 'react-icons/fa';
import './App.css'; // Import the CSS file



function SocialMediaButtons() {
  return (
    <div className="social-media">
      <a
        className="social-media-button github"
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        className="social-media-button dev"
        href="https://dev.to"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDev />
      </a>
      <a
        className="social-media-button linkedin"
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}

export default SocialMediaButtons;
