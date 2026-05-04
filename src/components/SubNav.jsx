const TABS = ["By Stack", "By Year", "Open Source"];

export default function SubNav() {
  return (
    <div style={{ background: "#fff", borderBottom: "1px solid #ebebeb" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 2 }}>
        <div style={{ padding: "13px 18px", fontSize: 14.5, fontWeight: 700, color: "#1a1a1a", borderBottom: "2px solid #1a1a1a" }}>
          Portfolio
        </div>
        {TABS.map(tab => (
          <div
            key={tab}
            style={{ padding: "13px 14px", fontSize: 13.5, color: "#888", cursor: "pointer", transition: "color .15s" }}
            onMouseEnter={e => (e.target.style.color = "#1a1a1a")}
            onMouseLeave={e => (e.target.style.color = "#888")}
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
}
