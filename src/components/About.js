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
    <div className={`section ${isVisible ? "fade-in" : ""}`}>
      <section id="about">
        <div className="Abody">
          <h2>About Me</h2>
          <p>
            Hello, I am <strong>Tharindu Herath</strong>, a passionate and dedicated software
            engineering intern specializing in React Native, MERN stack, and
            cutting-edge technologies. I am currently pursuing a{" "}
            <strong>BSc (Hons) in Information Technology</strong> specializing
            in Software Engineering at the Sri Lanka Institute of Information
            Technology (SLIIT), expected to graduate in 2025.
          </p>
          <p>
            I am skilled in programming languages like C, Java, Python, and
            Kotlin, with expertise in databases such as MySQL, MongoDB, and
            Oracle. My technical toolkit also includes React Native, Bootstrap,
            and Git version control.
          </p>
          <p>
            My journey is driven by a proactive and collaborative mindset,
            analytical thinking, and adaptability. I aim to contribute to
            impactful projects and constantly evolve as a professional.
          </p>
          <p>
            Feel free to explore my projects like the <strong>Visionmate</strong> object detection
            app or the <strong>Quickfix</strong> garage-finding app, reflecting my passion for
            innovation and problem-solving.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
