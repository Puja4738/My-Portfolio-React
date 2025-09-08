// import React from "react";
import "../styles/education.css";

const educationData = [
  {
    title: "GRADUATION",
    subtitle: "Bachelor of Technology in Computer Science",
    duration: "October 2023-Present",
    institution: "Galgotias University, Greater Noida",
    details: [
      "Year: 7th Semester",
      "Current CGPA: 8.91 / 10",
      "Relevant Courses: DSA, Java, Web Development",
      "Top Skills: HTML, DSA Using Java"
    ],
    position: "left"
  },
  {
    title: "DIPLOMA",
    subtitle: "Diploma in Engineering (CSE)",
    duration: "August 2020-September 2023",
    institution: "Government Polytechnic Barauni Begusarai",
    details: [
      "CGPA: 8.8",
      "Subjects: Web Development, Software Engineering, Python",
      "Top Skills: HTML, CSS"
    ],
    position: "right"
  },
  {
    title: "CLASS 10",
    subtitle: "Secondary Education",
    duration: "April 2019-March2020",
    institution: "St.Joseph Academy, Begusarai",
    details: [
      "Session: 2019-2020",
      "Percentage: 83%",
      "Athlete: High Jump"
    ],
    position: "left"
  }
];

export default function Education() {
  return (
    <section id="education" className="education">{/* Added id here */}
      <h2 className="section-title">EDUCATION</h2>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div key={index} className={`timeline-item ${edu.position}`}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="education-header">
                <h3 className="education-title">{edu.title}</h3>
                <p className="education-duration">{edu.duration}</p>
              </div>
              <div className="education-body">
                <h4 className="education-subtitle">{edu.subtitle}</h4>
                <p className="education-institution">{edu.institution}</p>
                <div className="education-details">
                  {edu.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="detail-item">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}