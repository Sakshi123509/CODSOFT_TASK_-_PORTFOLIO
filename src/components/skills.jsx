import React from "react";
import HTML from "./assest/html.png";
import CSS from "./assest/css.png";
import JS from "./assest/js.svg";
import REACT from "./assest/react.svg";
import Bootstrap from "./assest/bootstrap.png";
import GSAP from "./assest/GSAP.png";
import Git from "./assest/Git.png";
import Github from "./assest/github.png";
import VSCode from "./assest/vscode.png";
import "./skills.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// gsap.registerPlugin(ScrollTrigger);

export default function Skills({ toggleTheme, isLightMode }) {
  const skillsRef = useRef();
  const h1ref = useRef(null);
  
  // Animate heading
  useGSAP(() => {
    gsap.from(h1ref.current, {
      scrollTrigger: {
        trigger: h1ref.current,
        start: "top 80%", // or "center bottom"
      },
      duration: 0.6,
      opacity: 0,
      scale: 0.5,
      y: -20,
      ease: "power3.out",
    });
  }, []);

  useGSAP(() => {
    const items = gsap.utils.toArray(".skill-item");

    gsap.from(items, {
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 80%", // when 80% of skills section enters viewport
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });
    ScrollTrigger.refresh(); // Optional but helpful
  }, []);

  return (
    <div>
      <section id="skills" className="skills-section">
        <h2 ref={h1ref}>Skills</h2>

        <div className="skills-category">
          <h3>Frontend</h3>
          <div className="skills-grid">
            <div className="skill-item">
              <img src={HTML} alt="HTML" />
              <p>HTML</p>
            </div>
            <div className="skill-item">
              <img src={CSS} alt="CSS" />
              <p>CSS</p>
            </div>
            <div className="skill-item">
              <img src={JS} alt="JavaScript" />
              <p>JavaScript</p>
            </div>
          </div>
        </div>

        <div className="skills-category">
          <h3>Libraries & Frameworks</h3>
          <div className="skills-grid">
            <div className="skill-item">
              <img src={REACT} alt="React" />
              <p>React</p>
            </div>
            <div className="skill-item">
              <img src={Bootstrap} alt="Bootstrap" />
              <p>Bootstrap</p>
            </div>
            <div className="skill-item">
              <img src={GSAP} alt="GSAP" />
              <p>GSAP</p>
            </div>
          </div>
        </div>
        <div className="skills-category">
          <h3>Development Tools</h3>
          <div className="skills-grid">
            <div className="skill-item">
              <img src={Git} alt="Git" />
              <p>Git</p>
            </div>
            <div className="skill-item">
              <img src={Github} alt="GitHub" />
              <p>GitHub</p>
            </div>
            <div className="skill-item">
              <img src={VSCode} alt="VS Code" />
              <p>VS Code</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
