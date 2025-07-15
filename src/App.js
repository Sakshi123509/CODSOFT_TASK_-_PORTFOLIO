import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from './components/about';
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import ThankYou from "./components/Thankyou";
import Internships from "./components/internship";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isLightMode, setIsLightMode] = useState(false); // dark mode default

  // ✅ Toggle Theme Function
  const toggleTheme = () => {
    setIsLightMode(prev => !prev);
  };

  return (
    <div className={isLightMode ? "light-mode" : "dark-mode"}>
      <BrowserRouter basename="/CODSOFT_TASK_-_PORTFOLIO">
        <Navbar toggleTheme={toggleTheme} isLightMode={isLightMode} />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/internship" element={<Internships />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>

      </BrowserRouter>
      <Footer />
    </div>
  );

}
