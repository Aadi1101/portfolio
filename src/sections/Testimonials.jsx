import React from "react";
import "../styles/Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Meera Nair",
      role: "Professor, Computer Science",
      feedback:
        "Aaditya consistently demonstrates curiosity and rigor in applying AI concepts to real-world problems. His work ethic and ability to bridge theory with practice make him stand out.",
    },
    {
      name: "Rahul Sharma",
      role: "Team Lead, AI Solutions",
      feedback:
        "Aaditya was instrumental in delivering scalable backend systems for our AI-driven products. His problem-solving approach and ownership mindset were invaluable to our success.",
    },
    {
      name: "Sneha Patel",
      role: "Research Collaborator",
      feedback:
        "Working with Aaditya on AI in security research was inspiring. He brings clarity to complex topics and has a knack for making innovative yet practical contributions.",
    },
    {
      name: "Arjun Rao",
      role: "Software Engineer, Teammate",
      feedback:
        "Aaditya is a true team player. He’s quick to support others, shares knowledge openly, and elevates the entire team’s performance with his collaboration skills.",
    },
    {
      name: "Priya Iyer",
      role: "Industry Mentor",
      feedback:
        "Aaditya’s passion for AI and enterprise solutions is remarkable. He combines technical expertise with strategic vision, making him an asset to any forward-thinking organization.",
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="testimonials-scroll">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial-card">
              <p className="testimonial-feedback">“{testimonial.feedback}”</p>
              <h4 className="testimonial-name">{testimonial.name}</h4>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          ))}
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

export default Testimonials;
