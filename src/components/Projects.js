import React, { useEffect, useRef } from "react";
import "./Projects.css";

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = sectionRef.current?.querySelectorAll(".animate");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "ActiveAura",
      subtitle: "AI-Powered Fitness Tracking Platform",
      description: [
        "Developed a full-stack fitness application using React.js, Node.js, and MongoDB, enabling users to track fitness goals, weight progress, calorie intake, through personalized dashboards and insights.",
        "Built an AI-powered Fitness Assistant using Retrieval-Augmented Generation (RAG), integrating LLM APIs and vector search to provide context-aware answers on fitness, nutrition, and health-related queries.",
        "Designed scalable REST APIs, data models, and recommendation workflows to support goal management, progress tracking, and personalized fitness guidance.",
      ],
      techStack: [
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "LangChain",
        "Vector Database",
        "LLM APIs",
        "RAG",
        "REST APIs",
        "Hugging Face",
        "Pinecone",
        "JWT",
      ],
      liveLink: "https://active-aura-c11w-seven.vercel.app",
      icon: "fas fa-dumbbell",
      gradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
    },
  ];

  return (
    <section id="projects" className="section projects" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title animate fade-in">Personal Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card animate fade-in delay-${index + 1}`}
            >
              <div className="project-header">
                <div
                  className="project-icon"
                  style={{ background: project.gradient }}
                >
                  <i className={project.icon}></i>
                </div>
                <div className="project-title-wrapper">
                  <div className="title-row">
                    <h3>{project.title}</h3>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live"
                    >
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                  </div>
                  <span className="project-subtitle">{project.subtitle}</span>
                </div>
              </div>

              <div className="project-body">
                <ul className="project-features">
                  {project.description.map((point, pIndex) => (
                    <li key={pIndex}>{point}</li>
                  ))}
                </ul>

                <div className="tech-stack">
                  <h4>
                    <i className="fas fa-code"></i> Tech Stack
                  </h4>
                  <div className="tech-tags">
                    {project.techStack.map((tech, tIndex) => (
                      <span key={tIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
