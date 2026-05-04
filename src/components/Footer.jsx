import { NAV_LINKS } from "../data";

export default function Footer({ onNavClick }) {
  return (
    <footer style={{ background: "#040608", borderTop: "1px solid var(--border)", padding: "40px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Glow line */}
        <div className="glow-line" style={{ marginBottom: 36 }} />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
          {/* Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#fff", fontFamily: "'Syne', sans-serif" }}>J</div>
            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 800, color: "#f1f5f9" }}>JaiDev<span style={{ color: "#818cf8" }}>.dev</span></div>
              <div style={{ fontSize: 11, color: "#334155" }}>MERN Stack Developer</div>
            </div>
          </div>

          {/* Nav */}
          <div style={{ display: "flex", gap: 24 }}>
            {NAV_LINKS.map(l => (
              <span key={l} style={{ fontSize: 12.5, color: "#334155", cursor: "pointer", transition: "color .15s", fontWeight: 500 }}
                onMouseEnter={e => e.target.style.color = "#818cf8"}
                onMouseLeave={e => e.target.style.color = "#334155"}
                onClick={() => onNavClick(l)}>{l}</span>
            ))}
          </div>

          {/* Copyright */}
          <p style={{ fontSize: 12, color: "#1e293b" }}>© 2026 Jai Dev · Built with React ⚛️</p>
        </div>
      </div>
    </footer>
  );
}