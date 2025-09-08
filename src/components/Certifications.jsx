// src/components/Certifications.jsx
import React, { useState } from "react";
import "../styles/certifications.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";

// Certification data
const certificationsData = [
  {
    title: "Java DSA Certification",
    image: "/assets/DSA Certificate.jpg",
    tech: ["Java", "DSA"],
    description:
        "Certification of completion for Alpha (DSA with Java) by Apna College, focused on solving complex algorithmic problems using Java.",
    details:
        "Completed the Alpha course by Apna College, focusing on mastering Data Structures and Algorithms in Java. Covered arrays, linked lists, stacks, queues, trees, graphs, dynamic programming, and problem-solving skills.",
    link: "https://drive.google.com/file/d/1ovs6iBlPs39FlfWt0R-HyBnC7_yWr6jD/view",
  },
  {
    title: "Database Programming with SQL",
    image: "/assets/DatabaseWithSQL.jpg",
    tech: ["SQL", "Database", "Oracle"],
    description:
        "Oracle Academy certification for completing Database Programming with SQL final exam.",
    details:
        "Awarded for satisfactory completion of Oracle Academy's Database Programming with SQL course. Covered SQL queries, relational databases, schema design, and data manipulation.",
    link: "https://drive.google.com/file/d/10iDJtqA-ScpEcy9mfq8F9q16pMHI67So/view",
  },
  {
    title: "NPTEL  Certification",
    image: "/assets/NPTEL Certificate.jpg",
    tech: ["Compiler Design", "Programming Languages", "NPTEL"],
        description:
        "NPTEL Online Certification for successfully completing the Compiler Design course.",
    details:
        "Completed a 12-week course on Compiler Design offered by NPTEL and IIT Kharagpur. Learned lexical analysis, parsing, syntax-directed translation, intermediate code generation, and optimization.",
    link: "https://drive.google.com/file/d/1YEtuwpnYV9CokFUkWlYX6EWyGNSrxVSl/view",
    },
    {
    title: "AWS Virtual Internship During Jan-March 2024",
    image: "/assets/AWS-Virtual-Internship.jpg",
    tech: ["Cloud Computing", "AWS", "Virtual Internship", "AICTE"],
    description:
      "10-week Cloud Virtual Internship supported by AWS Academy and AICTE-EduSkills.",
    details:
      "Successfully completed a 10-week Cloud Virtual Internship (Jan-Mar 2024) organized by AICTE-EduSkills and supported by AWS Academy. The program covered cloud computing fundamentals, AWS services, deployment models, and hands-on labs.",
    link: "https://drive.google.com/file/d/1KyYYLhp7LknW6KV1aw86W0YCG9-Tj8QX/view",
  },
  {
    title: "Paloalto Virtual Internship   During April-June 2024",
    image: "/assets/PaloaltoVrInternship.jpg",
    tech: ["Cybersecurity", "Palo Alto", "Virtual Internship", "AICTE"],
    description:
      "10-week Cybersecurity Virtual Internship supported by Palo Alto Networks and AICTE-EduSkills.",
    details:
      "Completed a 10-week Cybersecurity Virtual Internship (Apr-Jun 2024) supported by Palo Alto Networks and AICTE-EduSkills. Learned about network security, firewalls, intrusion detection, vulnerability management, and hands-on security labs.",
    link: "https://drive.google.com/file/d/1CXVDfr-G5E8mmJK2tzokaRVK7WUFj56s/view",
  },
  {
    title: "Paloalto Virtual Internship   During July-Sept 2024",
    image: "/assets/PaloAlto-Internship.jpg",
    tech: ["Cybersecurity", "Palo Alto", "Virtual Internship", "AICTE"],
    description:
      "10-week Cybersecurity Virtual Internship supported by Palo Alto Networks and AICTE-EduSkills.",
    details:
      "Successfully completed a 10-week Cybersecurity Virtual Internship (Jul-Sep 2024) organized by AICTE-EduSkills and supported by Palo Alto Networks. Learned about advanced network security, threat detection, intrusion prevention, and vulnerability analysis.",
    link: "https://drive.google.com/file/d/1xVpN2xlSmaTkbVZn7Fq0LBLbxS2sp1Ax/view",
    },
];

// Helper function for pill colors
const sanitize = (tech) => tech.toLowerCase().replace(/\s+/g, "-");

function Certifications() {
  const [showMore, setShowMore] = useState(false);
  const [expandedCert, setExpandedCert] = useState(null);

  const visibleCertifications = showMore
    ? certificationsData
    : certificationsData.slice(0, 2);

  const toggleDetails = (index) => {
    setExpandedCert(expandedCert === index ? null : index);
  };

  return (
    <section id="certifications" className="certifications">
      <h2 className="certifications-title">
         Certifications
      </h2>
      <p className="cert-subtitle">
        Professional certifications that validate my expertise and commitment to continuous learning. 
      </p>
      <div className="cert-grid">
        {visibleCertifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <img
              src={cert.image}
              alt={cert.title}
              className="cert-image"
              loading="lazy"
            />
            <div className="cert-content">
              <h3>{cert.title}</h3>
              <div className="cert-tech">
                {cert.tech.map((item, i) => (
                  <span
                    key={i}
                    className={`cert-pill ${sanitize(item)}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="cert-description">{cert.description}</p>
              {expandedCert === index && (
                <p className="cert-details">{cert.details}</p>
              )}
              <div className="cert-links">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-btn"
                >
                  View Certificate <FaExternalLinkAlt size={14} />
                </a>
                <button
                  className="cert-toggle"
                  onClick={() => toggleDetails(index)}
                >
                  {expandedCert === index
                    ? "Show Less"
                    : "Continue Reading"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cert-showmore">
        <button
          className="cert-more-btn"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
}

export default Certifications;
