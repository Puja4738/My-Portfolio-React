// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects"; 
import Extracurriculars from "./components/Extracurriculars";
import Contact from "./components/Contact"; // ✅ Correct import
import Footer from "./components/Footer"; // ✅ Correct import

import "./styles/global.css";
import Certifications from "./components/Certifications";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* ✅ Home Section */}
        <Hero />

        {/* ✅ About Section */}
        <About />

        {/* ✅ Education Section */}
        <Education />

        {/* ✅ Skills Section */}
        <Skills />

        {/* ✅ Projects Section */}
        <Projects />

        {/* ✅ Projects Section */}
        <Certifications />

        {/* ✅ Extracurricular Section */}
        <Extracurriculars />

        {/* ✅ Contact Section */}
        <Contact />
      </main>

      {/* ✅ Footer */}
      <Footer />
    </>
  );
}

