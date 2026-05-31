// src/sections/Projects.jsx
import React, { useState } from "react";
import "../styles/projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // ✅ Icons

const projectsData = [
  {
  title: "GigFlow – Freelance Hiring Platform",
  image: "/assets/Gigflow image.jpg",
  tech: [
    "React.js",
    "Redux Toolkit",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT Authentication",
    "Socket.io",
    "REST API",
    "Tailwind CSS"
  ],
  short:
    "Full-stack freelance hiring platform where clients post gigs, freelancers bid in real time, and hiring decisions trigger instant notifications.",
  details: [
    "User authentication with JWT and HttpOnly cookies",
    "Role-based system: client (gig owner) and freelancer",
    "Clients can post gigs with title, description, and budget",
    "Freelancers can browse gigs and submit bids",
    "Only gig owners can view bids on their posted gigs",
    "Atomic hire logic ensures only one freelancer can be hired per gig",
    "Hire and reject actions update gig and bid status securely",
    "Real-time notifications using Socket.io for bids, hire, and rejection",
    "Notification bell with unread count and persistence per user",
    "Session-safe authentication handling on refresh and redeploy",
    "Protected routes using custom auth middleware",
    "Optimistic UI updates for hire/reject actions",
    "Frontend built with React + Redux Toolkit for state management",
    "Backend built with Node.js, Express.js, and MongoDB",
    "Fully responsive UI with clean, production-ready design",
    "Frontend and backend deployed separately on cloud platforms",
  ],
  github: "https://github.com/Puja4738/GigFlow",
  live: "https://puja4738gigflow-platform.netlify.app/"
},
{
  title: "TaskManager - Collaborative Task Management System",
  image: "/assets/Task-Manager.jpg",
  tech: [
    "React.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Socket.io",
    "JWT Authentication",
    "Tailwind CSS",
    "React Query",
    "Zod Validation"
  ],
  short:
    "Full-stack collaborative task management application with real-time updates where users can create, assign, track tasks, receive instant notifications, and manage team workflows efficiently.",
  details: [
    "User registration and login with JWT authentication and HttpOnly cookies",
    "Complete CRUD operations for tasks with role-based access control",
    "Real-time task updates using Socket.io WebSocket connections",
    "Task assignment system with instant in-app notifications",
    "Advanced filtering by status (To Do, In Progress, Review, Completed) and priority (Low, Medium, High, Urgent)",
    "Dynamic sorting by due date and creation date",
    "Personal dashboard with statistics cards showing assigned tasks, created tasks, and overdue tasks",
    "Only task creators can delete tasks (authorization middleware)",
    "Persistent notification system with read/unread status tracking",
    "Backend built with Node.js + Express.js + MongoDB using Service/Repository pattern",
    "Frontend built with React + TypeScript + Vite with 20+ reusable components",
    "Form validation using React Hook Form and Zod schemas on both client and server",
    "Protected routes and API endpoints with custom auth middleware",
    "Fully responsive UI with Tailwind CSS (mobile to 4K screens)",
    "Optimistic UI updates and caching with React Query/TanStack Query",
    "Toast notifications for user feedback and loading skeleton states",
    "Unit tests with Jest achieving 80%+ code coverage",
    "MongoDB database with 3 collections (Users, Tasks, Notifications) and proper indexing",
    "Deployed frontend on Netlify and backend on Render with MongoDB Atlas",
    "Comprehensive API documentation with 15+ RESTful endpoints"
  ],
  github: "https://github.com/Puja4738/Task-Manager",
  live: "https://puja4738-task-manager-app.netlify.app/login"
},
  {
    title: "Weather Web App",
    image: "/assets/weather.png",
    tech: ["React.js", "OpenWeatherMap API", "CSS", "HTML"],
    short:
      "Real-time weather updates with search by city, showing temp, humidity, wind, and dynamic icons.",
    details: [
      "Search weather by city",
      "Displays temperature, humidity, wind speed",
      "Dynamic icons for weather conditions",
      "Responsive UI for all devices",
      "State management with React Hooks",
    ],
    github: "https://github.com/Puja4738/Weather_App_React",
    live: "https://puja4738-weatherapp-react.netlify.app/",
  },
  {
    title: "Portfolio Website",
    image: "/assets/PortfolioBanner.png",
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Vite"],
    short:
      "Personal portfolio showcasing academic details, skills, and projects.",
    details: [
      "Smooth scrolling",
      "Active navigation highlight",
      "Sections: Education, Skills, Projects, Certifications, Extracurriculars, Contact",
      "Social media profile integration",
    ],
    github: "https://github.com/Puja4738/My-Portfolio-React",
    live: "https://puja4738-my-portfolio-react.netlify.app/",
  },
  {
    title: "Quiz-App",
    image: "/assets/QuizApp.png",
    tech: ["React.js", "Vite", "CSS", "React Router", "Framer Motion"],
    short:
      "Interactive Quiz App with multiple pages, smooth navigation, and animated transitions.",
    details: [
      "Pages: Home, Quiz, Results",
      "Navigation bar with routing",
      "Dynamic quiz questions",
      "Result calculation and display",
      "Responsive design with clean UI",
      "Animated transitions using Framer Motion",
    ],
    github: "https://github.com/Puja4738/Quiz-App",
    live: "https://puja4738-quizapp.netlify.app/",
  },
  {
    title: "Responsive Stopwatch Web Application",
    image: "/assets/stopwatch.png",
    tech: ["HTML", "CSS", "JavaScript"],
    short: "A fully responsive stopwatch with lap recording.",
    details: [
      "Start, Pause, Resume, Reset",
      "Lap recording feature",
      "Responsive design for all devices",
    ],
    github: "https://github.com/Puja4738/Stopwatch-Web-App",
    live: "https://puja4738-stopwatch-app.netlify.app/",
  },
  {
    title: "Calculator Web App",
    image: "/assets/calculator.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    short:
      "A mobile-friendly calculator implementing core arithmetic without eval().",
    details: [
      "Addition, Subtraction, Multiplication, Division",
      "Manual logic without built-in math functions",
      "Responsive for all screen sizes",
    ],
    github: "https://github.com/Puja4738/Calculator",
    live: "https://puja4783-calculator-app.netlify.app/",
  },
  {
    title: "Simon Says Game",
    image: "/assets/simon-says.png",
    tech: ["HTML", "CSS", "JavaScript"],
    short:
      "A Simon Says memory game with increasing difficulty and timer challenges.",
    details: [
      "Pattern generation & validation",
      "Difficulty increases with score",
      "Timer-based challenge mode",
      "Responsive gameplay",
    ],
    github: "https://github.com/Puja4738/Simon-Says-Game",
    live: "https://puja4738-simonsay-game.netlify.app/",
  },
  {
    title: "Netflix Homepage Clone",
    image: "/assets/netflix-clone.png",
    tech: ["HTML", "CSS", "JavaScript"],
    short:
      "A clone of Netflix homepage with responsive UI and hover interactions.",
    details: [
      "Grid-based movie sections",
      "Responsive navbar",
      "Hover effects for movie cards",
      "Adaptive design for mobile, tablet, and desktop",
    ],
    github: "https://github.com/Puja4738/Netflix-Clone",
    live: "https://puja4738-netflex-clone.netlify.app/",
  },
  {
    title: "Pizza Shop Web App",
    image: "/assets/Pizza.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    short:
      "A responsive pizza shop website with interactive menu and ordering system.",
    details: [
      "Dynamic pizza menu with customization",
      "Home delivery, dine-in, takeaway",
      "Interactive user-friendly interface",
      "Optimized for all devices",
    ],
    github: "https://github.com/Puja4738/Pizza-Shop-Web-Application",
    live: "https://puja4738-pizza-shop-webapp.netlify.app/",
  },
  {
    title: "Resumelytics Web App",
    image: "/assets/resumelytics.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    short:
      "Group project: A resume analysis tool with frontend login, signup, and upload features.",
    details: [
      "Login & Signup with forgot password",
      "Resume upload for analysis",
      "Frontend-led collaboration project",
      "Responsive UI",
    ],
    github: "https://github.com/Puja4738/Resumelytics",
    live: "https://puja4738-resumelytics.netlify.app/",
  },
];

// Helper for class names
const sanitize = (txt) => txt.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [expanded, setExpanded] = useState(null);

  // ✅ Only 2 projects by default, all projects when "Show More" clicked
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 2);

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-subtitle">
        A showcase of my frontend development and programming projects
      </p>

      <div className="projects-grid">
        {visibleProjects.map((p, idx) => (
          <article className="project-card" key={idx}>
            <img src={p.image} alt={p.title} className="project-image" />

            <div className="card-body">
              {/* ✅ Project Title + Icons */}
              <div className="title-row">
                <h3 className="project-name">{p.title}</h3>
                <div className="link-icons">
                  <a href={p.github} target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                  <a href={p.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              <div className="tag-row">
                {p.tech.map((t, i) => (
                  <span key={i} className={`pill pill-${sanitize(t)}`}>
                    {t}
                  </span>
                ))}
              </div>

              <p className="project-desc">{p.short}</p>

              {expanded === idx && (
                <ul className="project-details">
                  {p.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              )}

              <div className="card-actions">
                <button
                  className="read-more"
                  onClick={() => setExpanded(expanded === idx ? null : idx)}
                >
                  {expanded === idx ? "Show less" : "Continue reading"} →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ✅ Show More / Show Less button immediately after cards */}
      <div className="see-more">
        <button className="see-more-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
}