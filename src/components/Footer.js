import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="copyright">
            &copy; {currentYear} Santhosh P. All rights reserved.
          </p>
          <p className="made-with">
            Built with <i className="fas fa-heart"></i> and passion for code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
