import { useState } from "react";
import { ALL_PROJECTS, TAGS, TAG_META } from "../data";

export default function AllProjects() {
  const [tag, setTag] = useState("All");
  const [q, setQ] = useState("");
  const [view, setView] = useState("grid");

  const filtered = ALL_PROJECTS.filter(p =>
    (tag === "All" || p.tag === tag) &&
    (p.title.toLowerCase().includes(q.toLowerCase()) || p.desc.toLowerCase().includes(q.toLowerCase()))
  );

  const count = t => t === "All" ? ALL_PROJECTS.length : ALL_PROJECTS.filter(p => p.tag === t).length;

  return (
    <section className="section section-alt">
      <div className="container">
        <div className="eyebrow">📁 All Work</div>
        <h2 className="heading" style={{ marginBottom: 32 }}>All <span className="grad">Projects</span></h2>

        <div className="layout-row" style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>
          {/* Sidebar */}
          <div className="sidebar" style={{ width: 220, flexShrink: 0 }}>
            <div style={{ position: "relative", marginBottom: 20 }}>
              <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 14 }}>🔍</span>
              <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search…" className="inp" style={{ paddingLeft: 38, fontSize: 13 }} />
            </div>
            <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", color: "#c4b5fd", marginBottom: 12 }}>
              {filtered.length}/{ALL_PROJECTS.length} Projects
            </p>
            {TAGS.map(t => (
              <button key={t} className={`filter-btn ${tag === t ? "active" : ""}`} onClick={() => setTag(t)}>
                <span>{t}</span>
                <span style={{ fontSize: 11, padding: "1px 9px", borderRadius: 99, background: tag === t ? "rgba(255,255,255,.25)" : "rgba(124,58,237,.08)", color: tag === t ? "#fff" : "#c4b5fd" }}>{count(t)}</span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 6, marginBottom: 16 }}>
              <button className={`view-btn ${view === "grid" ? "active" : ""}`} onClick={() => setView("grid")}><GridIco /></button>
              <button className={`view-btn ${view === "list" ? "active" : ""}`} onClick={() => setView("list")}><ListIco /></button>
            </div>

            {view === "grid" ? (
              <div className="proj-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 14 }}>
                {filtered.map(p => <GridCard key={p.id} p={p} />)}
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map(p => <ListCard key={p.id} p={p} />)}
              </div>
            )}

            {filtered.length === 0 && (
              <div style={{ textAlign: "center", padding: "64px 0", color: "#c4b5fd" }}>
                <div style={{ fontSize: 40, marginBottom: 10 }}>🔍</div>
                <p>No projects match your search.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function GridCard({ p }) {
  const m = TAG_META[p.tag] || { bg: "#f3f0ff", border: "#e8e2ff", text: "#7c3aed" };
  const [hov, setHov] = useState(false);
  return (
    <div className="card" style={{ padding: 20 }} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div style={{ height: 64, background: m.bg, border: `1.5px solid ${m.border}`, borderRadius: 12, marginBottom: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>{p.emoji}</div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <span className="tag" style={{ background: m.bg, border: `1px solid ${m.border}`, color: m.text }}>{p.tag}</span>
        <span style={{ fontSize: 11, color: "#c4b5fd" }}>{p.date}</span>
      </div>
      <h3 style={{ fontSize: 15, fontWeight: 800, color: "#0f0a2e", marginBottom: 6, fontFamily: "'Syne',sans-serif" }}>{p.title}</h3>
      <p style={{ fontSize: 12.5, color: "#9990b8", lineHeight: 1.55, flex: 1, marginBottom: 12 }}>{p.desc}</p>
      <div style={{ display: "flex", gap: 14 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: "#7c3aed", cursor: "pointer" }}>🔗 Live</span>
        <span style={{ fontSize: 13, fontWeight: 700, color: "#9990b8", cursor: "pointer" }}>🐙 Code</span>
      </div>
    </div>
  );
}

function ListCard({ p }) {
  const m = TAG_META[p.tag] || { bg: "#f3f0ff", border: "#e8e2ff", text: "#7c3aed" };
  return (
    <div className="card" style={{ padding: "14px 20px", display: "flex", alignItems: "center", gap: 14 }}>
      <div style={{ width: 48, height: 48, borderRadius: 12, background: m.bg, border: `1.5px solid ${m.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>{p.emoji}</div>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 3, flexWrap: "wrap" }}>
          <h3 style={{ fontSize: 14.5, fontWeight: 800, color: "#0f0a2e", fontFamily: "'Syne',sans-serif" }}>{p.title}</h3>
          <span className="tag" style={{ background: m.bg, border: `1px solid ${m.border}`, color: m.text }}>{p.tag}</span>
        </div>
        <p style={{ fontSize: 12.5, color: "#9990b8" }}>{p.desc}</p>
      </div>
      <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: "#7c3aed", cursor: "pointer" }}>Live</span>
        <span style={{ fontSize: 13, fontWeight: 700, color: "#9990b8", cursor: "pointer" }}>Code</span>
      </div>
    </div>
  );
}

const GridIco = () => <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><rect x="0" y="0" width="6" height="6" rx="1.5"/><rect x="10" y="0" width="6" height="6" rx="1.5"/><rect x="0" y="10" width="6" height="6" rx="1.5"/><rect x="10" y="10" width="6" height="6" rx="1.5"/></svg>;
const ListIco = () => <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><rect x="0" y="1" width="16" height="2.5" rx="1.25"/><rect x="0" y="7" width="16" height="2.5" rx="1.25"/><rect x="0" y="13" width="16" height="2.5" rx="1.25"/></svg>;