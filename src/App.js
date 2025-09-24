import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import CaseStudies from "./sections/CaseStudies";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import AllProjects from "./sections/AllProjects";
import AllCaseStudies from "./sections/AllCaseStudies";
import Research from "./sections/Research";
// import Testimonials from "./sections/Testimonials";

import "./styles/globals.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main Portfolio Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <TechStack />
              <AboutMe />
              <Experience />
              <Projects />
              <CaseStudies />
              <Research />
              {/* <Testimonials /> */}
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Dedicated Pages */}
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/casestudies" element={<AllCaseStudies />} />
      </Routes>
    </Router>
  );
}

export default App;
