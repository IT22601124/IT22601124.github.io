import React, { useEffect, useState } from "react";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <div className={`about-section ${isVisible ? "fade-in" : ""}`}>
      <section id="about">
        <div className="about-body">
          <h2 className="about-heading">About Me</h2>
          <div className="about-content">
            <p>
              Hello, I am <strong>Tharindu Herath</strong>, a passionate and dedicated software engineering intern specializing in
              <strong> React Native</strong>, <strong>MERN stack</strong>, and cutting-edge technologies. I am currently pursuing a
              <strong> BSc (Hons) in Information Technology</strong> specializing in Software Engineering at the Sri Lanka Institute
              of Information Technology (SLIIT), expected to graduate in 2025.
            </p>
            <p>
              I am skilled in programming languages like <strong>C</strong>, <strong>Java</strong>, <strong>Python</strong>, and
              <strong> Kotlin</strong>, with expertise in databases such as <strong>MySQL</strong>, <strong>MongoDB</strong>, and
              <strong> Oracle</strong>. My technical toolkit also includes <strong>React Native</strong>, <strong>Bootstrap</strong>, and <strong>Git version control</strong>.
            </p>
            <p>
              My journey is driven by a proactive and collaborative mindset, analytical thinking, and adaptability. I aim to contribute to impactful projects and constantly evolve as a professional.
            </p>
            <p>
              Feel free to explore my projects like the <strong>Visionmate</strong> object detection app or the <strong>Quickfix</strong> garage-finding app, reflecting my passion for innovation and problem-solving.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
