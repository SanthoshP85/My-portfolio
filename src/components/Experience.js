import React, { useEffect, useRef } from "react";
import "./Experience.css";

const Experience = () => {
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

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "ProdocAI",
      duration: "December 2025 - Present",
      projects: [
        {
          name: "Lead Management Module",
          icon: "fas fa-project-diagram",
          points: [
            "Revamped end-to-end Lead Management module using Node.js and MongoDB, handling 3K–5K leads per month from WhatsApp, Web Bot, IVR, and Meta campaigns",
            "Reduced manual intervention by 30% and improved lead assignment turnaround from minutes to seconds",
            "Integrated Meta Lead Generation APIs with webhook-based real-time processing",
          ],
        },
        {
          name: "Call Intelligence & Sentiment Analysis",
          icon: "fas fa-brain",
          points: [
            "Developed AI-assisted workflow for call transcripts generating sentiment scores and conversation summaries",
            "Built configurable script adherence scoring (0–100%) improving compliance by ~25–30%",
          ],
        },
        {
          name: "Patient & Lead Distribution",
          icon: "fas fa-users",
          points: [
            "Designed scalable distribution system with rule-based routing, queue-based processing, and Redis-backed state management",
            "Implemented AI-driven summarization and intent classification for automated lead updates",
          ],
        },
        {
          name: "Promotions & Campaign Analytics",
          icon: "fas fa-chart-line",
          points: [
            "Developed AI-assisted real-time patient engagement analytics workflows",
            "Built patient journey and campaign intelligence pipelines for improved campaign effectiveness",
          ],
        },
      ],
    },
    {
      title: "Software Engineer",
      company: "OneBill Software India",
      duration: "February 2023 - November 2025",
      projects: [
        {
          name: "Legacy Application Revamp",
          icon: "fab fa-react",
          points: [
            "Migrated large-scale legacy GWT application to React.js, reducing initial load time by 20%",
            "Delivered production-ready UI with 50K+ LOC supporting 1,000+ test scenarios",
            "Implemented lazy loading, code-splitting, and component-based architecture",
          ],
        },
        {
          name: "WebStore (Online Subscription Platform)",
          icon: "fas fa-shopping-cart",
          points: [
            "Built Next.js UI components with high performance and stability",
            "Implemented Node.js API proxy integrating 15+ REST services with JWT + Redis authentication",
          ],
        },
        {
          name: "Task Management Module (CRM)",
          icon: "fas fa-tasks",
          points: [
            "Built CRM Task Management module with role-based access and real-time updates",
            "Seamless integration into existing workflows with full task lifecycle management",
          ],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="section experience" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title animate fade-in">Work Experience</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item animate slide-${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-marker">
                <i className="fas fa-briefcase"></i>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="company">{exp.company}</span>
                  <span className="duration">
                    <i className="far fa-calendar-alt"></i> {exp.duration}
                  </span>
                </div>
                <div className="timeline-body">
                  {exp.projects.map((project, pIndex) => (
                    <div key={pIndex} className="project">
                      <h4>
                        <i className={project.icon}></i> {project.name}
                      </h4>
                      <ul>
                        {project.points.map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
