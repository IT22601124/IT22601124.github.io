import React, { useEffect, useState } from "react";
import "./Home.css";
import profileImage from "../assets/5.png";
import { FaFacebook, FaTwitter, FaLinkedin, FaBehance, FaInstagram } from "react-icons/fa";


const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true); // Trigger animation after a slight delay
    }, 100);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <section id="home">
      <main className="main-content">
        <section className={`intro ${animate ? "animate" : ""}`}>
          <h1>Hello,</h1>
          <p className="intro-desc">
            Hi, I'm Tharindu Herath, <br />
            <span className="highlight">currently living in Malambe</span>
            <br />
            Welcome to my portfolio!
          </p>
          <a href="../../public/Tharindu_Herath_SEIntern.pdf" className="download-btn" download>
            Download CV
          </a>
        </section>

        <aside className={`profile-section ${animate ? "animate" : ""}`}>
          <img src={profileImage} alt="Tharindu Herath" className="profile-image" />
          <div className="experience">

            <span> 23  </span>
          </div>
        </aside>

        <footer className={`social-links ${animate ? "animate" : ""}`}>
          <a href="https://www.facebook.com/tharidu.max.946?mibextid=ZbWKwL" target="_blank" rel="noreferrer">
            <FaFacebook size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter size={30} />
          </a>
          <a href="https://www.linkedin.com/in/tharindu-herath-b648271bb/" target="_blank" rel="noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/tharindu_herath_/profilecard/?igsh=MXB2amhpMDFzd254Yw==" target="_blank" rel="noreferrer">
            <FaInstagram size={30} />
          </a>
        </footer>
      </main>
      <br/>

      {/* New Section Below Home Page */}
      <section className="additional-info">
        <div className="cta">
          <h2>Interested in working together?</h2>
          <p>Let's connect and bring your ideas to life. Feel free to get in touch with me!</p>
          <a href="/contact" className="contact-btn">Contact Me</a>
        </div>
        
        <div className="project-preview">
          <h2>Featured Projects</h2>
          <div className="projects">
            <div className="project-card">
            <h3>Introducing My New POS System App</h3>
          <p>
            I'm currently developing a **Point of Sale (POS) system** app that will allow businesses to streamline their sales,
            inventory management, and transaction processes. It's built with **React** for a smooth, interactive experience.
          </p>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p></p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
