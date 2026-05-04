import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data";

export default function Navbar({ activeNav, onNavClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      padding: scrolled ? "10px 0" : "18px 0",
      background: scrolled ? "rgba(255,255,255,.92)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1.5px solid #e8e2ff" : "none",
      transition: "all .3s",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <div onClick={() => onNavClick("About")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: "linear-gradient(135deg,#7c3aed,#ec4899)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, boxShadow: "0 4px 16px rgba(124,58,237,.35)" }}>
            J
          </div>
          <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 19, color: "#0f0a2e", letterSpacing: "-.02em" }}>
            Jai<span style={{ background: "linear-gradient(135deg,#7c3aed,#ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Dev</span>
          </span>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 34 }}>
          {NAV_LINKS.map(l => (
            <span key={l} className={`nav-link ${activeNav === l ? "active" : ""}`} onClick={() => onNavClick(l)}>{l}</span>
          ))}
        </div>

        {/* CTA */}
        <button className="btn-primary" style={{ padding: "10px 24px", fontSize: 13.5 }} onClick={() => onNavClick("Contact")}>
          Hire Me ✦
        </button>
      </div>
    </nav>
  );
}