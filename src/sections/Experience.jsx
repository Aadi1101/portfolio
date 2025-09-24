import React from "react";
import "../styles/Experience.css";
import { FaLaptopCode, FaRobot, FaCloud, FaBrain, FaNetworkWired } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
    role: "Generative AI Engineer",
    // company: "Tata Consultancy Services - Center Of Excellence (COE)",
    duration: "Apr 2024 – Present",
    description: `Developed <span class="highlight">enterprise-wide GenAI solutions</span> and 
      <span class="highlight">agentic AI systems</span>, including 
      <span class="highlight">multi-agent orchestration</span>, 
      <span class="highlight">contextual memory</span>, and optimized 
      <span class="highlight">LLM inference</span> for scalable deployment.`,
    skills: [
      "Python", "Node.js", "JavaScript", "PyTorch", "TensorFlow", 
      "Transformers", "LangChain", "HuggingFace",
      "Multi-agent orchestration", "Contextual Memory", "Semantic Search",
      "Docker", "FastAPI", "Qdrant", "Pinecone", "ChromaDB",
      "AWS SageMaker", "AWS Bedrock", "AWS Lambda", "AWS CloudWatch",
      "Azure OpenAI", "Google Gemini",
      "LoRA", "QLoRA", "GPTQ", "BitsAndBytes", "vLLM"
    ],
    achievements: [
      `Reduced <span class='highlight'>banking assistant</span> query resolution time by 50%`,
      `Enhanced enterprise workflows in HR, finance, and planning by <span class='highlight'>35%</span>`,
      `Improved <span class='highlight'>document retrieval precision</span> by 25% with RAG pipelines`,
      `Reduced <span class='highlight'>token usage</span> by 30% with hybrid ranking & compression techniques`,
      `Cut <span class='highlight'>inference latency</span> by 40% with LoRA, QLoRA, quantization & vLLM`,
      `Built custom GPT reducing <span class='highlight'>training loss by 97.35%</span>`,
      `Achieved <span class='highlight'>92% accuracy</span> with BERT-based sentiment classifier`,
      `Designed <span class='highlight'>Transformer architecture</span> with 95% boost in NLP downstream tasks`,
      `Implemented <span class='highlight'>multi-agent orchestration</span> reducing latency by 25%`,
      `Reduced <span class='highlight'>manual intervention</span> by 40% with contextual memory`
    ],
    icon: <FaRobot />,
  },
  {
    role: "Machine Learning Engineer",
    // company: "Tata Consultancy Services - Center Of Excellence (COE)",
    duration: "Dec 2023 – Mar 2024",
    description: `Led development of modular <span class="highlight">ML pipelines</span>, deployed 
      real-time <span class="highlight">scoring APIs</span>, and engineered 
      <span class="highlight">LLM-based services</span> on <span class="highlight">AWS</span>.`,
    skills: [
      "Python", "SQL", "Scikit-Learn", "XGBoost", "SVM", "CatBoost",
      "Flask", "FastAPI", "Docker", "AWS SageMaker", "Lambda", "EC2", "CloudWatch"
    ],
    achievements: [
      `Built fraud detection model with <span class='highlight'>98% precision</span>`,
      `Deployed disease prediction model with <span class='highlight'>94% accuracy</span>`,
      `Automated <span class='highlight'>ML workflows</span> with GitHub Actions & AWS CDK`,
      `Improved <span class='highlight'>observability</span> with logging & error handling`,
      `Delivered training on <span class='highlight'>model interpretability</span>`
    ],
    icon: <FaBrain />,
  }
];


  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="experience-title">Tata Consultancy Services - Experience</h2>
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-icon">{exp.icon}</div>
              <div className="timeline-content">
                <h3 className="role">{exp.role}</h3>
                <p className="company">{exp.company}</p>
                <p className="duration">{exp.duration}</p>
                <p
                  className="description"
                  dangerouslySetInnerHTML={{ __html: exp.description }}
                ></p>

                {/* Skills / Technologies */}
                <div className="skills-tags">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>

                {/* Achievements / Metrics */}
                <ul className="achievements">
                  {exp.achievements.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </div>
            </div>
          ))}
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

export default Experience;
