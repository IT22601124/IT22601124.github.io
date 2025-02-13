import React from "react";
import "./Project.css";

const Project = () => {
  // Array of project data
  const projects = [
    {
      title: "Pos System ",
      year: 2024,
      description: "A app that will allow businesses to streamline their sales, inventory management, and transaction processes, and find spare parts.",
      technologies: ["React", "express", "node","local storage"],
      link: "https://github.com/IT22601124/posSystem"
    },
    {
      title: "Quickfix - Garage Finding App",
      year: 2024,
      description: "A mobile app to locate the nearest garage, request towing assistance, and find spare parts.",
      technologies: ["React Native", "JavaScript", "MongoDB"],
      link: "https://github.com/IT22601124/Quickfix"
    },
    {
      title: "Visionmate - Object Detection App",
      year: 2024,
      description: "An AI-powered app designed for visually impaired students, featuring object detection and voice feedback.",
      technologies: ["React Native", "JavaScript", "MongoDB"],
      link: "https://github.com/IT22601124/Visionmate---object-detection-app-"
    },
    {
      title: "Vendor Management Portal",
      year: 2024,
      description: "A system developed for CEAT Kelani Holdings to manage vendors and streamline operations.",
      technologies: ["HTML", "JavaScript", "CSS", "PHP", "MSSQL"],
      link: "https://github.com/IT22601124/ceat"
    },
    {
      title: "Online Car Rental System",
      year: 2023,
      description: "An online platform for booking rental cars with user-friendly search and reservation features.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
      link: ""
    },
    {
      title: "Task Management System",
      year: 2024,
      description: "A task tracking app designed for individuals and teams.",
      technologies: ["Kotlin", "SQLite"],
      link: "https://github.com/IT22601124/Noteverse-"
    },
    {
      title: "Online Food Delivery System",
      year: 2023,
      description: "An online platform for ordering food from local restaurants.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      link: "https://github.com/IT22601124/FoodOrdering"
    },
    {
      title: "Mobile Game Application",
      year: 2024,
      description: "A fun and interactive mobile game for Android users.",
      technologies: ["Kotlin"],
      link: "https://github.com/IT22601124/Jungle_Rush"
    },
  ];

  return (
    <div id="project" className="project-section">
      <h2>My Projects</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <a href={project.link} className="project-card" key={index} target="_blank" rel="noopener noreferrer">
            <h3>{project.title}</h3>
            <p><strong>Year:</strong> {project.year}</p>
            <p>{project.description}</p>
            <div className="technologies">
              <strong>Technologies:</strong>
              {project.technologies.map((tech, idx) => (
                <span key={idx}>{tech}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
