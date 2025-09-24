import React, { useState } from "react";
import "../styles/AllProjects.css";
import { FaGithub } from "react-icons/fa";

function AllProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "Gemini QnA",
      description: "An AI-powered chatbot that answers user questions using Google's Gemini language model.",
      tech: ["Python", "Streamlit", "Google Generative AI", "Pillow"],
      github: "https://github.com/Aadi1101/GenAI_Experiments/tree/main/Q%26A",
      category: "GenAI"
    },
    {
      title: "IntelliPDF",
      description: "An AI-powered app that lets users query, summarize, and compare PDF documents using Google's Gemini model.",
      tech: ["Python", "Streamlit", "PyPDF2", "LangChain", "Google Generative AI", "FAISS"],
      github: "https://github.com/Aadi1101/GenAI_Experiments/tree/main/ChatWithPdf",
      category: "GenAI"
    },
    {
      title: "Gemini Conversational AI",
      description: "An AI-powered conversational chatbot that interacts with users using Google's Gemini model.",
      tech: ["Python", "Streamlit", "Google Generative AI"],
      github: "https://github.com/Aadi1101/GenAI_Experiments/tree/main/ConversationalBot",
      category: "GenAI"
    },
    {
      title: "CalorieVision",
      description: "An AI-powered app that calculates calories from food images and provides diet insights using Google's Gemini model.",
      tech: ["Python", "Streamlit", "Google Generative AI", "Pillow"],
      github: "https://github.com/Aadi1101/GenAI_Experiments/tree/main/CaloriesCalculatorApp",
      category: "GenAI"
    },
    {
      title: "BRD Generator AI",
      description: "An AI-powered app that generates detailed business requirement documents, team structure, and project cost estimates using Google's Gemini model.",
      tech: ["Python", "Streamlit", "Google Generative AI", "markdown", "pdfkit"],
      github: "https://github.com/Aadi1101/GenAI_Experiments/tree/main/BusinessRequirement",
      category: "GenAI"
    },
    {
      title: "DSA Mentor AI",
      description: "An AI-powered bot that provides detailed explanations, implementations, and practice resources for data structures and algorithms using Google's Gemini model.",
      tech: ["Python", "Streamlit", "Google Generative AI"],
      github: "https://github.com/Aadi1101/GenAI_Experiments/tree/main/DSA-Bot",
      category: "GenAI"
    },
    {
      title: "MelodyGen AI",
      description: "An AI-powered music recommendation system that suggests songs based on user input and mood using Google's Gemini model.",
      tech: ["Python", "Streamlit", "Google Generative AI"],
      github: "https://github.com/Aadi1101/GenAI_Experiments/tree/main/MusicRecommendation",
      category: "GenAI"
    },
    {
      title: "Smart ATS AI",
      description: "An AI-powered resume evaluator that analyzes resumes against job descriptions and suggests improvements using Google's Gemini model.",
      tech: ["Python", "Streamlit", "Google Generative AI", "PyPDF2"],
      github: "https://github.com/Aadi1101/GenAI_Experiments/tree/main/Resume_ATS",
      category: "GenAI"
    },
    {
      title: "LinguaTutor AI",
      description: "An AI-powered language tutor that provides learning roadmaps, resources, and timelines for mastering any language using Google's Gemini model.",
      tech: ["Python", "Streamlit", "Google Generative AI"],
      github: "https://github.com/Aadi1101/GenAI_Experiments/tree/main/LanguageTutor",
      category: "GenAI"
    },
    {
      title: "GenAI Use Case Builder",
      description: "An AI-powered tool that suggests unique Generative AI project use cases with detailed workflows using Google's Gemini model.",
      tech: ["Python", "Streamlit", "Google Generative AI"],
      github: "https://github.com/Aadi1101/GenAI_Experiments/tree/main/UseCaseBuilder",
      category: "GenAI"
    },
    {
      title: "Swagger Mock Data Generator",
      description: "A web app that generates multi-object mock data with conditional logic and custom formatting for testing APIs.",
      tech: ["Python", "Streamlit", "Faker", "Google Generative AI"],
      github: "https://github.com/Aadi1101/GenAI_Experiments/tree/main/SwaggerUI",
      category: "Backend"
    },
    {
      title: "InvoiceVision AI",
      description: "An AI-powered tool that extracts and interprets information from multi-language invoice images using Google's Gemini model.",
      tech: ["Python","Streamlit","Google Generative AI","Pillow","LangChain","PyPDF2","ChromaDB"],
      github: "https://github.com/Aadi1101/GenAI_Experiments/tree/main/MultiLanguageInvoiceExtractor",
      category: "GenAI"
    }
  ];

  const categories = ["All", "ML", "GenAI", "Agentic AI", "Backend"];

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  // Function to check if a category has projects
  const hasProjects = (cat) => {
    if (cat === "All") return projects.length > 0;
    return projects.some((p) => p.category === cat);
  };

  return (
    <section className="all-projects-section">
      <div className="container">
        <h2 className="all-projects-title">All Projects</h2>

        {/* Filter Buttons */}
        <div className="filter-bar">
          {categories.map(
            (cat, idx) =>
              hasProjects(cat) && (
                <button
                  key={idx}
                  className={`filter-btn ${
                    selectedCategory === cat ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              )
          )}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
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
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllProjects;
