import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Navigate to home first, then scroll
  const handleScroll = (id) => {
    navigate("/"); // go to home
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
    closeMenu();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo clickable */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          &lt;AadityaKomerwar/&gt;
        </Link>

        <ul className={isOpen ? "navbar-links active" : "navbar-links"}>
          <li>
            <a
              href="https://drive.google.com/drive/folders/1qTSnVDX9ncZ1oG8SuxcfINaQwQNQp5IW?usp=sharing"
              download
              className="resume-mobile"
              onClick={closeMenu}
            >
              <span>Download Resume</span>
            </a>
          </li>

          <li>
            <a onClick={() => handleScroll("hero")}>Home</a>
          </li>

          <li>
            <a onClick={() => handleScroll("experience")}>Experience</a>
          </li>

          <li>
            <Link to="/projects" onClick={closeMenu}>
              Projects
            </Link>
          </li>

          <li>
            <Link to="/casestudies" onClick={closeMenu}>
              Case Studies
            </Link>
          </li>

          <li>
            <a onClick={() => handleScroll("skills")}>Skills</a>
          </li>

          <li>
            <a onClick={() => handleScroll("contact")}>Contact</a>
          </li>
        </ul>

        {/* Resume Button */}
        <a href="https://drive.google.com/drive/folders/1qTSnVDX9ncZ1oG8SuxcfINaQwQNQp5IW?usp=sharing" download className="resume-btn">
          <span>Download Resume</span>
        </a>

        {/* Hamburger */}
        <div
          className={isOpen ? "hamburger open" : "hamburger"}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
