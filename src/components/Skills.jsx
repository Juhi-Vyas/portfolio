import { useState } from "react";
import { MERN_STACK, SKILL_CATEGORIES } from "../data";

const PROF = [["MongoDB", 85, "linear-gradient(90deg,#00ed64,#00a344)"], ["Express.js", 88, "linear-gradient(90deg,#64748b,#1e293b)"], ["React", 92, "linear-gradient(90deg,#38bdf8,#0284c7)"], ["Node.js", 87, "linear-gradient(90deg,#84cc16,#3f6212)"]];

export default function Skills() {
  const [tab, setTab] = useState(0);
  return (
    <section id="Skills" className="section section-alt">
      <div className="container">
        <div className="eyebrow">⚡ Tech Stack</div>
        <h2 className="heading">Skills & <span className="grad">Technologies</span></h2>
        <p className="subtext">Specialized in the MERN stack with a strong ecosystem of supporting tools and frameworks.</p>

        {/* MERN Core */}
        <div className="mern-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18, marginBottom: 48 }}>
          {MERN_STACK.map(t => <MernCard key={t.name} tech={t} />)}
        </div>

        {/* Tabbed skills */}
        <div style={{ background: "#fff", border: "1.5px solid #e8e2ff", borderRadius: 20, padding: 28, boxShadow: "0 4px 24px rgba(124,58,237,.07)" }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
            {SKILL_CATEGORIES.map((s, i) => (
              <button key={s.cat} className={`skill-chip ${tab === i ? "active" : ""}`} onClick={() => setTab(i)}>{s.cat}</button>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {SKILL_CATEGORIES[tab].items.map(item => (
              <span key={item} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12.5, fontWeight: 600, padding: "7px 16px", borderRadius: 10, background: "rgba(124,58,237,.06)", border: "1.5px solid rgba(124,58,237,.15)", color: "#7c3aed", transition: "all .15s", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.background = "linear-gradient(135deg,#7c3aed,#ec4899)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "transparent"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(124,58,237,.06)"; e.currentTarget.style.color = "#7c3aed"; e.currentTarget.style.borderColor = "rgba(124,58,237,.15)"; }}>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Proficiency bars */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 36 }}>
          {PROF.map(([name, val, grad]) => (
            <div key={name} style={{ background: "#fff", border: "1.5px solid #e8e2ff", borderRadius: 14, padding: "18px 20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#0f0a2e" }}>{name}</span>
                <span style={{ fontFamily: "'Syne',sans-serif", fontSize: 16, fontWeight: 800, background: grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{val}%</span>
              </div>
              <div style={{ height: 8, background: "#f3f0ff", borderRadius: 99, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${val}%`, borderRadius: 99, background: grad, boxShadow: "0 0 12px rgba(124,58,237,.3)" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MernCard({ tech }) {
  const [hov, setHov] = useState(false);
  return (
    <div className="card" style={{ padding: 24, cursor: "default", overflow: "hidden", position: "relative" }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {/* top gradient bar */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: tech.grad, opacity: hov ? 1 : 0, transition: "opacity .3s" }} />
      <div style={{ width: 54, height: 54, borderRadius: 16, background: tech.grad, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 16, boxShadow: hov ? "0 8px 24px rgba(0,0,0,.15)" : "0 4px 12px rgba(0,0,0,.08)", transition: "box-shadow .3s" }}>
        {tech.icon}
      </div>
      <div style={{ fontSize: 16, fontWeight: 800, color: "#0f0a2e", marginBottom: 8, fontFamily: "'Syne',sans-serif" }}>{tech.name}</div>
      <div style={{ fontSize: 13, color: "#9990b8", lineHeight: 1.6 }}>{tech.desc}</div>
    </div>
  );
}