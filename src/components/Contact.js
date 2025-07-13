import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./contact.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
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
    }); ScrollTrigger.refresh(); // Optional but helpful
  }, []);

  const navigate = useNavigate(); // Hook to redirect

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optional: Save/send data logic here

    // Reset form
    setFormData({ name: "", email: "", message: "" });

    // Redirect to Thank You page
    navigate("/thankyou");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div ref={sectionRef} className="contact-container" id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
