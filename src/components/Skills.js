import React from "react";
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaPhp } from "react-icons/fa";
import { SiKotlin, SiMongodb, SiMysql, SiAdobe, SiVisualstudio, SiIntellijidea, SiAndroid } from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  const skills = {
    "Programming Languages": [
      { name: "C", icon: <FaReact /> },
      { name: "C++", icon: <FaJava /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaReact /> },
      { name: "Kotlin", icon: <SiKotlin /> },
    ],
    "Web Development": [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaReact /> },
      { name: "Bootstrap", icon: <FaReact /> },
      { name: "React Native", icon: <FaReact /> },
      { name: "PHP", icon: <FaPhp /> },
    ],
    Databases: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MSSQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Oracle", icon: <SiMongodb /> },
    ],
    "Version Control": [{ name: "Git", icon: <FaGitAlt /> }],
    Tools: [
      { name: "MS Office", icon: <SiAdobe /> },
      { name: "Adobe Photoshop", icon: <SiAdobe /> },
      { name: "Canva", icon: <SiAdobe /> },
      { name: "After Effects", icon: <SiAdobe /> },
      { name: "Illustrator", icon: <SiAdobe /> },
    ],
    IDEs: [
      { name: "Visual Studio", icon: <SiVisualstudio /> },
      { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
      { name: "Android Studio", icon: <SiAndroid /> },
    ],
  };

  return (
    <div className="skills-section" id="skill">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {Object.keys(skills).map((category, index) => (
          <div className="skills-card" key={index}>
            <h3>{category}</h3>
            <div className="skills-list">
              {skills[category].map((skill, skillIndex) => (
                <div className="skill-item" key={skillIndex}>
                  <div className="icon">{skill.icon}</div>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
