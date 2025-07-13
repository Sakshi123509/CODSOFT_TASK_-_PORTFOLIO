import React from "react";
import "./SocialBar.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SocialBar = ({ toggleTheme }) => {
  return (
    <div className="social-bar">
      <a
        href="https://www.linkedin.com/in/sakshi-kadu-40a441322/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin /> <p> &nbsp; Linkedin</p>
      </a>
      <a
        href="https://github.com/sakshi123509"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub /> <p> &nbsp; Github</p>
      </a>
    </div>
  );
};

export default SocialBar;
