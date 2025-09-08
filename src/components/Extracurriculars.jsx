// import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";  
import { FaCode } from "react-icons/fa"; 
import { GiCook } from "react-icons/gi"; 
import "../styles/extracurriculars.css";

const hobbies = [
  {
    icon: <FaCode size={40} />,
    title: "Coding & Programming",
    description: "I'm passionate about solving complex problems and building innovative solutions through code.",
  },
  {
    icon: <FaMusic size={40} />,
    title: "Listening to Music",
    description: "I enjoy relaxing and staying inspired by listening to different genres of music.",

  },
  {
    icon: <GiCook size={40} />,
    title: "Cooking",
    description: "I enjoy experimenting with new recipes and exploring different cuisines through cooking.",
  },
  {
    icon: <FaMapMarkerAlt size={40} />,
    title: "Traveling & Exploring",
    description: "Exploring new places and cultures inspires my creativity and gives me fresh perspectives.",
  },
];

const Extracurriculars = () => {
  return (
    <section id="extracurriculars" className="extracurriculars-section">
      <h2 className="section-title">Extracurriculars & Hobbies</h2>
      <p className="section-subtitle">
        Beyond coding, here's what keeps me inspired and balanced
      </p>
      <div className="hobbies-row">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobby-card">
            <div className="hobby-icon">{hobby.icon}</div>
            <h3 className="hobby-title">{hobby.title}</h3>
            <p className="hobby-description">{hobby.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Extracurriculars;