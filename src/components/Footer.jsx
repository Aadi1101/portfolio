import React from "react";
import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} Aaditya Komerwar. All rights reserved.
        </p>
        
        <div className="footer-links">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aadityakomerwar@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://github.com/Aadi1101" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/aaditya-komerwar-66aa971b0/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
