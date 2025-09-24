import React from "react";
import "../styles/Hero.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-container full-width-center">
        {/* Left Section (full width and centered) */}
        <div className="hero-left center-content">
          <h1 className="hero-intro-name">
            Hi, I’m <span className="hero-name">Aaditya Komerwar</span>
          </h1>

          <h2 className="hero-title">Data Scientist</h2>

          <p className="hero-description">
            Building <span className="highlight">intelligent systems</span> with <span className="highlight">Machine Learning</span>,<br/> <span className="highlight">Deep Learning</span>, and <span className="highlight">Generative AI</span>.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Reach Me</a>
            <a href="#projects" className="btn-secondary">View Projects</a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Aadi1101" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/aaditya-komerwar-66aa971b0/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            {/* <a href="https://x.com/AadityaKomerwar" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a> */}
          </div>
        </div>
      </div>

      {/* Wave Separator at the bottom */}
      <div className="wave-separator">
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
          <path
            d="M0,120 C360,0 1080,240 1440,60 L1440,150 L0,150 Z"
            fill="#FFD700"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
