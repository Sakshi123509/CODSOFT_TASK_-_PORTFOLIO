import "./project.css";
import bmiImg from "./assest/bmi.jpg";
import Tic_Tac_toe from "./assest/tic-tac-toe_39453.png";
import calcImg from "./assest/Calculator_30001.png";
import guessImg from "./assest/guess.webp";
import landingImg from "./assest/menu.avif";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "BMI Generator",
    img: bmiImg,
    description:
      "Simple BMI calculator built using HTML, CSS, and JavaScript. It helps users find their BMI quickly.",
    github: "https://github.com/Sakshi123509/BMI-Generator?tab=readme-ov-file",
    live: "https://sakshi123509.github.io/BMI-Generator/",
  },
  {
    title: "Basic Calculator",
    img: calcImg,
    description:
      "Fully functional calculator to perform basic arithmetic operations. Built with JS logic and clean UI.",
    github:
      "https://github.com/Sakshi123509/-CODESOFT_TASK_2?tab=readme-ov-file",
    live: "https://sakshi123509.github.io/-CODESOFT_TASK_2/",
  },
  {
    title: "Landing Page",
    img: landingImg,
    description:
      "Creative and animated landing page design — built using HTML, CSS, and basic animation concepts.",
    github:
      "https://github.com/Sakshi123509/CODSOFT_Internship_TASK_1?tab=readme-ov-file",
    live: "https://sakshi123509.github.io/CODSOFT_Internship_TASK_1/",
  },

  {
    title: "Guess The Number",
    img: guessImg,
    description:
      "Fun number guessing game with JavaScript logic, DOM handling and alert-based feedback.",
    github:
      "https://github.com/Sakshi123509/A-Game-Guess-the-Number?tab=readme-ov-file",
    live: "https://sakshi123509.github.io/A-Game-Guess-the-Number/",
  },
  // {
  //   title: "Amazon UI Clone",
  //   img: amazonImg,
  //   description:
  //     "Amazon homepage clone using HTML/CSS. Focused on layout, responsiveness, and component structure.",
  //   github: "https://github.com/yourusername/amazon-ui-clone",
  //   live: "https://yourusername.github.io/amazon-ui-clone",
  // },
  {
    title: "Tic Tac Toe",
    img: Tic_Tac_toe,
    description:
      "Creative and animated landing page design — built using HTML, CSS, and basic animation concepts.",
    github: "https://github.com/Sakshi123509/TIC_TAC_TOE-Game",
    live: "https://sakshi123509.github.io/TIC_TAC_TOE-Game/",
  },
];

export default function Projects() {
  const sectionRef = useRef();

  useGSAP(() => {
    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power2.out",
    });
    ScrollTrigger.refresh(); // Optional but helpful
  }, []);
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
  return (
    <section ref={sectionRef} className="projects-section" id="projects">
      <h2 ref={h1ref}>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                Live Preview
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
