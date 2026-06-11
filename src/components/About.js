import React, { useEffect, useRef } from "react";
import "./About.css";

const About = () => {
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

  const highlights = [
    {
      icon: "fas fa-code",
      title: "Full Stack Development",
      description: "End-to-end web application development",
    },
    {
      icon: "fas fa-robot",
      title: "AI Integration",
      description: "Agentic AI workflows & automation",
    },
    {
      icon: "fas fa-database",
      title: "Database Design",
      description: "MongoDB & MySQL optimization",
    },
    {
      icon: "fas fa-server",
      title: "Microservices",
      description: "Scalable backend architecture",
    },
  ];

  return (
    <section id="about" className="section about" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title animate fade-in">About Me</h2>

        <div className="about-content">
          <div className="about-text animate slide-left">
            <p>
              Full Stack Developer with <strong>3+ years of experience</strong>{" "}
              in designing and developing scalable web applications using the{" "}
              <strong>MERN Stack</strong>
              (MongoDB, Express.js, React.js, Node.js).
            </p>
            <p>
              Strong expertise in building <strong>RESTful APIs</strong>,
              backend services, database design (MongoDB, MySQL), and responsive
              front-end applications using React.js and JavaScript (ES6).
            </p>
            <p>
              Worked on <strong>healthcare (Agentic AI)</strong> and{" "}
              <strong>CRM platforms</strong>, delivering secure,
              high-performance, production-ready full-stack solutions in agile
              environments.
            </p>
          </div>

          <div className="about-highlights">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`highlight-card animate scale-in delay-${index + 1}`}
              >
                <div className="highlight-icon">
                  <i className={item.icon}></i>
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
