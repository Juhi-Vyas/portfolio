import { EXPERIENCE } from "../data";

export default function Experience() {
  return (
    <section id="Experience" style={{ paddingBottom: 64 }}>
      <div className="section-label">Professional</div>
      <h2 className="section-title">Work Experience</h2>
      <p className="section-sub">Hands-on industry experience building and shipping MERN applications.</p>

      {EXPERIENCE.map((exp, i) => (
        <ExperienceCard key={i} exp={exp} />
      ))}
    </section>
  );
}

/* ── Sub-component: Experience Card ── */
function ExperienceCard({ exp }) {
  return (
    <div className="exp-card">
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16, flexWrap: "wrap", gap: 10 }}>
        {/* Role + Company */}
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <div style={{ width: 46, height: 46, borderRadius: 10, background: exp.iconBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
            💼
          </div>
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700 }}>{exp.role}</h3>
            <p style={{ fontSize: 14, color: "#3b5bdb", fontWeight: 600 }}>{exp.company}</p>
          </div>
        </div>

        {/* Meta */}
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 12, background: "#f1f3f5", color: "#555", padding: "3px 12px", borderRadius: 12, fontWeight: 600, marginBottom: 4, display: "inline-block" }}>
            {exp.type}
          </div>
          <div style={{ fontSize: 12, color: "#888" }}>{exp.period} · {exp.location}</div>
        </div>
      </div>

      {/* Bullet points */}
      <ul style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
        {exp.points.map((point, j) => (
          <li key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span style={{ color: "#3b5bdb", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>▸</span>
            <span style={{ fontSize: 13.5, color: "#444", lineHeight: 1.6 }}>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
