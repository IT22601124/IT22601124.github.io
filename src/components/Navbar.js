import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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



        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
