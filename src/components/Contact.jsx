import { useState } from "react";
import { CONTACT_INFO, SOCIAL_LINKS } from "../data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    // Replace this with your actual form submission logic (e.g. EmailJS, Formspree)
    console.log("Form submitted:", form);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="Contact" style={{ paddingBottom: 72 }}>
      <div className="section-label">Let's Talk</div>
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-sub">Open to full-time MERN developer roles, freelance projects, and open-source collaborations.</p>

      <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>

        {/* ── Info Panel ── */}
        <ContactInfo />

        {/* ── Message Form ── */}
        <div style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: 14, padding: "28px" }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>✅</div>
              <p style={{ fontSize: 16, fontWeight: 700, color: "#2f9e44" }}>Message sent!</p>
              <p style={{ fontSize: 13, color: "#888", marginTop: 4 }}>I'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              <div style={{ display: "flex", gap: 12, marginBottom: 14 }}>
                <input
                  className="contact-input"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  style={{ flex: 1 }}
                />
                <input
                  className="contact-input"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  style={{ flex: 1 }}
                />
              </div>
              <input
                className="contact-input"
                name="subject"
                placeholder="Subject (e.g. MERN Developer Role — Company Name)"
                value={form.subject}
                onChange={handleChange}
                style={{ marginBottom: 14 }}
              />
              <textarea
                className="contact-input"
                name="message"
                placeholder="Your message…"
                rows={4}
                value={form.message}
                onChange={handleChange}
                style={{ resize: "vertical", marginBottom: 16 }}
              />
              <button
                onClick={handleSubmit}
                style={{ width: "100%", background: "#3b5bdb", color: "#fff", border: "none", borderRadius: 8, padding: "12px", fontSize: 15, fontWeight: 600, cursor: "pointer", transition: "background .2s", fontFamily: "inherit" }}
                onMouseEnter={e => (e.target.style.background = "#2f4ac0")}
                onMouseLeave={e => (e.target.style.background = "#3b5bdb")}
              >
                Send Message →
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── Sub-component: Contact Info ── */
function ContactInfo() {
  return (
    <div>
      {/* Info rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
        {CONTACT_INFO.map(({ icon, label, value }) => (
          <div key={label} style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: "#e7f5ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
              {icon}
            </div>
            <div>
              <p style={{ fontSize: 11, color: "#aaa", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".07em" }}>{label}</p>
              <p style={{ fontSize: 14, fontWeight: 500, color: "#1a1a1a" }}>{value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Social links */}
      <p style={{ fontSize: 13, fontWeight: 700, color: "#666", marginBottom: 10, textTransform: "uppercase", letterSpacing: ".07em" }}>
        Find me on
      </p>
      <div style={{ display: "flex", gap: 10 }}>
        {SOCIAL_LINKS.map(({ icon, name }) => (
          <div
            key={name}
            className="social-icon"
            title={name}
            style={{ width: 40, height: 40, borderRadius: 10, border: "1px solid #e8e8e8", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, cursor: "pointer", transition: "background .15s" }}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}
