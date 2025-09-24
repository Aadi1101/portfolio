import React from "react";
import "../styles/AboutMe.css";

import { FaRobot, FaCode, FaCloud } from "react-icons/fa";

function AboutMe() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          I’m an <span className="highlight">AI/ML engineer</span> passionate about 
          building <span className="highlight">intelligent systems, optimizing 
           model performance</span>, and deploying 
          applications that <span className="highlight">scale</span>. With experience 
          across <span className="highlight">cloud platforms</span>, 
          <span className="highlight"> agentic ai development</span>, and modern 
          <span className="highlight"> machine learning frameworks</span>, I focus 
          on creating <span className="highlight"><br/>real-world impact</span>.
        </p>

        <div className="about-highlights">
          <div className="highlight-card">
            <FaRobot className="highlight-icon" />
            <h3>AI & ML Engineer</h3>
            <p>Designing and fine-tuning models for real-world applications.</p>
          </div>

          <div className="highlight-card">
            <FaCode className="highlight-icon" />
            <h3>Agentic AI Development</h3>
            <p>Building end-to-end applications with seamless user experiences.</p>
          </div>

          <div className="highlight-card">
            <FaCloud className="highlight-icon" />
            <h3>Cloud & Deployment</h3>
            <p>Deploying and monitoring systems on AWS, Azure, and beyond.</p>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
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

export default AboutMe;
