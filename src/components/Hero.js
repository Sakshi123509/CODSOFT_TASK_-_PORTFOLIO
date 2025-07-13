import Pro from "./assest/pro.png";
import "./Hero.css";
import Resume from "./resume.pdf";
import About from "./about";
import Skills from "./skills.jsx";
import Projects from "./projects.jsx";
import Contact from "./Contact.js";
import React from "react";
import gsap from 'gsap';
import { useRef } from "react";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Internship from "./internship.jsx";
gsap.registerPlugin(ScrollTrigger);


export default function Hero({ toggleTheme, isLightMode }) {
  const textRef = useRef();

  useGSAP(() => {
    const letters = gsap.utils.toArray(".letter");

    gsap.to(letters, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
      },
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.02,
      ease: "power3.out",
    });
  }, [textRef]);

  const paragraphText =
    "I'm a passionate Web Developer focused on building responsive and interactive websites. I love turning ideas into real-world web experiences using React, JavaScript, and creative design.";

  const h1ref = useRef(null);
  useGSAP(() => {
    gsap.from(h1ref.current, {
      duration: 0.6,
      opacity: 0,
      scale: 0.5,
      y: -20,
    });
    ScrollTrigger.refresh(); // Optional but helpful
  }, []);

  useGSAP(() => {
    gsap.from(".right img", {
      scrollTrigger: {
        trigger: ".hero-img",
        start: "top 90%",
      },
      duration: 1,
      opacity: 0,
      scale: 0.5,
      rotateY: 180,
      ease: "power3.out",
    }); ScrollTrigger.refresh(); // Optional but helpful
  }, []);

  return (
    <>
      <section id="home" className="hero">
        <div className="left">
          <h1>
            Hello<span>.</span>
          </h1>
          <h4>
            I'm <h3 className="heading" ref={h1ref}>Sakshi Kadu</h3>
          </h4>
          <h3>Web Developer</h3>

          <p ref={textRef}>
            {paragraphText.split("").map((char, idx) => (
              <div
                key={idx}
                className="letter"
                style={{
                  display: "inline-block",
                  opacity: 0,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </div>
            ))}
          </p>

          <div className="buttons">
            <a href="#about">
              <button className="Learn_more">Learn More</button>
            </a>
            <a href={Resume} download>
              <button className="resume">Download Resume</button>
            </a>
          </div>
        </div>
        <div className="right">
          <img src={Pro} alt="profile" />
        </div>
      </section>
      <About />
      <Skills />
      <Internship />
      <Projects />
      <Contact />
    </>
  );
}
