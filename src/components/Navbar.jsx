import React, { useRef } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar({ toggleTheme, isLightMode }) {
  const navRef = useRef();

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="navbar" ref={navRef}>
      <div className="name">
        <h4>Sakshi Kadu</h4>
      </div>

      <div className="hamburger hide" onClick={toggleMenu}>
        {menuOpen ? "❌" : "☰"}
      </div>

      <div className={`navcontent ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={() => setMenuOpen(false)}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/internship" onClick={() => setMenuOpen(false)}>
              Internships
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {isLightMode ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  );
}
