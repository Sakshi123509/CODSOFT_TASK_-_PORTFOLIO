// Internship.jsx
import React from "react";
import codsoftLogo from "./assest/codsoft.jpg"; // update path as needed
import deloitteLogo from "./assest/deolite.png";
import "./internship.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Internship = () => {
  const sectionRef = useRef();
  const h2Ref = useRef();

  // Animate heading and cards
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    tl.from(h2Ref.current, {
      opacity: 0,
      y: -30,
      scale: 0.8,
      duration: 0.6,
      ease: "power3.out",
    });

    tl.from(".internship-card", {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.3,
      ease: "power2.out",
    }, "-=0.3"); // overlap animation
  }, []);

  return (
    <section ref={sectionRef} className="internship-section">
      <h2 className="section-heading" ref={h2Ref}>
        Internships
      </h2>

      {/* CodSoft Internship */}
      <div className="internship-card">
        <div className="internship-text">
          <h3>Web Developer Intern @ CodSoft</h3>
          <p className="duration">June 2025 – July 2025</p>
          <ul>
            <li>&#8226; Built responsive UIs using React.js and CSS</li>
            <li>&#8226; Used Git & GitHub for version control</li>
            <li>&#8226; Worked on frontend projects with real clients</li>
          </ul>
        </div>
        <div className="internship-logo">
          <img src={codsoftLogo} alt="CodSoft Logo" />
        </div>
      </div>

      {/* Deloitte Internship */}
      <div className="internship-card reverse">
        <div className="internship-text">
          <h3>Virtual Internship @ Deloitte (Forage)</h3>
          <p className="duration">May 2025</p>
          <ul>
            <li>&#8226; Explored client dashboard use-cases</li>
            <li>&#8226; Practiced problem-solving via real scenarios</li>
            <li>&#8226; Applied design-thinking & proposed solutions</li>
          </ul>
        </div>
        <div className="internship-logo">
          <img src={deloitteLogo} alt="Deloitte Logo" />
        </div>
      </div>
    </section>
  );
};

export default Internship;
