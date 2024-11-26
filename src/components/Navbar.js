import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#skill">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
          <a
            href="https://wa.me/94758656830"
            target="_blank"
            rel="noopener noreferrer"
            className="talk-btn"
          >
            Let’s Talk
          </a>
          <li className="current-time">
            {currentTime.toLocaleTimeString()} - {currentTime.toLocaleDateString()}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
