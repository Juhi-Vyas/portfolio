import { useState } from "react";
import { FEATURED_PROJECTS, TAG_COLORS } from "../data";

const PAGE_SIZE = 4;

export default function FeaturedProjects() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(FEATURED_PROJECTS.length / PAGE_SIZE);
  const visible = FEATURED_PROJECTS.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section id="Projects" style={{ paddingBottom: 60 }}>
      {/* ── Header ── */}
      <div className="section-label">Work</div>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
        <div>
          <h2 className="section-title" style={{ marginBottom: 4 }}>Featured Projects</h2>
          <p style={{ fontSize: 15, color: "#666" }}>Real-world MERN apps — built, deployed and production-tested.</p>
        </div>

        {/* Prev / Next */}
        <div style={{ display: "flex", gap: 6 }}>
          <NavButton disabled={page === 0} onClick={() => setPage(p => Math.max(0, p - 1))}>‹</NavButton>
          <NavButton disabled={page === totalPages - 1} onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}>›</NavButton>
        </div>
      </div>

      {/* ── Card Grid ── */}
      <div className="featured-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 18 }}>
        {visible.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* ── Page Dots ── */}
      <div style={{ display: "flex", justifyContent: "center", gap: 6 }}>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            style={{ width: 8, height: 8, borderRadius: "50%", border: "none", cursor: "pointer", transition: "background .2s", background: i === page ? "#1a1a1a" : "#ddd" }}
          />
        ))}
      </div>
    </section>
  );
}

/* ── Sub-component: Featured Project Card ── */
function ProjectCard({ project }) {
  const colors = TAG_COLORS[project.tag] || { bg: "#f0f0f0", text: "#555" };

  return (
    <div className={`featured-card ${project.highlight ? "highlighted" : ""}`}>
      {project.highlight && (
        <div style={{ background: "#3b5bdb", color: "#fff", fontSize: 10.5, fontWeight: 700, textAlign: "center", padding: "4px 0", letterSpacing: ".06em", textTransform: "uppercase" }}>
          ⭐ Featured
        </div>
      )}

      {/* Thumbnail */}
      <div style={{ height: 110, background: project.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 38 }}>
        {project.emoji}
      </div>

      {/* Body */}
      <div style={{ padding: "16px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <span className="tag-pill" style={{ background: colors.bg, color: colors.text }}>{project.tag}</span>
          <span style={{ fontSize: 11, color: "#bbb" }}>{project.date}</span>
        </div>

        <h3 style={{ fontSize: 13.5, fontWeight: 700, lineHeight: 1.45, marginBottom: 8, color: "#1a1a1a" }}>{project.title}</h3>
        <p style={{ fontSize: 12, color: "#666", lineHeight: 1.55, marginBottom: 10 }}>{project.desc}</p>

        {/* Tech chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 4 }}>
          {project.tech.slice(0, 3).map(t => (
            <span key={t} className="tech-chip">{t}</span>
          ))}
          {project.tech.length > 3 && (
            <span className="tech-chip">+{project.tech.length - 3}</span>
          )}
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 12, marginTop: "auto", paddingTop: 10 }}>
          <a href={project.live} style={{ fontSize: 12.5, fontWeight: 600, color: "#3b5bdb", cursor: "pointer", textDecoration: "none" }}>🔗 Live</a>
          <a href={project.github} style={{ fontSize: 12.5, fontWeight: 600, color: "#495057", cursor: "pointer", textDecoration: "none" }}>🐙 GitHub</a>
        </div>
      </div>
    </div>
  );
}

/* ── Sub-component: Carousel Nav Button ── */
function NavButton({ onClick, disabled, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ width: 34, height: 34, borderRadius: "50%", border: "1px solid #ddd", background: disabled ? "#f5f5f5" : "#fff", cursor: disabled ? "default" : "pointer", color: disabled ? "#ccc" : "#444", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {children}
    </button>
  );
}
