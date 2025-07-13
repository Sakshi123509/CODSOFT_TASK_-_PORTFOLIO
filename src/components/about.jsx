import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const textRef = useRef();
  const h1ref = useRef();

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

  // Animate letters
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
      stagger: 0.015,
      ease: "power3.out",
    });
    ScrollTrigger.refresh(); // Optional but helpful
  }, []);

  // Helper function to render animated letters
  const renderLetters = (text) =>
    text.split("").map((char, idx) => (
      <div
        key={idx}
        className="letter"
        style={{
          display: "inline-block",
          opacity: 0,
          transform: "translateY(10px)",
        }}
      >
        {char === " " ? "\u00A0" : char}
      </div>
    ));

  return (
    <section id="about" className="about-section" ref={textRef}>
      <h2 ref={h1ref}>About Me</h2>

      <p>
        I'm <strong>{renderLetters("Sakshi Kadu")}</strong>, A{" "}
        {renderLetters("2")}
        <sup>{renderLetters("nd")}</sup>{" "}
        {renderLetters(
          "year Computer Science and Engineering student at YCCE, Nagpur, graduating in 2027. I’m passionate about crafting meaningful digital experiences through clean code and thoughtful design."
        )}
      </p>

      <p>
        {renderLetters(
          "My journey started with simple HTML pages and grew into full-fledged projects using JavaScript, React, Bootstrap, and GSAP. I enjoy bringing ideas to life through responsive and interactive interfaces. I love working with "
        )}
        <span className="highlight">{renderLetters("React")}</span>
      </p>

      <p>
        {renderLetters(
          "I actively explore Data Structures & Algorithms to strengthen my problem-solving skills. For me, code is not just syntax — it’s a tool to think, debug, and innovate."
        )}
      </p>

      <p>
        {renderLetters(
          "I'm constantly learning, improving, and building — not to know everything, but to keep growing every day."
        )}
      </p>

      {/* Terminal-style code block */}
      <div className="code-box">
        <p>&gt; sakshi.kadu@developer ~</p>
        <p> Passion: Web Development 🚀</p>
        <p> Skills: React, JavaScript, CSS, Git</p>
        <p> Learning: GSAP, DSA, Backend Basics</p>
      </div>
    </section>
  );
}
