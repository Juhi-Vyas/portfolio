import { EDUCATION, CERTIFICATIONS } from "../data";

export default function Education() {
  return (
    <section id="Education" style={{ paddingBottom: 64 }}>
      <div className="section-label">Academic Background</div>
      <h2 className="section-title">Education</h2>
      <p className="section-sub">A strong CS foundation supporting practical MERN development skills.</p>

      {/* ── Degree Cards ── */}
      {EDUCATION.map((edu, i) => (
        <DegreeCard key={i} edu={edu} />
      ))}

      {/* ── Certifications ── */}
      <div style={{ marginTop: 36 }}>
        <p style={{ fontSize: 14, fontWeight: 700, color: "#444", marginBottom: 14, letterSpacing: ".02em" }}>
          🏅 Certifications & Courses
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 10 }}>
          {CERTIFICATIONS.map((cert, i) => (
            <CertCard key={i} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Sub-component: Degree Card ── */
function DegreeCard({ edu }) {
  return (
    <div className="edu-card">
      {/* Icon */}
      <div style={{ width: 52, height: 52, borderRadius: 12, background: edu.iconBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>
        {edu.icon}
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 6 }}>
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 2 }}>{edu.degree}</h3>
            <p style={{ fontSize: 14, color: "#3b5bdb", fontWeight: 600 }}>{edu.school}</p>
          </div>
          <div style={{ textAlign: "right", flexShrink: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#555", marginBottom: 4 }}>{edu.year}</div>
            <div style={{ fontSize: 12, background: "#ebfbee", color: "#2f9e44", padding: "2px 10px", borderRadius: 12, fontWeight: 600 }}>
              {edu.grade}
            </div>
          </div>
        </div>
        <p style={{ fontSize: 13.5, color: "#666", lineHeight: 1.6 }}>{edu.desc}</p>
      </div>
    </div>
  );
}

/* ── Sub-component: Certification Card ── */
function CertCard({ cert }) {
  return (
    <div className="cert-item">
      <span style={{ fontSize: 20 }}>{cert.icon}</span>
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.4 }}>{cert.name}</p>
        <p style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{cert.issuer} · {cert.year}</p>
      </div>
    </div>
  );
}
