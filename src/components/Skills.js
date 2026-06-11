import React, { useEffect, useRef } from "react";
import "./Skills.css";

const Skills = () => {
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

  const skillCategories = [
    {
      icon: "fas fa-laptop-code",
      title: "Front-End",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6)",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Component Architecture",
        "State Management",
        "Lazy Loading",
        "Code Splitting",
      ],
    },
    {
      icon: "fas fa-server",
      title: "Back-End",
      skills: [
        "Node.js",
        "Express.js",
        "Java",
        "Spring",
        "REST APIs",
        "Redis",
        "Microservices",
        "WebSockets",
        "BullMQ",
        "Kafka",
      ],
    },
    {
      icon: "fas fa-database",
      title: "Database",
      skills: ["MongoDB", "MySQL"],
    },
    {
      icon: "fas fa-brain",
      title: "AI / GenAI",
      skills: [
        "Prompt Engineering",
        "LLM API Integration",
        "Agentic AI Workflows",
        "AI-driven Automation",
      ],
    },
    {
      icon: "fas fa-tools",
      title: "Tools & DevOps",
      skills: [
        "Git",
        "Docker",
        "CI/CD",
        "NGINX",
        "Postman",
        "JIRA",
        "Agile",
        "VS Code",
      ],
    },
  ];

  return (
    <section id="skills" className="section skills" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title animate fade-in">Skills & Technologies</h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`skill-category animate fade-in delay-${index + 1}`}
            >
              <div className="category-header">
                <i className={category.icon}></i>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
