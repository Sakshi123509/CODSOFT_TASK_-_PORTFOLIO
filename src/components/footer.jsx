import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer({ toggleTheme, isLightMode }) {
  return (
    <footer className="footer">
      <p className="footer-contact">
        📧 <a href="mailto:kadusakshi945@gmail.com">kadusakshi945@gmail.com</a>
        &nbsp; | &nbsp;
        📱 <a href="tel:+919356934562">+91-9356934562</a>
      </p>

      <div className="social-links">
        <a
          href="https://linkedin.com/in/sakshi-kadu-40a441322"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sakshi123509"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Sakshi Kadu. All rights reserved.
      </p>
    </footer>
  );
}
