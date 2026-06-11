import React, { useEffect, useRef } from "react";
import "./Contact.css";

const Contact = () => {
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

  const contactCards = [
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "+91 9600854069",
      link: "tel:+919600854069",
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "spsanthosh85@gmail.com",
      link: "mailto:spsanthosh85@gmail.com",
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      value: "linkedin.com/in/santhosh-p-66234419a",
      link: "https://www.linkedin.com/in/santhosh-p-66234419a",
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      value: "github.com/SanthoshP85",
      link: "https://github.com/SanthoshP85",
    },
  ];

  return (
    <section id="contact" className="section contact" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title animate fade-in">Get In Touch</h2>

        <p className="contact-intro animate fade-in delay-1">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div className="contact-cards">
          {contactCards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              target={card.link.startsWith("http") ? "_blank" : undefined}
              rel={
                card.link.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className={`contact-card animate scale-in delay-${index + 2}`}
            >
              <div className="card-icon">
                <i className={card.icon}></i>
              </div>
              <h4>{card.title}</h4>
              <p>{card.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
