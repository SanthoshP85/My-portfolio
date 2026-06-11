import React, { useEffect, useRef } from "react";
import "./Hero.css";

const Hero = ({ scrollToSection }) => {
  const heroRef = useRef(null);

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

    const elements = heroRef.current?.querySelectorAll(".animate");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <p className="greeting animate fade-in">Hello, I'm</p>
          <h1 className="name animate fade-in delay-1">Santhosh P</h1>
          <h2 className="title animate fade-in delay-2">
            Senior Software Engineer
          </h2>
          <p className="location animate fade-in delay-3">
            <i className="fas fa-map-marker-alt"></i> Bengaluru, India
          </p>
          <div className="experience-badge animate scale-in delay-4">
            <span className="badge-icon">
              <i className="fas fa-code"></i>
            </span>
            <span>3+ Years of Experience</span>
          </div>
          <div className="hero-buttons animate fade-in delay-5">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection("contact")}
            >
              <i className="fas fa-paper-plane"></i> Get In Touch
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection("experience")}
            >
              <i className="fas fa-briefcase"></i> View Work
            </button>
          </div>
          <div className="social-links animate fade-in delay-5">
            <a
              href="https://www.linkedin.com/in/santhosh-p-66234419a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/SanthoshP85"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="mailto:spsanthosh85@gmail.com"
              aria-label="Email"
              className="email-link"
              data-tooltip="spsanthosh85@gmail.com"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="hero-visual animate scale-in delay-3">
          <div className="code-window">
            <div className="window-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="code-content">
              <pre>
                <code>
                  {`const developer = {
  name: "Santhosh P",
  role: "Senior Software Engineer",
  skills: [
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "JavaScript",
    "LLM Integration",
    "Prompt Engineering",
    "Agentic AI Workflows"
  ],
  passion: "Building AI-powered
    intelligent applications
    that combine scalable
    engineering with
    intelligent automation."
};`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator animate fade-in delay-5">
        <button onClick={() => scrollToSection("about")}>
          <span>Scroll Down</span>
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
    </section>
  );
};

export default Hero;
