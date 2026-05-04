const TAGS = ["MongoDB", "Express.js", "React 18", "Node.js", "TypeScript", "Socket.io", "Redux", "Docker"];
const STATS = [["8+", "Projects"], ["1.5yr", "Experience"], ["500+", "Commits"], ["95%", "Satisfaction"]];

export default function Hero({ onScrollTo }) {
  return (
    <section
      id="About"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(150deg, #f8f7ff 0%, #fdf4ff 40%, #f0f9ff 100%)",
        display: "flex", alignItems: "center",
        paddingTop: 100, paddingBottom: 60,
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div style={{ position: "absolute", top: -120, right: -120, width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -80, left: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(236,72,153,.1) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "40%", left: "38%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container" style={{ width: "100%" }}>
        <div className="hero-cols" style={{ display: "flex", alignItems: "center", gap: 56 }}>

          {/* ── Left ── */}
          <div style={{ flex: 1 }}>
            {/* Available badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(16,185,129,.1)", border: "1.5px solid rgba(16,185,129,.3)", borderRadius: 99, padding: "6px 18px", marginBottom: 28 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 0 3px rgba(16,185,129,.25)", display: "inline-block" }} />
              <span style={{ fontSize: 12.5, fontWeight: 700, color: "#059669", letterSpacing: ".03em" }}>Open to Work — MERN Developer Roles</span>
            </div>

            <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: 62, fontWeight: 800, lineHeight: 1.06, letterSpacing: "-.03em", marginBottom: 22, color: "#0f0a2e" }}>
              Full-Stack Dev<br />
              <span style={{ background: "linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                with the MERN
              </span><br />
              Stack 🚀
            </h1>

            <p style={{ fontSize: 17, color: "#5b5478", lineHeight: 1.8, maxWidth: 480, marginBottom: 36 }}>
              I build scalable, production-ready web apps —
              clean <strong style={{ color: "#7c3aed" }}>REST APIs</strong> on the backend, polished
              <strong style={{ color: "#ec4899" }}> React UIs</strong> on the frontend,
              and <strong style={{ color: "#06b6d4" }}>real-time features</strong> in between.
            </p>

            {/* Tech tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
              {TAGS.map((t, i) => {
                const colors = ["#7c3aed","#ec4899","#06b6d4","#10b981","#f97316","#8b5cf6","#0284c7","#f59e0b"];
                return (
                  <span key={t} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, fontWeight: 600, padding: "5px 13px", borderRadius: 8, background: `${colors[i]}15`, border: `1px solid ${colors[i]}30`, color: colors[i] }}>
                    {t}
                  </span>
                );
              })}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={() => onScrollTo("Projects")}>View Projects →</button>
              <button className="btn-ghost" onClick={() => onScrollTo("Contact")}>Let's Talk</button>
              <button className="btn-ghost" style={{ borderColor: "#e8e2ff", color: "#7c3aed" }}>📄 Resume</button>
            </div>
          </div>

          {/* ── Right ── */}
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
            {/* Avatar */}
            <div style={{ position: "relative" }}>
              <div style={{ width: 260, height: 260, borderRadius: 32, background: "linear-gradient(135deg, #7c3aed, #ec4899)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 90, boxShadow: "0 24px 64px rgba(124,58,237,.3)", position: "relative", overflow: "hidden" }}>
                👨‍💻
                {/* floating chips */}
                <div style={{ position: "absolute", top: 16, right: -16, background: "#fff", border: "1.5px solid #e8e2ff", borderRadius: 12, padding: "8px 14px", boxShadow: "0 4px 16px rgba(0,0,0,.1)", fontSize: 12, fontWeight: 700, color: "#7c3aed" }}>
                  ⚛️ React
                </div>
                <div style={{ position: "absolute", bottom: 16, left: -16, background: "#fff", border: "1.5px solid #e8e2ff", borderRadius: 12, padding: "8px 14px", boxShadow: "0 4px 16px rgba(0,0,0,.1)", fontSize: 12, fontWeight: 700, color: "#10b981" }}>
                  🍃 MongoDB
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="stats-row" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 10, width: "100%" }}>
              {STATS.map(([num, label], i) => {
                const grads = ["linear-gradient(135deg,#7c3aed,#ec4899)", "linear-gradient(135deg,#10b981,#06b6d4)", "linear-gradient(135deg,#f97316,#f59e0b)", "linear-gradient(135deg,#ec4899,#8b5cf6)"];
                return (
                  <div key={label} style={{ background: "#fff", border: "1.5px solid #e8e2ff", borderRadius: 14, padding: "14px", textAlign: "center", boxShadow: "0 2px 12px rgba(124,58,237,.07)" }}>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 28, fontWeight: 800, background: grads[i], WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{num}</div>
                    <div style={{ fontSize: 11, color: "#9990b8", textTransform: "uppercase", letterSpacing: ".07em", marginTop: 2 }}>{label}</div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}