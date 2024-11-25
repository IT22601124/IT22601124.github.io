import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";
import Project from "./components/Projects";
import Skills from "./components/Skills";
import Advertisements from "./components/Advertisements";

function App() {
  return (

    
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Skills/>
      <Advertisements/>
      <Contact />
    </div>
  );
}

export default App;
