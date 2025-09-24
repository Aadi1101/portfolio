import React from "react";
import "../styles/TechStack.css";

import { FaPython, FaNodeJs, FaJs, FaCubes, FaDatabase, FaNetworkWired, FaSearchengin, FaCogs, FaCompressArrowsAlt, FaRocket, FaJsSquare } from "react-icons/fa";
import { SiFlask, SiFastapi, SiKeras, SiTensorflow, SiPytorch, SiHuggingface, SiLangchain, SiPostgresql, SiMongodb, SiFirebase, SiDocker, SiGithubactions, SiGooglegemini, SiOpenai, SiAmazonwebservices, SiAmazoncloudwatch, SiJavascript } from "react-icons/si";
import { BsCloud, BsFileCheck } from "react-icons/bs";

function TechStack() {
  const skills = [
    {
      category: "Languages",
      items: [
        { name: "Python", icon: <FaPython /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "JavaScript", icon: <FaJs /> },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "Flask", icon: <SiFlask /> },
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "Keras", icon: <SiKeras /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "PyTorch", icon: <SiPytorch /> },
        { name: "HuggingFace", icon: <SiHuggingface /> },
        { name: "LangChain", icon: <SiLangchain /> },
        { name: "Transformers", icon: <SiHuggingface /> }, // reused
      ],
    },
    {
      category: "Agentic Systems",
      items: [
        { name: "Multi-agent Orchestration", icon: <FaNetworkWired /> },
        { name: "Contextual Memory", icon: <BsFileCheck /> },
        { name: "Semantic Search", icon: <FaSearchengin /> },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ],
    },
    {
      category: "Vector Databases",
      items: [
        { name: "Qdrant", icon: <FaCubes /> },
        { name: "Pinecone", icon: <BsCloud /> },
        { name: "ChromaDB", icon: <FaDatabase /> },
      ],
    },
    {
      category: "CI/CD & DevOps",
      items: [
        { name: "Docker", icon: <SiDocker /> },
        { name: "FastAPI (Deploy)", icon: <SiFastapi /> },
        { name: "GitHub Actions", icon: <SiGithubactions /> },
      ],
    },
    {
      category: "Amazon Web Services (AWS)",
      items: [
        { name: "AWS Sagemaker", icon: <SiAmazonwebservices /> },
        { name: "AWS Bedrock", icon: <SiAmazonwebservices /> },
        { name: "AWS Lambda", icon: <SiAmazonwebservices /> },
        { name: "AWS CloudWatch", icon: <SiAmazonwebservices /> },
      ],
    },
    {
      category: "APIs",
      items: [
        { name: "Azure OpenAI", icon: <SiOpenai /> },
        { name: "Google Gemini", icon: <SiGooglegemini /> },
      ],
    },
    {
      category: "Optimization",
      items: [
        { name: "Fine-tuning (LoRA, QLoRA)", icon: <FaCogs /> },
        { name: "Quantization (GPTQ, BitsAndBytes)", icon: <FaCompressArrowsAlt /> },
        { name: "Inference Acceleration", icon: <FaRocket /> },
      ],
    },
  ];

  return (
    <section id="skills" className="techstack-section">

      <div className="container">
        {skills.map((group, idx) => (
          <div key={idx} className="skill-category">
            <h3 className="category-title">{group.category}</h3>
            <div className="skills-grid">
              {group.items.map((item, index) => (
                <div key={index} className="skill-card">
                  {item.icon && <div className="skill-icon">{item.icon}</div>}
                  <div className="skill-name">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Wave divider at bottom */}
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

export default TechStack;
