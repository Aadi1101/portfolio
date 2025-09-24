// template.js
// Run this file with: node template.js
// It will create your portfolio folder structure with React components, sections, and styles.

const fs = require("fs");
const path = require("path");

// Root project folders
const root = "src";
const folders = [
  "components",
  "sections",
  "styles",
  "assets",
  "assets/projects",
  "assets/testimonials",
];

// Components
const components = [
  "Navbar",
  "Footer",
  "SectionTitle",
  "Button",
];

// Sections
const sections = [
  "Hero",
  "About",
  "Skills",
  "Experience",
  "Education",
  "Projects",
  "CaseStudies",
  "Achievements",
  "Testimonials",
  "Blog",
  "Contact",
];

// CSS Files (one for each component/section + globals)
const cssFiles = [
  "globals",
  ...components,
  ...sections,
];

// Utility: Create a file if it doesn’t exist
function createFile(filePath, content = "") {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Created: ${filePath}`);
  }
}

// Utility: Create a folder if it doesn’t exist
function createFolder(folderPath) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`📂 Created folder: ${folderPath}`);
  }
}

// Create folder structure
folders.forEach((f) => createFolder(path.join(root, f)));

// Create components
components.forEach((name) => {
  const jsxContent = `import React from "react";
import "../styles/${name}.css";

function ${name}() {
  return (
    <div className="${name.toLowerCase()}">
      <h2>${name} Component</h2>
    </div>
  );
}

export default ${name};
`;
  createFile(path.join(root, "components", `${name}.jsx`), jsxContent);
});

// Create sections
sections.forEach((name) => {
  const jsxContent = `import React from "react";
import "../styles/${name}.css";

function ${name}() {
  return (
    <section className="${name.toLowerCase()}">
      <h2>${name} Section</h2>
    </section>
  );
}

export default ${name};
`;
  createFile(path.join(root, "sections", `${name}.jsx`), jsxContent);
});

// Create CSS files
cssFiles.forEach((name) => {
  const cssContent = name === "globals"
    ? `/* Global styles */
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100..900&display=swap');

:root {
  --bg-color: #0a0f2c;
  --primary-color: #FFD700;
  --text-color: #ffffff;
  --font-main: 'Poppins', sans-serif;
  --font-alt: 'Outfit', sans-serif;
  --font-heading: 'DM Serif Text', serif;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: var(--font-main);
}
`
    : `/* Styles for ${name} */\n.${name.toLowerCase()} {\n  padding: 4rem;\n}`;
  createFile(path.join(root, "styles", `${name}.css`), cssContent);
});

// Create App.jsx
const appContent = `import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import CaseStudies from "./sections/CaseStudies";
import Achievements from "./sections/Achievements";
import Testimonials from "./sections/Testimonials";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

import "./styles/globals.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <CaseStudies />
      <Achievements />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
`;
createFile(path.join(root, "App.jsx"), appContent);

console.log("\n🎉 Template generation complete!");
