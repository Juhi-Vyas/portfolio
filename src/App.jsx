import { useState } from "react";

import Navbar           from "./components/Navbar";
import Hero             from "./components/Hero";
import SubNav           from "./components/SubNav";
import Skills           from "./components/Skills";
import FeaturedProjects from "./components/FeaturedProjects";
import AllProjects      from "./components/AllProjects";
import Education        from "./components/Education";
import Experience       from "./components/Experience";
import Contact          from "./components/Contact";
import Footer           from "./components/Footer";

export default function App() {
  const [activeNav, setActiveNav] = useState("About");

  /** Scroll to a section by its id and update the active nav indicator */
  const handleNavClick = (sectionId) => {
    setActiveNav(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif", background: "#f8f9fa", minHeight: "100vh", color: "#1a1a1a" }}>

      {/* ── Header ── */}
      <Navbar activeNav={activeNav} onNavClick={handleNavClick} />

      {/* ── Hero / About ── */}
      <Hero onScrollTo={handleNavClick} />

      {/* ── Sub-navigation tabs ── */}
      <SubNav />

      {/* ── Page Body ── */}
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
        <Skills />
        <FeaturedProjects />
        <AllProjects />
        <Education />
        <Experience />
        <Contact />
      </div>

      {/* ── Footer ── */}
      <Footer onNavClick={handleNavClick} />
    </div>
  );
}