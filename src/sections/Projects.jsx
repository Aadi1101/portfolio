import React from "react";
import "../styles/Projects.css";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "IntelliPDF",
      description: "An AI-powered app that lets users query, summarize, and compare PDF documents using Google's Gemini model.",
      tech: ["Python","Streamlit","PyPDF2","LangChain","Google Generative AI","FAISS"],
      github:"https://github.com/Aadi1101/GenAI_Experiments/tree/main/ChatWithPdf"
    },
    {
      title: "Gemini QnA",
      description: "An AI-powered chatbot that answers user questions using Google's Gemini language model.",
      tech: [
        "Python",
        "Streamlit",
        "Google Generative AI",
        "Pillow"],
      github: "https://github.com/Aadi1101/GenAI_Experiments/tree/main/Q%26A"
    },
    {
      title: "BRD Generator AI",
      description: "An AI-powered app that generates detailed business requirement documents, team structure, and project cost estimates using Google's Gemini model.",
      tech: ["Python", "Streamlit", "Google Generative AI", "markdown", "pdfkit"],
      github: "https://github.com/Aadi1101/GenAI_Experiments/tree/main/BusinessRequirement",
      category: "GenAI"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-content">
                <div className="title-and-link">
                  <h3 className="project-title">{project.title}</h3>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>
                <p className="project-description">{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="explore-more-container">
        <a href="/projects" className="explore-more-btn">
          Explore More Projects →
        </a>
      </div>

      {/* Wave Separator */}
      <div className="wave-separator">
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
          <path
            d="M0,80 C360,200 1080,0 1440,100 L1440,150 L0,150 Z"
            fill="#FFD700"
          />
        </svg>
      </div>
    </section>
  );
}

export default Projects;
