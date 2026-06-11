import React, { useEffect, useRef } from "react";
import "./Education.css";

const Education = () => {
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

  return (
    <section id="education" className="section education" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title animate fade-in">Education</h2>

        <div className="education-card animate scale-in">
          <div className="education-icon">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <div className="education-details">
            <h3>Bachelor of Engineering (B.E)</h3>
            <p className="specialization">Electronics & Instrumentation</p>
            <div className="education-info">
              <a
                href="https://share.google/6umbZWNDDz7Q9zkJ5"
                target="_blank"
                rel="noopener noreferrer"
                className="institution"
              >
                <i className="fas fa-university"></i>
                Government College of Technology, Coimbatore
                <i className="fas fa-external-link-alt link-icon"></i>
              </a>
              <p className="year">
                <i className="far fa-calendar-alt"></i>
                2019 – 2023
              </p>
            </div>
            <div className="grade">
              <div className="grade-circle">
                <span className="grade-value">82%</span>
                <span className="grade-label">Score</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
