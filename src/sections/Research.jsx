import React from "react";
import "../styles/Research.css";

function Research() {
  const researchAreas = [
    {
      title: "AI in Security",
      description:
        "Exploring how AI can strengthen cybersecurity through proactive threat detection, anomaly identification, and adaptive defense mechanisms.",
      motivation:
        "This stems from my interest in how AI can safeguard critical infrastructure and enterprises from evolving security risks."
    },
    {
      title: "AI in Enterprise Applications",
      description:
        "Designing scalable AI systems that can power automation, decision support, and efficiency at enterprise level.",
      motivation:
        "I’m fascinated by the challenge of building AI solutions that are not only scalable but also ethical, explainable, and secure."
    },
    {
      title: "Agentic & Generative AI",
      description:
        "Investigating how multi-agent systems and generative AI can collaborate, reason, and adapt in real-world enterprise scenarios.",
      motivation:
        "This aligns with my passion for pushing AI beyond single-task models into dynamic, problem-solving entities."
    },
  ];

  return (
    <section id="research" className="research-section">
      <div className="container">
        <h2 className="research-title">Research Interests</h2>

        <p className="research-intro">
          My research interests are driven by a passion for{" "}
          <span>solving complex problems</span> with AI. I am particularly
          curious about <span>agentic systems</span>,{" "}
          <span>enterprise-level applications</span>, and{" "}
          <span>AI for security</span>, aiming to balance innovation with
          responsibility.
        </p>

        <div className="research-grid">
          {researchAreas.map((area, idx) => (
            <div key={idx} className="research-card">
              <h3 className="research-card-title">{area.title}</h3>
              <p className="research-card-description">{area.description}</p>
              <p className="research-card-motivation">
                <span>Why it matters to me:</span> {area.motivation}
              </p>
            </div>
          ))}
        </div>

        <div className="research-future">
          <h4>Looking Ahead</h4>
          <p>
            I aspire to explore the{" "}
            <span>intersection of AI and enterprise adoption</span>, creating
            systems that are scalable, secure, and{" "}
            <span>aligned with ethical principles</span>. My long-term vision is
            to contribute towards building AI that can{" "}
            <span>transform industries responsibly</span>.
          </p>
        </div>
      </div>
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

export default Research;
