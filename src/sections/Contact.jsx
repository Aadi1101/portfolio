// Contact.jsx
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gxmm375",    // from EmailJS dashboard
        "template_tbxfvrh",   // from EmailJS dashboard
        form.current,
        "MGylWSZybgAtvppIu"     // from EmailJS dashboard
      )
      .then(
        (result) => {
          alert("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          alert("Oops! Something went wrong ❌");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="contact-title">Get in Touch</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
